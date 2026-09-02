/* ================================================
   MAURYA COLLECTION — JavaScript
   Features: Hero Slider, Mobile Menu, Cart,
   Live Search & Empty State, Form Validation & Messages,
   Scroll Effects, Toast, Testimonials
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- ULTRA-FAST LUXURY LOADER (SUB-1.2S DISPLAY) ---- */
  const mcLoader = document.getElementById('mcLoader');
  const mcLoaderStatus = document.getElementById('mcLoaderStatus');
  if (mcLoader) {
    const statuses = [
      'Weaving Elegance...',
      'Curating Pure Cottons...',
      'Welcome to Maurya Collection'
    ];
    let statusIdx = 0;
    const statusInterval = setInterval(() => {
      statusIdx++;
      if (mcLoaderStatus && statuses[statusIdx]) {
        mcLoaderStatus.textContent = statuses[statusIdx];
      }
    }, 280);

    const hideLoader = () => {
      clearInterval(statusInterval);
      if (mcLoader && !mcLoader.classList.contains('fade-out')) {
        mcLoader.classList.add('fade-out');
        setTimeout(() => {
          if (mcLoader.parentNode) mcLoader.parentNode.removeChild(mcLoader);
        }, 350);
      }
    };

    // Fast, ultra-smooth transition in 900ms (< 1.2s total)
    setTimeout(hideLoader, 900);
    window.addEventListener('load', () => setTimeout(hideLoader, 400), { once: true });
  }

  /* ---- ANNOUNCEMENT BAR CLOSE ---- */
  const announceBar = document.getElementById('announceBar');
  const announceClose = document.getElementById('announceClose');
  if (announceClose && announceBar) {
    announceClose.addEventListener('click', () => {
      announceBar.style.transform = 'translateY(-100%)';
      announceBar.style.transition = 'transform 0.3s ease';
      setTimeout(() => {
        announceBar.remove();
        document.documentElement.style.setProperty('--announce-h', '0px');
      }, 300);
    });
  }

  /* ---- NAVBAR SCROLL EFFECT ---- */
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (navbar) {
      if (y > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    if (scrollTopBtn) {
      if (y > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    }
    updateActiveNavLink();
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- ACTIVE NAV LINK ---- */
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    
    sections.forEach(s => {
      const top = s.getBoundingClientRect().top;
      if (top < 150) current = s.id;
    });

    navLinks.forEach(l => {
      const href = l.getAttribute('href');
      l.classList.toggle('active', href === '#' + current);
    });

    const mbnItems = document.querySelectorAll('.mbn-item');
    mbnItems.forEach(m => m.classList.remove('active'));
    if (current === 'home' || current === '') {
      document.querySelector('.mbn-item[data-page="home"]')?.classList.add('active');
    } else if (current === 'collections') {
      document.querySelector('.mbn-item[data-page="cat"]')?.classList.add('active');
    } else if (current === 'arrivals') {
      document.querySelector('.mbn-item[data-page="shop"]')?.classList.add('active');
    } else if (current === 'contact') {
      document.querySelector('.mbn-item[data-page="account"]')?.classList.add('active');
    }
  }

  /* ---- HAMBURGER / MOBILE MENU ---- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');
  const navClose = document.getElementById('navClose');

  function openNav() {
    if (!navLinks) return;
    navLinks.classList.add('open');
    navOverlay?.classList.add('show');
    hamburger?.classList.add('open');
    hamburger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    if (!navLinks) return;
    navLinks.classList.remove('open');
    navOverlay?.classList.remove('show');
    hamburger?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    if (navLinks?.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  navClose?.addEventListener('click', closeNav);
  navOverlay?.addEventListener('click', closeNav);
  document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', closeNav));

  /* ---- SEARCH BAR & EMPTY STATE ---- */
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  const searchInput = document.getElementById('searchInput');
  const searchEmptyState = document.getElementById('searchEmptyState');
  const searchEmptyQuery = document.getElementById('searchEmptyQuery');
  const productCards = document.querySelectorAll('.product-card');

  searchToggle?.addEventListener('click', () => {
    const isOpen = searchBar?.classList.toggle('open');
    searchToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen) {
      searchInput?.focus();
    } else {
      clearSearch();
    }
  });

  function performSearch(query) {
    const term = query.trim().toLowerCase();
    let matchesCount = 0;

    if (!term) {
      clearSearch();
      return;
    }

    productCards.forEach(card => {
      const name = card.querySelector('.pcard-name')?.textContent.toLowerCase() || '';
      const cat = card.querySelector('.pcard-cat')?.textContent.toLowerCase() || '';
      const price = card.querySelector('.price-now')?.textContent.toLowerCase() || '';

      const isMatch = name.includes(term) || cat.includes(term) || price.includes(term);
      if (isMatch) {
        card.classList.remove('hidden');
        card.style.display = '';
        matchesCount++;
      } else {
        card.classList.add('hidden');
        card.style.display = 'none';
      }
    });

    if (searchEmptyState && searchEmptyQuery) {
      if (matchesCount === 0) {
        searchEmptyQuery.textContent = query;
        searchEmptyState.hidden = false;
      } else {
        searchEmptyState.hidden = true;
      }
    }
  }

  function clearSearch() {
    productCards.forEach(card => {
      card.classList.remove('hidden');
      card.style.display = '';
    });
    if (searchEmptyState) searchEmptyState.hidden = true;
  }

  searchInput?.addEventListener('input', (e) => {
    performSearch(e.target.value);
  });

  document.querySelector('.search-submit')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (searchInput) {
      performSearch(searchInput.value);
      document.getElementById('arrivals')?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (searchBar?.classList.contains('open')) {
        searchBar.classList.remove('open');
        searchToggle?.setAttribute('aria-expanded', 'false');
        clearSearch();
      }
      closeNav();
      closeCart();
    }
  });

  /* ---- HERO SLIDER ---- */
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let sliderTimer;

  function goToSlide(n) {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) {
      dots[currentSlide].classList.remove('active');
      dots[currentSlide].setAttribute('aria-selected', 'false');
    }
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
      dots[currentSlide].classList.add('active');
      dots[currentSlide].setAttribute('aria-selected', 'true');
    }
  }

  function startSlider() {
    if (slides.length > 1) {
      sliderTimer = setInterval(() => goToSlide(currentSlide + 1), 4500);
    }
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(sliderTimer);
      goToSlide(parseInt(dot.dataset.index || '0', 10));
      startSlider();
    });
  });

  startSlider();

  /* ---- WISHLIST TOGGLE ---- */
  document.querySelectorAll('.pcard-wishlist').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const isActive = btn.classList.contains('active');
      const productName = btn.closest('.product-card')?.querySelector('.pcard-name')?.textContent || 'Item';
      showToast(isActive ? `❤️ "${productName}" added to Wishlist` : `🤍 Removed from Wishlist`, 'default');
    });
  });

  /* ---- CART SYSTEM ---- */
  const cartOpen = document.getElementById('cartOpen');
  const cartClose = document.getElementById('cartClose');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartBadge = document.getElementById('cartBadge');
  const cartItemCount = document.getElementById('cartItemCount');
  const cartBody = document.getElementById('cartBody');
  const cartFoot = document.getElementById('cartFoot');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartTotal = document.getElementById('cartTotal');
  const cartDelivery = document.getElementById('cartDelivery');

  let cart = JSON.parse(localStorage.getItem('maurya_cart') || '[]');

  function saveCart() {
    localStorage.setItem('maurya_cart', JSON.stringify(cart));
  }

  function openCart() {
    if (!cartSidebar) return;
    cartSidebar.classList.add('open');
    cartOverlay?.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (!cartSidebar) return;
    cartSidebar.classList.remove('open');
    cartOverlay?.classList.remove('show');
    document.body.style.overflow = '';
  }

  cartOpen?.addEventListener('click', openCart);
  cartClose?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);

  function attachCartShopNow() {
    document.getElementById('cartShopNow')?.addEventListener('click', () => {
      closeCart();
      document.getElementById('arrivals')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  function updateCartUI() {
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);

    // Badge
    if (cartBadge) {
      cartBadge.textContent = totalQty;
      cartBadge.classList.toggle('show', totalQty > 0);
    }

    // Count label
    if (cartItemCount) {
      cartItemCount.textContent = `(${totalQty})`;
    }

    // Totals
    if (cartSubtotal) cartSubtotal.textContent = `₹${total.toLocaleString('en-IN')}`;
    if (cartDelivery) cartDelivery.textContent = total >= 999 ? 'FREE' : '₹99';
    const finalTotal = total + (total >= 999 || total === 0 ? 0 : 99);
    if (cartTotal) cartTotal.textContent = `₹${finalTotal.toLocaleString('en-IN')}`;

    // Show/hide footer
    if (cartFoot) {
      cartFoot.style.display = cart.length > 0 ? 'block' : 'none';
    }

    // Render items
    if (cartBody) {
      if (cart.length === 0) {
        cartBody.innerHTML = `
          <div class="cart-empty-state">
            <div class="cart-empty-icon" aria-hidden="true">🛍️</div>
            <h4>Your cart is empty</h4>
            <p>Discover our beautiful collection and add your favourites!</p>
            <button class="btn-primary" id="cartShopNow">Browse Collection</button>
          </div>`;
        attachCartShopNow();
      } else {
        cartBody.innerHTML = cart.map(item => `
          <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-img">
              <img src="${item.img}" alt="${item.name}" loading="lazy" />
            </div>
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-price">₹${(item.price).toLocaleString('en-IN')}</div>
              <div class="cart-item-qty">
                <button class="qty-btn qty-minus" data-id="${item.id}" aria-label="Decrease quantity for ${item.name}">−</button>
                <span class="qty-num">${item.qty}</span>
                <button class="qty-btn qty-plus" data-id="${item.id}" aria-label="Increase quantity for ${item.name}">+</button>
              </div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove ${item.name} from cart">×</button>
          </div>
        `).join('');

        cartBody.querySelectorAll('.qty-minus').forEach(btn => {
          btn.addEventListener('click', () => changeQty(btn.dataset.id, -1));
        });
        cartBody.querySelectorAll('.qty-plus').forEach(btn => {
          btn.addEventListener('click', () => changeQty(btn.dataset.id, 1));
        });
        cartBody.querySelectorAll('.cart-item-remove').forEach(btn => {
          btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
        });
      }
    }
  }

  function addToCart(name, price, img) {
    const id = name.replace(/\s+/g, '-').toLowerCase();
    const existing = cart.find(i => i.id === id);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ id, name, price: parseInt(price, 10), img, qty: 1 });
    }
    saveCart();
    updateCartUI();
    showToast(`🛍️ "${name}" added to cart!`, 'success');
    
    if (cartBadge) {
      cartBadge.style.transform = 'scale(1.4)';
      setTimeout(() => cartBadge.style.transform = '', 300);
    }
  }

  function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id);
    else {
      saveCart();
      updateCartUI();
    }
  }

  function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
    showToast('🗑️ Item removed from cart', 'default');
  }

  // Save cart to both localStorage keys for seamless checkout
  function saveCart() {
    localStorage.setItem('maurya_cart', JSON.stringify(cart));
    localStorage.setItem('mc_cart', JSON.stringify(cart));
  }

  // Bind all add-to-cart buttons
  document.querySelectorAll('.add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const name = btn.dataset.name || '';
      const price = btn.dataset.price || '0';
      const img = btn.dataset.img || '';
      addToCart(name, price, img);

      const origText = btn.textContent;
      btn.textContent = '✓ Added!';
      btn.style.background = '#16A34A';
      setTimeout(() => {
        btn.textContent = origText;
        btn.style.background = '';
      }, 1500);
    });
  });

  // Make all product cards clickable to open specific product details page
  document.querySelectorAll('.product-card').forEach((card, idx) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // Don't navigate if clicking on buttons inside the card or nested links
      if (e.target.closest('.add-cart') || e.target.closest('.pcard-wishlist') || e.target.closest('button')) {
        return;
      }
      
      const cardId = card.dataset.id;
      if (cardId) {
        window.location.href = `product.html?id=${cardId}`;
        return;
      }
      
      // Find matching product in PRODUCTS data
      const imgSrc = card.querySelector('.pcard-img-main')?.getAttribute('src') || '';
      const name = card.querySelector('.pcard-name')?.textContent.trim() || '';
      
      let matchedProduct = null;
      if (typeof PRODUCTS !== 'undefined') {
        matchedProduct = PRODUCTS.find(p => p.img === imgSrc || p.name.toLowerCase() === name.toLowerCase())
                      || PRODUCTS[idx % PRODUCTS.length];
      }
      
      const targetId = matchedProduct ? matchedProduct.id : (idx + 1);
      window.location.href = `product.html?id=${targetId}`;
    });
  });


  /* ---- TOAST NOTIFICATION ---- */
  const toast = document.getElementById('toast');
  let toastTimer;

  function showToast(msg, type = 'default') {
    if (!toast) return;
    toast.textContent = msg;
    toast.className = 'toast-notification show';
    if (type === 'success') toast.classList.add('toast-success');
    if (type === 'error') toast.classList.add('toast-error');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.className = 'toast-notification';
    }, 3000);
  }

  /* ---- CONTACT FORM VALIDATION & MESSAGES ---- */
  const contactForm = document.getElementById('contactForm');
  const fnameInput = document.getElementById('fname');
  const femailInput = document.getElementById('femail');
  const fmsgInput = document.getElementById('fmsg');
  const formSuccess = document.getElementById('formSuccess');

  const fnameError = document.getElementById('fname-error');
  const femailError = document.getElementById('femail-error');
  const fmsgError = document.getElementById('fmsg-error');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearFieldError(input, errorEl) {
    input?.classList.remove('has-error');
    if (errorEl) errorEl.textContent = '';
  }

  function setFieldError(input, errorEl, msg) {
    input?.classList.add('has-error');
    if (errorEl) errorEl.textContent = msg;
  }

  // Real-time error clearing on input
  fnameInput?.addEventListener('input', () => clearFieldError(fnameInput, fnameError));
  femailInput?.addEventListener('input', () => clearFieldError(femailInput, femailError));
  fmsgInput?.addEventListener('input', () => clearFieldError(fmsgInput, fmsgError));

  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    let hasError = false;

    // Validate Name
    if (!fnameInput?.value.trim()) {
      setFieldError(fnameInput, fnameError, 'Please enter your full name.');
      hasError = true;
    } else if (fnameInput.value.trim().length < 2) {
      setFieldError(fnameInput, fnameError, 'Name must be at least 2 characters.');
      hasError = true;
    } else {
      clearFieldError(fnameInput, fnameError);
    }

    // Validate Email
    if (!femailInput?.value.trim()) {
      setFieldError(femailInput, femailError, 'Please enter your email address.');
      hasError = true;
    } else if (!validateEmail(femailInput.value.trim())) {
      setFieldError(femailInput, femailError, 'Please enter a valid email address (e.g., name@example.com).');
      hasError = true;
    } else {
      clearFieldError(femailInput, femailError);
    }

    // Validate Message
    if (!fmsgInput?.value.trim()) {
      setFieldError(fmsgInput, fmsgError, 'Please enter your message.');
      hasError = true;
    } else if (fmsgInput.value.trim().length < 10) {
      setFieldError(fmsgInput, fmsgError, 'Message must be at least 10 characters long.');
      hasError = true;
    } else {
      clearFieldError(fmsgInput, fmsgError);
    }

    if (hasError) {
      showToast('⚠️ Please fix the highlighted errors before submitting.', 'error');
      return;
    }

    // Success State
    const submitBtn = document.getElementById('contactSubmit');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    setTimeout(() => {
      if (formSuccess) {
        formSuccess.hidden = false;
      }
      showToast('✅ Message sent successfully! We will contact you shortly.', 'success');
      contactForm.reset();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.background = '#16A34A';
        setTimeout(() => {
          submitBtn.textContent = 'Send Message ✈';
          submitBtn.style.background = '';
        }, 3500);
      }

      // Hide success message banner after 8 seconds
      setTimeout(() => {
        if (formSuccess) formSuccess.hidden = true;
      }, 8000);
    }, 600);
  });

  /* ---- SCROLL REVEAL ANIMATION ---- */
  const revealTargets = document.querySelectorAll(
    '.product-card, .col-card, .tcard, .ccard, .gallery-item, .trust-item, .avalue, .astat, .cat-section'
  );
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), (i % 4) * 60);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    revealTargets.forEach(el => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  }

  /* ---- SMOOTH NAV LINK SCROLL ---- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  /* ---- MOBILE BOTTOM NAV ACTIVE STATE ---- */
  document.querySelectorAll('.mbn-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.mbn-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  /* ---- INITIAL UI UPDATE ---- */
  attachCartShopNow();
  updateCartUI();
  updateActiveNavLink();

  console.log('✨ Maurya Collection website initialized successfully!');
});
