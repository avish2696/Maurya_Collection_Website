<div align="center">

<img src="public/images/brand/maurya-collection-icon.png" alt="Maurya Collection Logo" width="120" />

# 👑 Maurya Collection

### Premium Indian Ethnic & Casual Fashion — Direct from Manufacturer

[![Live Website](https://img.shields.io/badge/🌐_Live_Website-Cloudflare_Pages-F6821F?style=for-the-badge&logo=cloudflare&logoColor=white)](https://mauryacollection.pages.dev)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Maurya_Collection-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/avish2696/Maurya_Collection_Website)
[![WhatsApp](https://img.shields.io/badge/Order_via-WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/919876543210)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F6821F?style=flat-square&logo=cloudflare&logoColor=white)
![Mobile Ready](https://img.shields.io/badge/Mobile-Ready-4CAF50?style=flat-square&logo=android&logoColor=white)

</div>

---

## 📖 About

**Maurya Collection** is a full-featured, mobile-first e-commerce website for a premium Indian ethnic and casual fashion brand. The platform showcases **158+ unique garment designs** across **11 product categories** — from heavy kurtis and wedding gowns to men's coord sets, kids' party wear, and more.

> 🏭 **Direct Manufacturer Pricing** — No middlemen. Best wholesale & retail rates.  
> 📱 **WhatsApp-first ordering** — Customers can order any product directly via WhatsApp in one tap.

---

## ✨ Features

### 🛍️ Shopping Experience
- **158+ Product Catalog** — 11 categories of Indian ethnic & casual wear
- **Dynamic Product Detail Pages** — Individual pages for every product with image gallery, size selector, and fabric specifications
- **Smart Category Filtering** — Filter by category, search by keyword, sort by price
- **Add to Cart + Wishlist** — Persistent cart with item count badge
- **WhatsApp One-Tap Ordering** — Pre-filled order message with product name, size, and price

### 📱 Mobile-First Design
- Fully responsive across all screen sizes (320px → 4K)
- Bottom navigation bar for mobile
- Touch-friendly product galleries with swipeable thumbnails
- Optimized for slow network connections (lazy loading)
- iOS auto-zoom prevention on form inputs

### 🎨 Premium UI/UX
- Dark glassmorphism design aesthetic
- Smooth CSS micro-animations and hover effects
- Product image zoom on hover
- Toast notifications for cart actions
- Loading skeleton states
- Floating WhatsApp contact button

### ⚡ Performance & SEO
- All images lazy-loaded
- Minified CSS and JavaScript
- Semantic HTML5 structure
- Unique meta titles and descriptions per page
- XML sitemap + robots.txt
- Cloudflare CDN with aggressive caching headers

### 🔒 Production Ready
- Custom 404 error page
- Cloudflare `_headers` (security: X-Frame-Options, X-Content-Type-Options)
- Cloudflare `_redirects` (clean URLs, custom 404 routing)
- `.htaccess` for Apache fallback

---

## 🗂️ Project Structure

```
Maurya Collection Website/
│
├── 📄 index.html              # Homepage with hero slider, featured products & category showcase
├── 📄 shop.html               # Full catalog with 158 garments, search, filter, and sort
├── 📄 product.html            # Dynamic product detail page (loaded via ?id= query param)
├── 📄 checkout.html           # Mobile checkout: cart summary, delivery address & order form
├── 📄 404.html                # Custom branded 404 error page
│
├── 📁 assets/
│   ├── 📁 images/             # 158 product photos organized by category
│   │   ├── baby-girls-party-wear-dresses/    (14 designs)
│   │   ├── heavy-kurti-collection/           (32 designs)
│   │   ├── kids-hoodie-sweatshirts/          (12 designs)
│   │   ├── mens-collar-tshirts/              (12 designs)
│   │   ├── mens-coord-sets/                  (24 designs)
│   │   ├── mens-kurta-collection/            (14 designs)
│   │   ├── mens-plain-round-neck-tshirts/    (11 designs)
│   │   ├── smart-boy-collection/             (20 designs)
│   │   ├── womens-anarkali-gown-collection/  (6 designs)
│   │   ├── womens-plain-tshirts/             (8 designs)
│   │   └── womens-wedding-gown-collection/   (5 designs)
│   ├── 📁 js/
│   │   ├── products-data.js   # Complete database of 158 products & 11 category definitions
│   │   └── shop.js            # Catalog logic: render, search, filter, sort, cart, pagination
│   └── 📁 css/
│       └── shop.css           # Shop-specific stylesheet
│
├── 📁 src/
│   ├── 📁 css/
│   │   ├── main.css                  # Global design system, variables & components
│   │   ├── shop.css                  # Shop page extended styles
│   │   └── text-rendering-fixes.css  # Mobile font & input fixes
│   └── 📁 js/
│       └── main.js            # Homepage interactions, cart logic, mobile menu & animations
│
├── 📁 public/                 # Brand assets: logos, icons, favicons
├── 📁 admin/                  # Admin login & dashboard panel
│   ├── index.html             # Admin login page
│   └── dashboard.html         # Order management dashboard
│
├── 📄 script.js               # Legacy shared JS (homepage helpers)
├── 📄 style.css               # Legacy global styles
├── 📄 _redirects              # Cloudflare Pages URL routing rules
├── 📄 _headers                # Cloudflare Pages security & cache headers
├── 📄 robots.txt              # SEO crawler rules
├── 📄 sitemap.xml             # XML sitemap for search engines
├── 📄 CNAME                   # Custom domain configuration
├── 📄 .htaccess               # Apache server fallback configuration
└── 📄 favicon.svg             # SVG favicon
```

---

## 🏷️ Product Categories

| # | Category | Designs | Price |
|---|----------|---------|-------|
| 1 | 👧 Baby Girl's Party Wear Georgette Dresses | 14 | ₹710 |
| 2 | ✨ Heavy Kurti Collection (Showroom Quality) | 32 | ₹545 |
| 3 | 🧥 Kids Hoodie & Sweatshirts | 12 | ₹270 |
| 4 | 👕 Men's Collar T-Shirts (Pique Cotton) | 12 | ₹309 |
| 5 | 👗 Men's Co-ord Sets (Ribbed/Waffle) | 24 | ₹345 |
| 6 | 🧡 Men's Kurta Collection | 14 | ₹699 |
| 7 | 👔 Men's Plain Round Neck T-Shirts | 11 | ₹345 |
| 8 | 👦 Smart Boy Collection (Coat Sets) | 20 | ₹345 |
| 9 | 💃 Women's Anarkali Gown Collection | 6 | ₹445 |
| 10 | 👚 Women's Plain T-Shirts | 8 | ₹270 |
| 11 | 👑 Women's Wedding Gown Collection | 5 | ₹445 |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Structure** | HTML5 (Semantic) |
| **Styling** | Vanilla CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| **Logic** | Vanilla JavaScript (ES6+, No frameworks) |
| **Data** | Static JSON-like JS data store (`products-data.js`) |
| **Hosting** | Cloudflare Pages (Global CDN) |
| **Version Control** | Git + GitHub |
| **Dev Server** | `serve` (Node.js) |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [Git](https://git-scm.com/)

### Clone & Run Locally

```bash
# Clone the repository
git clone https://github.com/avish2696/Maurya_Collection_Website.git
cd Maurya_Collection_Website

# Install local dev server (one-time)
npm install

# Start development server
npm run dev
# → Opens at http://localhost:3000
```

### Browse the Site

| Page | URL |
|------|-----|
| Homepage | http://localhost:3000/ |
| Full Catalog | http://localhost:3000/shop.html |
| Product Detail | http://localhost:3000/product.html?id=15 |
| Checkout | http://localhost:3000/checkout.html |
| Admin Panel | http://localhost:3000/admin/ |

---

## 🌐 Deployment on Cloudflare Pages

This project is configured and ready for zero-config Cloudflare Pages deployment.

### Deploy via GitHub Integration (Recommended)

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Create application** → **Pages**
3. Click **Connect to Git** → Authorize GitHub → Select `Maurya_Collection_Website`
4. Build settings:
   - **Framework preset**: `None`
   - **Build command**: *(leave blank)*
   - **Build output directory**: `/`
5. Click **Save and Deploy**

Your site will be live at `https://mauryacollection.pages.dev` in under a minute! 🎉

### Environment & Routing

The `_redirects` file handles clean URLs:
```
/shop        → /shop.html       (200)
/product     → /product.html    (200)
/checkout    → /checkout.html   (200)
/*           → /404.html        (404)
```

The `_headers` file adds performance & security:
```
Cache-Control: public, max-age=31536000, immutable  (images, icons)
Cache-Control: public, max-age=86400                (CSS, JS)
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
```

---

## 📞 Contact & Ordering

| Channel | Details |
|---------|---------|
| 📱 WhatsApp | [+91 98765 43210](https://wa.me/919876543210) |
| 📧 Email | [mauryacollection@gmail.com](mailto:mauryacollection@gmail.com) |
| 📍 Location | Surat, Gujarat, India |

---

## 📸 Screenshots

> *Add your live website screenshots here after deployment*

| Homepage | Shop Page | Product Detail |
|----------|-----------|----------------|
| ![Homepage](public/images/brand/maurya-collection-icon.png) | *Shop Screenshot* | *Product Screenshot* |

---

## 📝 License

© 2025 **Maurya Collection**. All rights reserved.

This codebase is proprietary and intended for exclusive use by Maurya Collection. Unauthorized copying, redistribution, or use of this code or assets is strictly prohibited.

---

<div align="center">

Made with ❤️ for **Maurya Collection** — *India's Premium Ethnic Fashion Brand*

[![GitHub stars](https://img.shields.io/github/stars/avish2696/Maurya_Collection_Website?style=social)](https://github.com/avish2696/Maurya_Collection_Website)

</div>
