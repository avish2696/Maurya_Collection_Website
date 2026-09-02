export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // 1. Try to fetch the requested path directly from static assets
    let response = await env.ASSETS.fetch(request);

    // 2. If 404 and path has no file extension (e.g., /shop, /product, /checkout), try with .html
    if (response.status === 404 && !pathname.includes('.')) {
      const cleanPath = pathname.replace(/\/+$/, '');
      if (cleanPath) {
        const htmlUrl = new URL(cleanPath + '.html' + url.search, request.url);
        const htmlResponse = await env.ASSETS.fetch(new Request(htmlUrl, request));
        if (htmlResponse.status === 200 || htmlResponse.status === 304) {
          return htmlResponse;
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
