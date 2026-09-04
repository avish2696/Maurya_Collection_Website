export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname.toLowerCase();

    // 0. Defense-in-depth: Block known scanner paths and sensitive files (.git, .env, backups, DB dumps, phpmyadmin, etc.)
    const blockedPatterns = [
      /^\/\.git/,
      /^\/\.env/,
      /^\/\.wrangler/,
      /\.(sql|bak|backup|dump|config|log|ini|sh|key|pem|cert)$/i,
      /^\/(wp-admin|wp-login|phpmyadmin|pma|_phpmyadmin|adminer)/i
    ];

    if (blockedPatterns.some(pattern => pattern.test(pathname))) {
      return new Response('Access Denied', { status: 403, headers: { 'Content-Type': 'text/plain' } });
    }

    // 1. Try to fetch the requested path directly from static assets
    let response = await env.ASSETS.fetch(request);

    // 2. If 404 and path has no file extension (e.g., /shop, /product, /checkout, /dashboard), try with .html or under /admin/
    if (response.status === 404 && !url.pathname.includes('.')) {
      const cleanPath = pathname.replace(/\/+$/, '');
      if (cleanPath) {
        // Try cleanPath.html
        let htmlUrl = new URL(cleanPath + '.html' + url.search, request.url);
        let htmlResponse = await env.ASSETS.fetch(new Request(htmlUrl, request));
        if (htmlResponse.status === 200 || htmlResponse.status === 304) {
          return htmlResponse;
        }

        // If user navigated to /dashboard, try /admin/dashboard.html
        if (cleanPath === '/dashboard') {
          htmlUrl = new URL('/admin/dashboard.html' + url.search, request.url);
          htmlResponse = await env.ASSETS.fetch(new Request(htmlUrl, request));
          if (htmlResponse.status === 200 || htmlResponse.status === 304) {
            return htmlResponse;
          }
        }
      }
    }

    // 3. If still 404 and not an asset request (css/js/images), serve 404.html
    if (response.status === 404 && !pathname.startsWith('/assets/') && !pathname.startsWith('/public/') && !pathname.startsWith('/src/')) {
      const notFoundUrl = new URL('/404.html', request.url);
      const notFoundResponse = await env.ASSETS.fetch(new Request(notFoundUrl, request));
      return new Response(notFoundResponse.body, {
        status: 404,
        headers: notFoundResponse.headers
      });
    }

    return response;
  }
};
