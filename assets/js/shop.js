/* ================================================
   MAURYA COLLECTION — Shop Page JS
   Size Selection Popup → Add to Cart → Checkout
   ================================================ */

(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────────
  let cart = JSON.parse(localStorage.getItem('mc_cart') || '[]');
  let currentSort = 'featured';
  let currentFilterCat = 'all';
  let currentPriceMax = Infinity;

  // ── DOM References ─────────────────────────────────────────
  const grid = document.getElementById('shopProductGrid');
  const catNav = document.getElementById('shopCategoryNav');
  const totalBadge = document.getElementById('shopTotalCount');
  const cartBadgeEl = document.getElementById('floatCartBadge');
  const toast = document.getElementById('toast');

  // ── SIZE SELECTION POPUP ──────────────────────────────────
  // Inject size popup modal into DOM
  const sizePopupHtml = `
    <div id="sizePopupOverlay" style="
      display:none;position:fixed;inset:0;z-index:9999;
      background:rgba(0,0,0,0.55);backdrop-filter:blur(4px);
      align-items:flex-end;justify-content:center;
      padding:0;
    ">
      <div id="sizePopupSheet" style="
        background:#fff;border-radius:24px 24px 0 0;
        width:100%;max-width:540px;margin:0 auto;
        padding:0 0 24px 0;
        animation:slideUp 0.3s cubic-bezier(.4,0,.2,1);
        box-shadow:0 -8px 40px rgba(0,0,0,0.18);
      ">
        <!-- Drag Handle -->
        <div style="display:flex;justify-content:center;padding:12px 0 0;">
          <div style="width:40px;height:4px;border-radius:2px;background:#e2e8f0;"></div>
        </div>

        <!-- Product Preview -->
        <div style="display:flex;gap:14px;padding:16px 20px 12px;border-bottom:1px solid #f1f5f9;">
          <img id="sizePopupImg" src="" alt="" style="width:72px;height:72px;object-fit:cover;border-radius:12px;background:#f8fafc;flex-shrink:0;"
            onerror="this.src='public/images/brand/maurya-collection-icon.png'"/>
          <div style="flex:1;min-width:0;">
            <p id="sizePopupName" style="font-size:0.88rem;font-weight:800;color:#0f172a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></p>
            <p id="sizePopupPrice" style="font-size:1.1rem;font-weight:900;color:#7a001e;margin-top:4px;"></p>
            <p id="sizePopupFabric" style="font-size:0.7rem;color:#64748b;margin-top:2px;"></p>
          </div>
          <button id="sizePopupClose" style="
            width:30px;height:30px;border-radius:50%;border:none;
            background:#f1f5f9;color:#64748b;font-size:1.2rem;
            cursor:pointer;display:flex;align-items:center;justify-content:center;
            flex-shrink:0;align-self:flex-start;
          ">&times;</button>
        </div>

        <!-- Size Selection -->
        <div style="padding:16px 20px 12px;">
          <p style="font-size:0.78rem;font-weight:800;color:#475569;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:12px;">
            Select Size <span id="sizePopupRequired" style="color:#ef4444;">*</span>
          </p>
          <div id="sizePopupBtns" style="display:flex;gap:8px;flex-wrap:wrap;"></div>
          <p id="sizePopupErr" style="font-size:0.72rem;color:#ef4444;font-weight:700;margin-top:8px;display:none;">
            ⚠ Please select a size to continue
          </p>
        </div>

        <!-- Quantity -->
        <div style="padding:0 20px 12px;display:flex;align-items:center;gap:16px;">
          <span style="font-size:0.78rem;font-weight:800;color:#475569;text-transform:uppercase;letter-spacing:0.06em;">Quantity</span>
          <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e2e8f0;border-radius:10px;overflow:hidden;">
            <button id="qtyMinus" style="width:36px;height:36px;border:none;background:#f8fafc;cursor:pointer;font-size:1.1rem;font-weight:700;color:#0f172a;">−</button>
            <span id="qtyDisplay" style="width:36px;text-align:center;font-size:0.95rem;font-weight:800;color:#0f172a;">1</span>
            <button id="qtyPlus" style="width:36px;height:36px;border:none;background:#f8fafc;cursor:pointer;font-size:1.1rem;font-weight:700;color:#0f172a;">+</button>
          </div>
        </div>

        <!-- Actions -->
        <div style="padding:0 20px;display:flex;flex-direction:column;gap:10px;">
          <button id="sizePopupAddBtn" style="
            width:100%;padding:15px;
            background:linear-gradient(135deg,#7a001e 0%,#c0392b 100%);
            color:#fff;border:none;border-radius:14px;
            font-size:1rem;font-weight:800;cursor:pointer;
            display:flex;align-items:center;justify-content:center;gap:8px;
            transition:all 0.2s;letter-spacing:0.02em;
          ">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add to Bag
          </button>
          <button id="sizePopupBuyBtn" style="
            width:100%;padding:14px;
            background:#0f172a;color:#fff;
            border:none;border-radius:14px;
            font-size:0.95rem;font-weight:800;cursor:pointer;
            transition:all 0.2s;
          ">
            ⚡ Buy Now — Checkout Instantly
          </button>
        </div>
      </div>
    </div>
    <style>
      @keyframes slideUp {
        from { transform: translateY(100%); opacity: 0; }
        to   { transform: translateY(0);    opacity: 1; }
      }
      .size-pill {
        padding: 8px 16px;
        border: 2px solid #e2e8f0;
        border-radius: 10px;
        background: #fff;
        font-size: 0.82rem;
        font-weight: 700;
        color: #475569;
        cursor: pointer;
        transition: all 0.15s;
        min-width: 42px;
        text-align: center;
      }
      .size-pill:hover { border-color: #7a001e; color: #7a001e; background: #fff5f7; }
      .size-pill.selected { border-color: #7a001e; background: #7a001e; color: #fff; }
      #sizePopupAddBtn:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(122,0,30,0.3); }
      #sizePopupBuyBtn:hover { background: #1e293b; }
    </style>
  `;
  document.body.insertAdjacentHTML('beforeend', sizePopupHtml);

  // Size popup state
  let selectedProduct = null;
  let selectedSize = null;
  let selectedQty = 1;

  const sizePopupOverlay = document.getElementById('sizePopupOverlay');

  function openSizePopup(product) {
    selectedProduct = product;
    selectedSize = null;
    selectedQty = 1;

    // Fill product info
    document.getElementById('sizePopupImg').src = product.img;
    document.getElementById('sizePopupImg').alt = product.name;
    document.getElementById('sizePopupName').textContent = product.name;
    document.getElementById('sizePopupPrice').textContent = '₹' + product.price.toLocaleString('en-IN') + '/-';
    document.getElementById('sizePopupFabric').textContent = product.fabric ? '🧵 ' + product.fabric : '';
    document.getElementById('qtyDisplay').textContent = '1';
    document.getElementById('sizePopupErr').style.display = 'none';

    // Render size buttons
    const btnsContainer = document.getElementById('sizePopupBtns');
    const sizes = product.sizes && product.sizes.length ? product.sizes : ['Free Size'];
    btnsContainer.innerHTML = sizes.map(s => `
      <button class="size-pill" data-size="${s}">${s}</button>
    `).join('');

    // Auto-select if only one size
    if (sizes.length === 1) {
      selectedSize = sizes[0];
      btnsContainer.querySelector('.size-pill').classList.add('selected');
    }

    btnsContainer.querySelectorAll('.size-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        btnsContainer.querySelectorAll('.size-pill').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSize = btn.dataset.size;
        document.getElementById('sizePopupErr').style.display = 'none';
      });
    });

    sizePopupOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeSizePopup() {
    sizePopupOverlay.style.display = 'none';
    document.body.style.overflow = '';
    selectedProduct = null;
    selectedSize = null;
    selectedQty = 1;
  }

  // Close on overlay click
  sizePopupOverlay.addEventListener('click', (e) => {
    if (e.target === sizePopupOverlay) closeSizePopup();
  });
  document.getElementById('sizePopupClose').addEventListener('click', closeSizePopup);

  // Quantity controls
  document.getElementById('qtyMinus').addEventListener('click', () => {
    if (selectedQty > 1) {
      selectedQty--;
      document.getElementById('qtyDisplay').textContent = selectedQty;
    }
  });
  document.getElementById('qtyPlus').addEventListener('click', () => {
    if (selectedQty < 20) {
      selectedQty++;
      document.getElementById('qtyDisplay').textContent = selectedQty;
    }
  });

  // Add to Bag button
  document.getElementById('sizePopupAddBtn').addEventListener('click', () => {
    if (!selectedSize) {
      document.getElementById('sizePopupErr').style.display = 'block';
      document.getElementById('sizePopupBtns').style.animation = 'none';
      setTimeout(() => document.getElementById('sizePopupBtns').style.animation = '', 100);
      return;
    }

    const cartKey = selectedProduct.id + '-' + selectedSize;
    const existing = cart.find(c => c.cartKey === cartKey);
    if (existing) {
      existing.qty += selectedQty;
    } else {
      cart.push({
        id: selectedProduct.id,
        cartKey,
        name: selectedProduct.name,
        price: selectedProduct.price,
        img: selectedProduct.img,
        size: selectedSize,
        qty: selectedQty
      });
    }

    localStorage.setItem('mc_cart', JSON.stringify(cart));
    localStorage.setItem('maurya_cart', JSON.stringify(cart));
    updateCartBadge();

    const btn = document.getElementById('sizePopupAddBtn');
    btn.innerHTML = '✓ Added to Bag!';
    btn.style.background = '#16a34a';
    setTimeout(() => {
      btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> Add to Bag';
      btn.style.background = '';
      closeSizePopup();
    }, 900);

    showToast(`"${selectedProduct.name.slice(0, 20)}..." (${selectedSize}) added to Bag ✓`);
    openCart();
  });

  // Buy Now — go straight to checkout
  document.getElementById('sizePopupBuyBtn').addEventListener('click', () => {
    if (!selectedSize) {
      document.getElementById('sizePopupErr').style.display = 'block';
      return;
    }

    const cartKey = selectedProduct.id + '-' + selectedSize;
    const existing = cart.find(c => c.cartKey === cartKey);
    if (existing) {
      existing.qty += selectedQty;
    } else {
      cart.push({
        id: selectedProduct.id,
        cartKey,
        name: selectedProduct.name,
        price: selectedProduct.price,
        img: selectedProduct.img,
        size: selectedSize,
        qty: selectedQty
      });
    }
    localStorage.setItem('mc_cart', JSON.stringify(cart));
    window.location.href = 'checkout.html';
  });

  // ── Build Category Navigation Tabs ─────────────────────────
  function renderCategoryNav() {
    if (!catNav) return;
    const catKeys = Object.keys(CATEGORIES);
    const totalCount = PRODUCTS.length;

    let html = `
      <button class="category-nav-pill ${currentFilterCat === 'all' ? 'active' : ''}" data-cat="all">
        ✨ All Collections <span class="cat-count">${totalCount}</span>
      </button>
    `;

    catKeys.forEach(key => {
      const meta = CATEGORIES[key];
      const count = PRODUCTS.filter(p => p.category === key).length;
      if (count > 0) {
        html += `
          <button class="category-nav-pill ${currentFilterCat === key ? 'active' : ''}" data-cat="${key}">
            ${meta.icon || '🛍️'} ${meta.title.split(' ').slice(0, 2).join(' ')} <span class="cat-count">${count}</span>
          </button>
        `;
      }
    });

    catNav.innerHTML = html;

    catNav.querySelectorAll('.category-nav-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.cat;
        currentFilterCat = cat;
        catNav.querySelectorAll('.category-nav-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (cat === 'all') {
          renderAllSections(PRODUCTS);
        } else {
          const filtered = PRODUCTS.filter(p => p.category === cat);
          renderSingleCategory(cat, filtered);
        }
      });
    });
  }

  // ── Render All 158 Products Grouped by Category Section ───
  function renderAllSections(productsList) {
    if (!grid) return;
    if (totalBadge) totalBadge.textContent = productsList.length + ' Products (158 Total)';

    const catKeys = Object.keys(CATEGORIES);
    let fullHtml = '';

    catKeys.forEach(catKey => {
      const meta = CATEGORIES[catKey];
      let items = productsList.filter(p => p.category === catKey);
      if (currentPriceMax < Infinity) items = items.filter(p => p.price <= currentPriceMax);
      items = sortItems(items, currentSort);

      if (items.length > 0) {
        fullHtml += `
          <div class="category-section-block" id="section-${catKey}">
            <div class="category-section-header">
              <div class="cat-sec-left">
                <span class="cat-sec-icon">${meta.icon || '🛍️'}</span>
                <div>
                  <h2 class="cat-sec-title">${meta.title}</h2>
                  <span style="font-size:0.75rem;color:#64748b;">${items.length} Designs • ₹${meta.price}/-</span>
                </div>
              </div>
              <span class="cat-sec-badge">${meta.tag || 'Collection'}</span>
            </div>
            <div class="shop-products-grid">
              ${items.map(renderCardHtml).join('')}
            </div>
          </div>
        `;
      }
    });

    if (!fullHtml) {
      grid.innerHTML = '<div style="text-align:center;padding:60px 20px;color:#888;font-size:1rem;">No matching garments found</div>';
    } else {
      grid.innerHTML = fullHtml;
    }
    attachCardEvents();
  }

  // ── Render Single Category ────────────────────────────────
  function renderSingleCategory(catKey, items) {
    if (!grid) return;
    const meta = CATEGORIES[catKey] || { title: catKey, icon: '🛍️', tag: 'Collection' };
    let sorted = sortItems(items, currentSort);
    if (currentPriceMax < Infinity) sorted = sorted.filter(p => p.price <= currentPriceMax);
    if (totalBadge) totalBadge.textContent = sorted.length + ' Products';

    grid.innerHTML = `
      <div class="category-section-block" id="section-${catKey}">
        <div class="category-section-header">
          <div class="cat-sec-left">
            <span class="cat-sec-icon">${meta.icon || '🛍️'}</span>
            <div>
              <h2 class="cat-sec-title">${meta.title}</h2>
              <span style="font-size:0.75rem;color:#64748b;">Showing all ${sorted.length} designs • ₹${meta.price}/-</span>
            </div>
          </div>
          <button class="cat-sec-badge" id="btnShowAll" style="cursor:pointer;border:none;">Show All (${PRODUCTS.length}) →</button>
        </div>
        <div class="shop-products-grid">
          ${sorted.map(renderCardHtml).join('')}
        </div>
      </div>
    `;

    document.getElementById('btnShowAll')?.addEventListener('click', () => {
      currentFilterCat = 'all';
      catNav.querySelectorAll('.category-nav-pill').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
      renderAllSections(PRODUCTS);
    });
    attachCardEvents();
  }

  // ── Render Single Product Card HTML ───────────────────────
  function renderCardHtml(p) {
    const discount = p.mrp ? Math.round((1 - p.price / p.mrp) * 100) : 0;
    return `
      <article class="shop-card" data-id="${p.id}" data-category="${p.category}">
        <div class="shop-card-top-row">
          ${p.badge ? `<span class="${p.badge === 'Bestseller' ? 'card-bestseller-tag' : 'card-new-tag'}">${p.badge}</span>` : '<span></span>'}
          <button class="card-wishlist-circle" aria-label="Add to wishlist" data-wishlist="${p.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>

        <a href="product.html?id=${p.id}" class="shop-card-link" style="text-decoration:none;color:inherit;display:block;">
          <div class="shop-card-img-wrap">
            <img src="${p.img}" alt="${p.name}" loading="lazy" width="300" height="300"
              onerror="this.src='public/images/brand/maurya-collection-icon.png'"/>
            ${discount >= 5 ? `<span style="position:absolute;top:8px;left:8px;background:#ef4444;color:#fff;font-size:0.62rem;font-weight:800;padding:2px 7px;border-radius:6px;">${discount}% OFF</span>` : ''}
          </div>

          <div class="shop-rating-pill">
            <span class="shop-rating-star">★</span>
            <span>${p.rating}</span>
            <span class="shop-rating-count">(${p.reviews})</span>
          </div>

          <h3 class="shop-card-title">${p.name}</h3>

          ${p.fabric ? `<div style="font-size:0.7rem;color:#7a001e;font-weight:700;margin-bottom:6px;background:#fef2f2;padding:2px 8px;border-radius:4px;width:fit-content;">🧵 ${p.fabric}</div>` : ''}

          ${p.sizes && p.sizes.length ? `
            <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px;">
              ${p.sizes.map(s => `<span style="font-size:0.62rem;font-weight:700;padding:1px 6px;border:1px solid #e2e8f0;border-radius:4px;color:#475569;background:#f8fafc;">${s}</span>`).join('')}
            </div>
          ` : ''}

          <div class="shop-card-price-block">
            <div class="shop-price-row">
              <span class="shop-card-price">₹${p.price.toLocaleString('en-IN')}</span>
              ${p.mrp ? `<span class="shop-card-was-price">₹${p.mrp.toLocaleString('en-IN')}</span>` : ''}
            </div>
          </div>
        </a>

        <button class="btn-card-add-cart add-cart"
          data-id="${p.id}"
          data-name="${p.name.replace(/"/g, '&quot;')}"
          data-price="${p.price}"
          data-img="${p.img}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Add to Bag
        </button>
      </article>
    `;
  }

  // ── Sort Helper ───────────────────────────────────────────
  function sortItems(arr, sort) {
    const sorted = [...arr];
    if (sort === 'price-low') sorted.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') sorted.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') sorted.sort((a, b) => b.rating - a.rating);
    else if (sort === 'newest') sorted.sort((a, b) => b.id - a.id);
    return sorted;
  }

  // ── Event Handlers on Cards ───────────────────────────────
  function attachCardEvents() {
    // "Add to Bag" — Opens size popup first
    grid.querySelectorAll('.add-cart').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const id = +btn.dataset.id;
        const product = PRODUCTS.find(p => p.id === id);
        if (product) {
          openSizePopup(product);
        }
      });
    });

    grid.querySelectorAll('.card-wishlist-circle').forEach(w => {
      w.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        w.classList.toggle('active');
        showToast(w.classList.contains('active') ? 'Saved to Wishlist ❤️' : 'Removed from Wishlist');
      });
    });
  }

  // ── Toast Notification ────────────────────────────────────
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 2500);
  }

  // ── Cart UI ────────────────────────────────────────────────
  function updateCartBadge() {
    const total = cart.reduce((s, c) => s + c.qty, 0);
    if (cartBadgeEl) cartBadgeEl.textContent = total;
    const navBadge = document.getElementById('cartBadge');
    if (navBadge) navBadge.textContent = total;
  }

  const floatCart = document.getElementById('floatCartBtn');
  const cartOpenBtn = document.getElementById('cartOpen');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose = document.getElementById('cartClose');

  function openCart() {
    if (!cartSidebar || !cartOverlay) return;
    renderCartSidebar();
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
  }

  function closeCart() {
    if (!cartSidebar || !cartOverlay) return;
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
  }

  floatCart?.addEventListener('click', openCart);
  cartOpenBtn?.addEventListener('click', openCart);
  cartClose?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);

  function renderCartSidebar() {
    const body = document.getElementById('cartBody');
    const sub = document.getElementById('cartSubtotal');
    const tot = document.getElementById('cartTotal');
    const cnt = document.getElementById('cartItemCount');
    if (!body) return;

    const totalQty = cart.reduce((s, c) => s + c.qty, 0);
    if (cnt) cnt.textContent = `(${totalQty})`;

    if (!cart.length) {
      body.innerHTML = `<div style="text-align:center;padding:50px 20px;color:#94a3b8;">
        <p style="font-size:2.5rem;margin-bottom:12px;">🛍️</p>
        <p style="font-weight:700;font-size:1rem;color:#475569;">Your Bag is Empty</p>
        <p style="font-size:0.78rem;margin-top:6px;">Browse our 158 collections & add items.</p>
        </div>`;
      if (sub) sub.textContent = '₹0';
      if (tot) tot.textContent = '₹0';
      return;
    }

    body.innerHTML = cart.map(item => `
      <div class="cart-item-row" style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid #f1f5f9;align-items:center;">
        <img src="${item.img}" alt="${item.name}" width="60" height="60"
          style="object-fit:cover;border-radius:10px;background:#f8fafc;flex-shrink:0;"
          onerror="this.src='public/images/brand/maurya-collection-icon.png'"/>
        <div style="flex:1;min-width:0;">
          <p style="font-size:0.8rem;font-weight:700;color:#0f172a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.name}</p>
          <p style="font-size:0.7rem;color:#64748b;margin-top:2px;">Size: <strong>${item.size || 'N/A'}</strong></p>
          <p style="font-size:0.88rem;font-weight:800;color:#7a001e;margin-top:2px;">₹${(item.price * item.qty).toLocaleString('en-IN')}</p>
          <div style="display:flex;align-items:center;gap:8px;margin-top:8px;">
            <button class="cart-qbtn" data-minus="${item.cartKey || item.id}"
              style="width:28px;height:28px;border-radius:8px;border:1.5px solid #e2e8f0;background:#fff;cursor:pointer;font-weight:800;font-size:1rem;">−</button>
            <span style="font-size:0.88rem;font-weight:800;min-width:20px;text-align:center;">${item.qty}</span>
            <button class="cart-qbtn" data-plus="${item.cartKey || item.id}"
              style="width:28px;height:28px;border-radius:8px;border:1.5px solid #e2e8f0;background:#fff;cursor:pointer;font-weight:800;font-size:1rem;">+</button>
            <button class="cart-del" data-del="${item.cartKey || item.id}"
              style="margin-left:auto;border:none;background:none;color:#ef4444;font-size:0.75rem;cursor:pointer;font-weight:700;">✕ Remove</button>
          </div>
        </div>
      </div>
    `).join('');

    const sum = cart.reduce((s, c) => s + c.price * c.qty, 0);
    if (sub) sub.textContent = '₹' + sum.toLocaleString('en-IN');
    if (tot) tot.textContent = '₹' + sum.toLocaleString('en-IN');

    body.querySelectorAll('[data-minus]').forEach(b => b.addEventListener('click', () => adjustQty(b.dataset.minus, -1)));
    body.querySelectorAll('[data-plus]').forEach(b => b.addEventListener('click', () => adjustQty(b.dataset.plus, 1)));
    body.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => adjustQty(b.dataset.del, -999)));
  }

  function adjustQty(key, delta) {
    const item = cart.find(c => (c.cartKey || String(c.id)) === String(key));
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(c => (c.cartKey || String(c.id)) !== String(key));
    localStorage.setItem('mc_cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartSidebar();
  }

  // ── Search ────────────────────────────────────────────────
  const floatSearch = document.getElementById('floatSearchBtn');
  floatSearch?.addEventListener('click', () => {
    const q = prompt('Search all 158 products:');
    if (q && q.trim()) {
      const lower = q.toLowerCase();
      const results = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(lower) ||
        p.category.includes(lower) ||
        p.categoryTitle.toLowerCase().includes(lower) ||
        (p.fabric && p.fabric.toLowerCase().includes(lower))
      );
      if (totalBadge) totalBadge.textContent = `${results.length} Results for "${q}"`;
      grid.innerHTML = `
        <div class="category-section-block">
          <div class="category-section-header">
            <h2 class="cat-sec-title">Search Results (${results.length})</h2>
            <button id="btnResetSearch" class="cat-sec-badge" style="border:none;cursor:pointer;">← Show All</button>
          </div>
          <div class="shop-products-grid">
            ${results.length ? results.map(renderCardHtml).join('') : '<p style="padding:40px;color:#888;">No designs matched your search.</p>'}
          </div>
        </div>
      `;
      document.getElementById('btnResetSearch')?.addEventListener('click', () => renderAllSections(PRODUCTS));
      attachCardEvents();
    }
  });

  // ── Sort / Filter Sheets ────────────────────────────────
  const sortSheet = document.getElementById('sortBottomSheet');
  const filterSheet = document.getElementById('filterBottomSheet');
  const sheetOverlay = document.getElementById('sheetOverlay');
  const btnOpenSort = document.getElementById('btnOpenSort');
  const btnOpenFilter = document.getElementById('btnOpenFilter');

  function openSheet(s) { sheetOverlay?.classList.add('open'); s?.classList.add('open'); }
  function closeSheets() {
    sheetOverlay?.classList.remove('open');
    sortSheet?.classList.remove('open');
    filterSheet?.classList.remove('open');
  }

  btnOpenSort?.addEventListener('click', () => openSheet(sortSheet));
  btnOpenFilter?.addEventListener('click', () => openSheet(filterSheet));
  sheetOverlay?.addEventListener('click', closeSheets);
  document.querySelectorAll('.sheet-close-btn').forEach(b => b.addEventListener('click', closeSheets));

  document.querySelectorAll('.sort-option-item').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.sort-option-item').forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      currentSort = opt.dataset.sort;
      if (currentFilterCat === 'all') renderAllSections(PRODUCTS);
      else renderSingleCategory(currentFilterCat, PRODUCTS.filter(p => p.category === currentFilterCat));
      closeSheets();
    });
  });

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navClose = document.getElementById('navClose');
  const navOverlay = document.getElementById('navOverlay');
  hamburger?.addEventListener('click', () => navLinks?.classList.add('open'));
  navClose?.addEventListener('click', () => navLinks?.classList.remove('open'));
  navOverlay?.addEventListener('click', () => navLinks?.classList.remove('open'));

  // ── Fast Loader Auto-Dismiss (<800ms) ─────────────────────
  const mcLoader = document.getElementById('mcLoader');
  const mcLoaderStatus = document.getElementById('mcLoaderStatus');
  if (mcLoader) {
    const statuses = ['Loading 158 Garments...', 'Organizing Collections...', 'Welcome to Maurya!'];
    let sIdx = 0;
    const interval = setInterval(() => {
      sIdx++;
      if (mcLoaderStatus && statuses[sIdx]) mcLoaderStatus.textContent = statuses[sIdx];
    }, 240);

    const hideLoader = () => {
      clearInterval(interval);
      if (mcLoader && !mcLoader.classList.contains('fade-out')) {
        mcLoader.classList.add('fade-out');
        setTimeout(() => { if (mcLoader.parentNode) mcLoader.parentNode.removeChild(mcLoader); }, 300);
      }
    };
    setTimeout(hideLoader, 750);
    window.addEventListener('load', () => setTimeout(hideLoader, 250), { once: true });
  }

  // ── Init ──────────────────────────────────────────────────
  renderCategoryNav();

  // Check URL search params for direct category links
  const urlParams = new URLSearchParams(window.location.search);
  const requestedCat = urlParams.get('category') || urlParams.get('cat');
  
  if (requestedCat && requestedCat !== 'all') {
    const catKeys = Object.keys(CATEGORIES);
    const matchedKey = catKeys.find(k => k === requestedCat || k.includes(requestedCat) || requestedCat.includes(k));
    if (matchedKey) {
      currentFilterCat = matchedKey;
      catNav?.querySelectorAll('.category-nav-pill').forEach(b => {
        b.classList.toggle('active', b.dataset.cat === matchedKey);
      });
      const filtered = PRODUCTS.filter(p => p.category === matchedKey);
      renderSingleCategory(matchedKey, filtered);
    } else {
      renderAllSections(PRODUCTS);
    }
  } else {
    renderAllSections(PRODUCTS);
  }

  updateCartBadge();

})();

