/* ================================================
   MAURYA COLLECTION — Complete Product Catalog  
   With Individual Product Descriptions & Features
   ================================================ */

const PRODUCTS = [
  {
    "id": 1,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #1)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-001.jpg",
    "badge": "3/4 Pc Set",
    "rating": 4.6,
    "reviews": 48,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #1). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 2,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #2)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-002.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 65,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #2). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 3,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #3)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-003.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 82,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #3). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 4,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #4)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-004.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 99,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #4). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 5,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #5)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-005.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 116,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #5). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 6,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #6)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-006.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 133,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #6). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 7,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #7)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-007.jpg",
    "badge": "Hot Deal",
    "rating": 4.8,
    "reviews": 150,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #7). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 8,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #8)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-008.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 167,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #8). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 9,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #9)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-009.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 184,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #9). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 10,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #10)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-010.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 201,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #10). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 11,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #11)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-011.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 218,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #11). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 12,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #12)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-012.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 235,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #12). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 13,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #13)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-013.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 252,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #13). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 14,
    "name": "Baby Girl's Party Wear Georgette Dress (Design #14)",
    "category": "baby-girls-party-wear-dresses",
    "categoryTitle": "Baby Girl's 3/4 Pc Party Wear Dresses",
    "price": 710,
    "mrp": 1099,
    "fabric": "Georgette",
    "img": "assets/images/baby-girls-party-wear-dresses/baby-girls-party-wear-dresses-014.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 269,
    "sizes": [
      "5-6 Y",
      "7-8 Y",
      "9-10 Y",
      "11-12 Y",
      "13-14 Y"
    ],
    "description": "Premium Baby Girl's 3/4 Pc Party Wear Dresses - Baby Girl's Party Wear Georgette Dress (Design #14). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Georgette fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 15,
    "name": "Heavy Showroom Quality Kurti (Design #1)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-001.jpg",
    "badge": "Showroom Quality",
    "rating": 4.6,
    "reviews": 48,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #1). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 16,
    "name": "Heavy Showroom Quality Kurti (Design #2)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-002.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 65,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #2). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 17,
    "name": "Heavy Showroom Quality Kurti (Design #3)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-003.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 82,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #3). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 18,
    "name": "Heavy Showroom Quality Kurti (Design #4)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-004.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #4). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 19,
    "name": "Heavy Showroom Quality Kurti (Design #5)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-005.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 116,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #5). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 20,
    "name": "Heavy Showroom Quality Kurti (Design #6)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-006.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 133,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #6). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 21,
    "name": "Heavy Showroom Quality Kurti (Design #7)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-007.jpg",
    "badge": "Hot Deal",
    "rating": 4.8,
    "reviews": 150,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #7). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 22,
    "name": "Heavy Showroom Quality Kurti (Design #8)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-008.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 167,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #8). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 23,
    "name": "Heavy Showroom Quality Kurti (Design #9)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-009.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 184,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #9). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 24,
    "name": "Heavy Showroom Quality Kurti (Design #10)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-010.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 201,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #10). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 25,
    "name": "Heavy Showroom Quality Kurti (Design #11)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-011.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 218,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #11). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 26,
    "name": "Heavy Showroom Quality Kurti (Design #12)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-012.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 235,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #12). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 27,
    "name": "Heavy Showroom Quality Kurti (Design #13)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-013.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 252,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #13). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 28,
    "name": "Heavy Showroom Quality Kurti (Design #14)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-014.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 269,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #14). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 29,
    "name": "Heavy Showroom Quality Kurti (Design #15)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-015.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 286,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #15). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 30,
    "name": "Heavy Showroom Quality Kurti (Design #16)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-016.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 303,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #16). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 31,
    "name": "Heavy Showroom Quality Kurti (Design #17)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-017.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 320,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #17). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 32,
    "name": "Heavy Showroom Quality Kurti (Design #18)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-018.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 337,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #18). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 33,
    "name": "Heavy Showroom Quality Kurti (Design #19)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-019.jpg",
    "badge": "Hot Deal",
    "rating": 4.8,
    "reviews": 54,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #19). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 34,
    "name": "Heavy Showroom Quality Kurti (Design #20)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-020.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 71,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #20). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 35,
    "name": "Heavy Showroom Quality Kurti (Design #21)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-021.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 88,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #21). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 36,
    "name": "Heavy Showroom Quality Kurti (Design #22)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-022.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 105,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #22). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 37,
    "name": "Heavy Showroom Quality Kurti (Design #23)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-023.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 122,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #23). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 38,
    "name": "Heavy Showroom Quality Kurti (Design #24)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-024.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 139,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #24). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 39,
    "name": "Heavy Showroom Quality Kurti (Design #25)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-025.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 156,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #25). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 40,
    "name": "Heavy Showroom Quality Kurti (Design #26)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-026.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 173,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #26). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 41,
    "name": "Heavy Showroom Quality Kurti (Design #27)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-027.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 190,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #27). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 42,
    "name": "Heavy Showroom Quality Kurti (Design #28)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-028.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 207,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #28). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 43,
    "name": "Heavy Showroom Quality Kurti (Design #29)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-029.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 224,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #29). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 44,
    "name": "Heavy Showroom Quality Kurti (Design #30)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-030.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 241,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #30). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 45,
    "name": "Heavy Showroom Quality Kurti (Design #31)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-031.jpg",
    "badge": "Hot Deal",
    "rating": 4.8,
    "reviews": 258,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #31). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 46,
    "name": "Heavy Showroom Quality Kurti (Design #32)",
    "category": "heavy-kurti-collection",
    "categoryTitle": "✨ Heavy Kurti Collection",
    "price": 545,
    "mrp": 899,
    "fabric": "Mix of All Premium",
    "img": "assets/images/heavy-kurti-collection/heavy-kurti-collection-032.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 275,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium ✨ Heavy Kurti Collection - Heavy Showroom Quality Kurti (Design #32). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Mix of All Premium fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 47,
    "name": "Kid's Printed Hoodie Sweatshirt (Design #1)",
    "category": "kids-hoodie-sweatshirts",
    "categoryTitle": "Kid's Hoodie & Sweatshirt Collection",
    "price": 270,
    "mrp": 449,
    "fabric": "100% Cotton Fleece",
    "img": "assets/images/kids-hoodie-sweatshirts/kids-hoodie-sweatshirts-001.jpg",
    "badge": "Kids Hoodie",
    "rating": 4.6,
    "reviews": 48,
    "sizes": [
      "2-3 Y",
      "4-5 Y",
      "6-7 Y",
      "8-9 Y",
      "10-12 Y"
    ],
    "description": "Premium Kid's Hoodie & Sweatshirt Collection - Kid's Printed Hoodie Sweatshirt (Design #1). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium 100% Cotton Fleece fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 48,
    "name": "Kid's Printed Hoodie Sweatshirt (Design #2)",
    "category": "kids-hoodie-sweatshirts",
    "categoryTitle": "Kid's Hoodie & Sweatshirt Collection",
    "price": 270,
    "mrp": 449,
    "fabric": "100% Cotton Fleece",
    "img": "assets/images/kids-hoodie-sweatshirts/kids-hoodie-sweatshirts-002.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 65,
    "sizes": [
      "2-3 Y",
      "4-5 Y",
      "6-7 Y",
      "8-9 Y",
      "10-12 Y"
    ],
    "description": "Premium Kid's Hoodie & Sweatshirt Collection - Kid's Printed Hoodie Sweatshirt (Design #2). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium 100% Cotton Fleece fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 49,
    "name": "Kid's Printed Hoodie Sweatshirt (Design #3)",
    "category": "kids-hoodie-sweatshirts",
    "categoryTitle": "Kid's Hoodie & Sweatshirt Collection",
    "price": 270,
    "mrp": 449,
    "fabric": "100% Cotton Fleece",
    "img": "assets/images/kids-hoodie-sweatshirts/kids-hoodie-sweatshirts-003.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 82,
    "sizes": [
      "2-3 Y",
      "4-5 Y",
      "6-7 Y",
      "8-9 Y",
      "10-12 Y"
    ],
    "description": "Premium Kid's Hoodie & Sweatshirt Collection - Kid's Printed Hoodie Sweatshirt (Design #3). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium 100% Cotton Fleece fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 50,
    "name": "Kid's Printed Hoodie Sweatshirt (Design #4)",
    "category": "kids-hoodie-sweatshirts",
    "categoryTitle": "Kid's Hoodie & Sweatshirt Collection",
    "price": 270,
    "mrp": 449,
    "fabric": "100% Cotton Fleece",
    "img": "assets/images/kids-hoodie-sweatshirts/kids-hoodie-sweatshirts-004.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 99,
    "sizes": [
      "2-3 Y",
      "4-5 Y",
      "6-7 Y",
      "8-9 Y",
      "10-12 Y"
    ],
    "description": "Premium Kid's Hoodie & Sweatshirt Collection - Kid's Printed Hoodie Sweatshirt (Design #4). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium 100% Cotton Fleece fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 51,
    "name": "Kid's Printed Hoodie Sweatshirt (Design #5)",
    "category": "kids-hoodie-sweatshirts",
    "categoryTitle": "Kid's Hoodie & Sweatshirt Collection",
    "price": 270,
    "mrp": 449,
    "fabric": "100% Cotton Fleece",
    "img": "assets/images/kids-hoodie-sweatshirts/kids-hoodie-sweatshirts-005.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 116,
    "sizes": [
      "2-3 Y",
      "4-5 Y",
      "6-7 Y",
      "8-9 Y",
      "10-12 Y"
    ],
    "description": "Premium Kid's Hoodie & Sweatshirt Collection - Kid's Printed Hoodie Sweatshirt (Design #5). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium 100% Cotton Fleece fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 52,
    "name": "Kid's Printed Hoodie Sweatshirt (Design #6)",
    "category": "kids-hoodie-sweatshirts",
    "categoryTitle": "Kid's Hoodie & Sweatshirt Collection",
    "price": 270,
    "mrp": 449,
    "fabric": "100% Cotton Fleece",
    "img": "assets/images/kids-hoodie-sweatshirts/kids-hoodie-sweatshirts-006.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 133,
    "sizes": [
      "2-3 Y",
      "4-5 Y",
      "6-7 Y",
      "8-9 Y",
      "10-12 Y"
    ],
    "description": "Premium Kid's Hoodie & Sweatshirt Collection - Kid's Printed Hoodie Sweatshirt (Design #6). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium 100% Cotton Fleece fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 53,
    "name": "Kid's Printed Hoodie Sweatshirt (Design #7)",
    "category": "kids-hoodie-sweatshirts",
    "categoryTitle": "Kid's Hoodie & Sweatshirt Collection",
    "price": 270,
    "mrp": 449,
    "fabric": "100% Cotton Fleece",
    "img": "assets/images/kids-hoodie-sweatshirts/kids-hoodie-sweatshirts-007.jpg",
    "badge": "Hot Deal",
    "rating": 4.8,
    "reviews": 150,
    "sizes": [
      "2-3 Y",
      "4-5 Y",
      "6-7 Y",
      "8-9 Y",
      "10-12 Y"
    ],
    "description": "Premium Kid's Hoodie & Sweatshirt Collection - Kid's Printed Hoodie Sweatshirt (Design #7). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium 100% Cotton Fleece fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 54,
    "name": "Kid's Printed Hoodie Sweatshirt (Design #8)",
    "category": "kids-hoodie-sweatshirts",
    "categoryTitle": "Kid's Hoodie & Sweatshirt Collection",
    "price": 270,
    "mrp": 449,
    "fabric": "100% Cotton Fleece",
    "img": "assets/images/kids-hoodie-sweatshirts/kids-hoodie-sweatshirts-008.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 167,
    "sizes": [
      "2-3 Y",
      "4-5 Y",
      "6-7 Y",
      "8-9 Y",
      "10-12 Y"
    ],
    "description": "Premium Kid's Hoodie & Sweatshirt Collection - Kid's Printed Hoodie Sweatshirt (Design #8). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium 100% Cotton Fleece fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 55,
    "name": "Kid's Printed Hoodie Sweatshirt (Design #9)",
    "category": "kids-hoodie-sweatshirts",
    "categoryTitle": "Kid's Hoodie & Sweatshirt Collection",
    "price": 270,
    "mrp": 449,
    "fabric": "100% Cotton Fleece",
    "img": "assets/images/kids-hoodie-sweatshirts/kids-hoodie-sweatshirts-009.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 184,
    "sizes": [
      "2-3 Y",
      "4-5 Y",
      "6-7 Y",
      "8-9 Y",
      "10-12 Y"
    ],
    "description": "Premium Kid's Hoodie & Sweatshirt Collection - Kid's Printed Hoodie Sweatshirt (Design #9). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium 100% Cotton Fleece fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 56,
    "name": "Kid's Printed Hoodie Sweatshirt (Design #10)",
    "category": "kids-hoodie-sweatshirts",
    "categoryTitle": "Kid's Hoodie & Sweatshirt Collection",
    "price": 270,
    "mrp": 449,
    "fabric": "100% Cotton Fleece",
    "img": "assets/images/kids-hoodie-sweatshirts/kids-hoodie-sweatshirts-010.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 201,
    "sizes": [
      "2-3 Y",
      "4-5 Y",
      "6-7 Y",
      "8-9 Y",
      "10-12 Y"
    ],
    "description": "Premium Kid's Hoodie & Sweatshirt Collection - Kid's Printed Hoodie Sweatshirt (Design #10). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium 100% Cotton Fleece fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 57,
    "name": "Kid's Printed Hoodie Sweatshirt (Design #11)",
    "category": "kids-hoodie-sweatshirts",
    "categoryTitle": "Kid's Hoodie & Sweatshirt Collection",
    "price": 270,
    "mrp": 449,
    "fabric": "100% Cotton Fleece",
    "img": "assets/images/kids-hoodie-sweatshirts/kids-hoodie-sweatshirts-011.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 218,
    "sizes": [
      "2-3 Y",
      "4-5 Y",
      "6-7 Y",
      "8-9 Y",
      "10-12 Y"
    ],
    "description": "Premium Kid's Hoodie & Sweatshirt Collection - Kid's Printed Hoodie Sweatshirt (Design #11). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium 100% Cotton Fleece fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 58,
    "name": "Kid's Printed Hoodie Sweatshirt (Design #12)",
    "category": "kids-hoodie-sweatshirts",
    "categoryTitle": "Kid's Hoodie & Sweatshirt Collection",
    "price": 270,
    "mrp": 449,
    "fabric": "100% Cotton Fleece",
    "img": "assets/images/kids-hoodie-sweatshirts/kids-hoodie-sweatshirts-012.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 235,
    "sizes": [
      "2-3 Y",
      "4-5 Y",
      "6-7 Y",
      "8-9 Y",
      "10-12 Y"
    ],
    "description": "Premium Kid's Hoodie & Sweatshirt Collection - Kid's Printed Hoodie Sweatshirt (Design #12). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium 100% Cotton Fleece fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 59,
    "name": "Men's Classic Collar T-Shirt (Design #1)",
    "category": "mens-collar-tshirts",
    "categoryTitle": "Men's Collar T-Shirts Collection",
    "price": 309,
    "mrp": 499,
    "fabric": "Pique Cotton Blend",
    "img": "assets/images/mens-collar-tshirts/mens-collar-tshirts-001.jpg",
    "badge": "Collar Polo",
    "rating": 4.6,
    "reviews": 48,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Collar T-Shirts Collection - Men's Classic Collar T-Shirt (Design #1). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Pique Cotton Blend fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 60,
    "name": "Men's Classic Collar T-Shirt (Design #2)",
    "category": "mens-collar-tshirts",
    "categoryTitle": "Men's Collar T-Shirts Collection",
    "price": 309,
    "mrp": 499,
    "fabric": "Pique Cotton Blend",
    "img": "assets/images/mens-collar-tshirts/mens-collar-tshirts-002.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 65,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Collar T-Shirts Collection - Men's Classic Collar T-Shirt (Design #2). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Pique Cotton Blend fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 61,
    "name": "Men's Classic Collar T-Shirt (Design #3)",
    "category": "mens-collar-tshirts",
    "categoryTitle": "Men's Collar T-Shirts Collection",
    "price": 309,
    "mrp": 499,
    "fabric": "Pique Cotton Blend",
    "img": "assets/images/mens-collar-tshirts/mens-collar-tshirts-003.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 82,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Collar T-Shirts Collection - Men's Classic Collar T-Shirt (Design #3). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Pique Cotton Blend fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 62,
    "name": "Men's Classic Collar T-Shirt (Design #4)",
    "category": "mens-collar-tshirts",
    "categoryTitle": "Men's Collar T-Shirts Collection",
    "price": 309,
    "mrp": 499,
    "fabric": "Pique Cotton Blend",
    "img": "assets/images/mens-collar-tshirts/mens-collar-tshirts-004.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 99,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Collar T-Shirts Collection - Men's Classic Collar T-Shirt (Design #4). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Pique Cotton Blend fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 63,
    "name": "Men's Classic Collar T-Shirt (Design #5)",
    "category": "mens-collar-tshirts",
    "categoryTitle": "Men's Collar T-Shirts Collection",
    "price": 309,
    "mrp": 499,
    "fabric": "Pique Cotton Blend",
    "img": "assets/images/mens-collar-tshirts/mens-collar-tshirts-005.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 116,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Collar T-Shirts Collection - Men's Classic Collar T-Shirt (Design #5). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Pique Cotton Blend fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 64,
    "name": "Men's Classic Collar T-Shirt (Design #6)",
    "category": "mens-collar-tshirts",
    "categoryTitle": "Men's Collar T-Shirts Collection",
    "price": 309,
    "mrp": 499,
    "fabric": "Pique Cotton Blend",
    "img": "assets/images/mens-collar-tshirts/mens-collar-tshirts-006.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 133,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Collar T-Shirts Collection - Men's Classic Collar T-Shirt (Design #6). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Pique Cotton Blend fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 65,
    "name": "Men's Classic Collar T-Shirt (Design #7)",
    "category": "mens-collar-tshirts",
    "categoryTitle": "Men's Collar T-Shirts Collection",
    "price": 309,
    "mrp": 499,
    "fabric": "Pique Cotton Blend",
    "img": "assets/images/mens-collar-tshirts/mens-collar-tshirts-007.jpg",
    "badge": "Hot Deal",
    "rating": 4.8,
    "reviews": 150,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Collar T-Shirts Collection - Men's Classic Collar T-Shirt (Design #7). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Pique Cotton Blend fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 66,
    "name": "Men's Classic Collar T-Shirt (Design #8)",
    "category": "mens-collar-tshirts",
    "categoryTitle": "Men's Collar T-Shirts Collection",
    "price": 309,
    "mrp": 499,
    "fabric": "Pique Cotton Blend",
    "img": "assets/images/mens-collar-tshirts/mens-collar-tshirts-008.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 167,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Collar T-Shirts Collection - Men's Classic Collar T-Shirt (Design #8). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Pique Cotton Blend fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 67,
    "name": "Men's Classic Collar T-Shirt (Design #9)",
    "category": "mens-collar-tshirts",
    "categoryTitle": "Men's Collar T-Shirts Collection",
    "price": 309,
    "mrp": 499,
    "fabric": "Pique Cotton Blend",
    "img": "assets/images/mens-collar-tshirts/mens-collar-tshirts-009.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 184,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Collar T-Shirts Collection - Men's Classic Collar T-Shirt (Design #9). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Pique Cotton Blend fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 68,
    "name": "Men's Classic Collar T-Shirt (Design #10)",
    "category": "mens-collar-tshirts",
    "categoryTitle": "Men's Collar T-Shirts Collection",
    "price": 309,
    "mrp": 499,
    "fabric": "Pique Cotton Blend",
    "img": "assets/images/mens-collar-tshirts/mens-collar-tshirts-010.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 201,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Collar T-Shirts Collection - Men's Classic Collar T-Shirt (Design #10). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Pique Cotton Blend fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 69,
    "name": "Men's Classic Collar T-Shirt (Design #11)",
    "category": "mens-collar-tshirts",
    "categoryTitle": "Men's Collar T-Shirts Collection",
    "price": 309,
    "mrp": 499,
    "fabric": "Pique Cotton Blend",
    "img": "assets/images/mens-collar-tshirts/mens-collar-tshirts-011.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 218,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Collar T-Shirts Collection - Men's Classic Collar T-Shirt (Design #11). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Pique Cotton Blend fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 70,
    "name": "Men's Classic Collar T-Shirt (Design #12)",
    "category": "mens-collar-tshirts",
    "categoryTitle": "Men's Collar T-Shirts Collection",
    "price": 309,
    "mrp": 499,
    "fabric": "Pique Cotton Blend",
    "img": "assets/images/mens-collar-tshirts/mens-collar-tshirts-012.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 235,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Collar T-Shirts Collection - Men's Classic Collar T-Shirt (Design #12). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Pique Cotton Blend fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 71,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #1)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-001.jpg",
    "badge": "Coord Set",
    "rating": 4.6,
    "reviews": 48,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #1). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 72,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #2)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-002.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 65,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #2). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 73,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #3)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-003.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 82,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #3). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 74,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #4)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-004.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #4). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 75,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #5)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-005.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 116,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #5). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 76,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #6)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-006.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 133,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #6). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 77,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #7)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-007.jpg",
    "badge": "Hot Deal",
    "rating": 4.8,
    "reviews": 150,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #7). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 78,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #8)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-008.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 167,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #8). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 79,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #9)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-009.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 184,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #9). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 80,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #10)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-010.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 201,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #10). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 81,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #11)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-011.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 218,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #11). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 82,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #12)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-012.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 235,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #12). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 83,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #13)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-013.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 252,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #13). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 84,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #14)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-014.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 269,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #14). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 85,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #15)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-015.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 286,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #15). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 86,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #16)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-016.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 303,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #16). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 87,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #17)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-017.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 320,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #17). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 88,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #18)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-018.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 337,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #18). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 89,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #19)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-019.jpg",
    "badge": "Hot Deal",
    "rating": 4.8,
    "reviews": 54,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #19). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 90,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #20)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-020.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 71,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #20). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 91,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #21)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-021.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 88,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #21). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 92,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #22)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-022.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 105,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #22). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 93,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #23)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-023.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 122,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #23). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 94,
    "name": "Men's Half Sleeve Ribbed Coord Set (Design #24)",
    "category": "mens-coord-sets",
    "categoryTitle": "Men's Co-ord Sets Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Ribbed Fabric",
    "img": "assets/images/mens-coord-sets/mens-coord-sets-024.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 139,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Co-ord Sets Collection - Men's Half Sleeve Ribbed Coord Set (Design #24). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Ribbed Fabric fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 95,
    "name": "Men's Designer Ethnic Kurta (Design #1)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-001.jpg",
    "badge": "Ethnic",
    "rating": 4.6,
    "reviews": 48,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #1). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 96,
    "name": "Men's Designer Ethnic Kurta (Design #2)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-002.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 65,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #2). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 97,
    "name": "Men's Designer Ethnic Kurta (Design #3)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-003.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 82,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #3). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 98,
    "name": "Men's Designer Ethnic Kurta (Design #4)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-004.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 99,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #4). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 99,
    "name": "Men's Designer Ethnic Kurta (Design #5)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-005.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 116,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #5). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 100,
    "name": "Men's Designer Ethnic Kurta (Design #6)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-006.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 133,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #6). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 101,
    "name": "Men's Designer Ethnic Kurta (Design #7)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-007.jpg",
    "badge": "Hot Deal",
    "rating": 4.8,
    "reviews": 150,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #7). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 102,
    "name": "Men's Designer Ethnic Kurta (Design #8)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-008.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 167,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #8). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 103,
    "name": "Men's Designer Ethnic Kurta (Design #9)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-009.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 184,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #9). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 104,
    "name": "Men's Designer Ethnic Kurta (Design #10)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-010.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 201,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #10). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 105,
    "name": "Men's Designer Ethnic Kurta (Design #11)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-011.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 218,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #11). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 106,
    "name": "Men's Designer Ethnic Kurta (Design #12)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-012.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 235,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #12). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 107,
    "name": "Men's Designer Ethnic Kurta (Design #13)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-013.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 252,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #13). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 108,
    "name": "Men's Designer Ethnic Kurta (Design #14)",
    "category": "mens-kurta-collection",
    "categoryTitle": "Men's Kurta Collection",
    "price": 699,
    "mrp": 1099,
    "fabric": "Premium Fabric Mix",
    "img": "assets/images/mens-kurta-collection/mens-kurta-collection-014.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 269,
    "sizes": [
      "32",
      "36",
      "38",
      "40",
      "42"
    ],
    "description": "Premium Men's Kurta Collection - Men's Designer Ethnic Kurta (Design #14). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Premium Fabric Mix fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 109,
    "name": "Men's Premium Plain Round Neck T-Shirt (Design #1)",
    "category": "mens-plain-round-neck-tshirts",
    "categoryTitle": "Men's Premium Plain T-Shirts",
    "price": 345,
    "mrp": 599,
    "fabric": "Imported High GSM (300-400g)",
    "img": "assets/images/mens-plain-round-neck-tshirts/mens-plain-round-neck-tshirts-001.jpg",
    "badge": "High GSM",
    "rating": 4.6,
    "reviews": 48,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Premium Plain T-Shirts - Men's Premium Plain Round Neck T-Shirt (Design #1). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Imported High GSM (300-400g) fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 110,
    "name": "Men's Premium Plain Round Neck T-Shirt (Design #2)",
    "category": "mens-plain-round-neck-tshirts",
    "categoryTitle": "Men's Premium Plain T-Shirts",
    "price": 345,
    "mrp": 599,
    "fabric": "Imported High GSM (300-400g)",
    "img": "assets/images/mens-plain-round-neck-tshirts/mens-plain-round-neck-tshirts-002.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 65,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Premium Plain T-Shirts - Men's Premium Plain Round Neck T-Shirt (Design #2). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Imported High GSM (300-400g) fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 111,
    "name": "Men's Premium Plain Round Neck T-Shirt (Design #3)",
    "category": "mens-plain-round-neck-tshirts",
    "categoryTitle": "Men's Premium Plain T-Shirts",
    "price": 345,
    "mrp": 599,
    "fabric": "Imported High GSM (300-400g)",
    "img": "assets/images/mens-plain-round-neck-tshirts/mens-plain-round-neck-tshirts-003.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 82,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Premium Plain T-Shirts - Men's Premium Plain Round Neck T-Shirt (Design #3). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Imported High GSM (300-400g) fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 112,
    "name": "Men's Premium Plain Round Neck T-Shirt (Design #4)",
    "category": "mens-plain-round-neck-tshirts",
    "categoryTitle": "Men's Premium Plain T-Shirts",
    "price": 345,
    "mrp": 599,
    "fabric": "Imported High GSM (300-400g)",
    "img": "assets/images/mens-plain-round-neck-tshirts/mens-plain-round-neck-tshirts-004.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 99,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Premium Plain T-Shirts - Men's Premium Plain Round Neck T-Shirt (Design #4). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Imported High GSM (300-400g) fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 113,
    "name": "Men's Premium Plain Round Neck T-Shirt (Design #5)",
    "category": "mens-plain-round-neck-tshirts",
    "categoryTitle": "Men's Premium Plain T-Shirts",
    "price": 345,
    "mrp": 599,
    "fabric": "Imported High GSM (300-400g)",
    "img": "assets/images/mens-plain-round-neck-tshirts/mens-plain-round-neck-tshirts-005.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 116,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Premium Plain T-Shirts - Men's Premium Plain Round Neck T-Shirt (Design #5). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Imported High GSM (300-400g) fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 114,
    "name": "Men's Premium Plain Round Neck T-Shirt (Design #6)",
    "category": "mens-plain-round-neck-tshirts",
    "categoryTitle": "Men's Premium Plain T-Shirts",
    "price": 345,
    "mrp": 599,
    "fabric": "Imported High GSM (300-400g)",
    "img": "assets/images/mens-plain-round-neck-tshirts/mens-plain-round-neck-tshirts-006.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 133,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Premium Plain T-Shirts - Men's Premium Plain Round Neck T-Shirt (Design #6). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Imported High GSM (300-400g) fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 115,
    "name": "Men's Premium Plain Round Neck T-Shirt (Design #7)",
    "category": "mens-plain-round-neck-tshirts",
    "categoryTitle": "Men's Premium Plain T-Shirts",
    "price": 345,
    "mrp": 599,
    "fabric": "Imported High GSM (300-400g)",
    "img": "assets/images/mens-plain-round-neck-tshirts/mens-plain-round-neck-tshirts-007.jpg",
    "badge": "Hot Deal",
    "rating": 4.8,
    "reviews": 150,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Premium Plain T-Shirts - Men's Premium Plain Round Neck T-Shirt (Design #7). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Imported High GSM (300-400g) fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 116,
    "name": "Men's Premium Plain Round Neck T-Shirt (Design #8)",
    "category": "mens-plain-round-neck-tshirts",
    "categoryTitle": "Men's Premium Plain T-Shirts",
    "price": 345,
    "mrp": 599,
    "fabric": "Imported High GSM (300-400g)",
    "img": "assets/images/mens-plain-round-neck-tshirts/mens-plain-round-neck-tshirts-008.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 167,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Premium Plain T-Shirts - Men's Premium Plain Round Neck T-Shirt (Design #8). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Imported High GSM (300-400g) fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 117,
    "name": "Men's Premium Plain Round Neck T-Shirt (Design #9)",
    "category": "mens-plain-round-neck-tshirts",
    "categoryTitle": "Men's Premium Plain T-Shirts",
    "price": 345,
    "mrp": 599,
    "fabric": "Imported High GSM (300-400g)",
    "img": "assets/images/mens-plain-round-neck-tshirts/mens-plain-round-neck-tshirts-009.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 184,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Premium Plain T-Shirts - Men's Premium Plain Round Neck T-Shirt (Design #9). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Imported High GSM (300-400g) fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 118,
    "name": "Men's Premium Plain Round Neck T-Shirt (Design #10)",
    "category": "mens-plain-round-neck-tshirts",
    "categoryTitle": "Men's Premium Plain T-Shirts",
    "price": 345,
    "mrp": 599,
    "fabric": "Imported High GSM (300-400g)",
    "img": "assets/images/mens-plain-round-neck-tshirts/mens-plain-round-neck-tshirts-010.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 201,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Premium Plain T-Shirts - Men's Premium Plain Round Neck T-Shirt (Design #10). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Imported High GSM (300-400g) fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 119,
    "name": "Men's Premium Plain Round Neck T-Shirt (Design #11)",
    "category": "mens-plain-round-neck-tshirts",
    "categoryTitle": "Men's Premium Plain T-Shirts",
    "price": 345,
    "mrp": 599,
    "fabric": "Imported High GSM (300-400g)",
    "img": "assets/images/mens-plain-round-neck-tshirts/mens-plain-round-neck-tshirts-011.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 218,
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Men's Premium Plain T-Shirts - Men's Premium Plain Round Neck T-Shirt (Design #11). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Imported High GSM (300-400g) fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 4 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 120,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #1)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-001.jpg",
    "badge": "Smart Boy",
    "rating": 4.6,
    "reviews": 48,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #1). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 121,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #2)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-002.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 65,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #2). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 122,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #3)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-003.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 82,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #3). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 123,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #4)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-004.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 99,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #4). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 124,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #5)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-005.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 116,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #5). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 125,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #6)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-006.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 133,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #6). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 126,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #7)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-007.jpg",
    "badge": "Hot Deal",
    "rating": 4.8,
    "reviews": 150,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #7). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 127,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #8)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-008.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 167,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #8). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 128,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #9)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-009.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 184,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #9). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 129,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #10)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-010.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 201,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #10). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 130,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #11)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-011.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 218,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #11). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 131,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #12)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-012.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 235,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #12). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 132,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #13)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-013.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 252,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #13). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 133,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #14)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-014.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 269,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #14). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 134,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #15)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-015.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 286,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #15). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 135,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #16)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-016.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 303,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #16). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 136,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #17)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-017.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 320,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #17). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 137,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #18)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-018.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 337,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #18). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 138,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #19)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-019.jpg",
    "badge": "Hot Deal",
    "rating": 4.8,
    "reviews": 54,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #19). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 139,
    "name": "Smart Boy Printed Shirt & Shorts Set (Design #20)",
    "category": "smart-boy-collection",
    "categoryTitle": "Smart Boy Collection",
    "price": 345,
    "mrp": 599,
    "fabric": "Heavy Lycra & Cotton",
    "img": "assets/images/smart-boy-collection/smart-boy-collection-020.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 71,
    "sizes": [
      "1 Year",
      "2 Years",
      "3 Years",
      "4 Years",
      "5 Years"
    ],
    "description": "Premium Smart Boy Collection - Smart Boy Printed Shirt & Shorts Set (Design #20). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Heavy Lycra & Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 140,
    "name": "Women's Printed Anarkali Gown (Design #1)",
    "category": "womens-anarkali-gown-collection",
    "categoryTitle": "Women's Anarkali Gown Collection",
    "price": 445,
    "mrp": 799,
    "fabric": "Fancy Georgette & Shibori Print",
    "img": "assets/images/womens-anarkali-gown-collection/womens-anarkali-gown-collection-001.jpg",
    "badge": "Wedding Special",
    "rating": 4.6,
    "reviews": 48,
    "sizes": [
      "Free Size",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Anarkali Gown Collection - Women's Printed Anarkali Gown (Design #1). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Fancy Georgette & Shibori Print fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 141,
    "name": "Women's Printed Anarkali Gown (Design #2)",
    "category": "womens-anarkali-gown-collection",
    "categoryTitle": "Women's Anarkali Gown Collection",
    "price": 445,
    "mrp": 799,
    "fabric": "Fancy Georgette & Shibori Print",
    "img": "assets/images/womens-anarkali-gown-collection/womens-anarkali-gown-collection-002.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 65,
    "sizes": [
      "Free Size",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Anarkali Gown Collection - Women's Printed Anarkali Gown (Design #2). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Fancy Georgette & Shibori Print fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 142,
    "name": "Women's Printed Anarkali Gown (Design #3)",
    "category": "womens-anarkali-gown-collection",
    "categoryTitle": "Women's Anarkali Gown Collection",
    "price": 445,
    "mrp": 799,
    "fabric": "Fancy Georgette & Shibori Print",
    "img": "assets/images/womens-anarkali-gown-collection/womens-anarkali-gown-collection-003.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 82,
    "sizes": [
      "Free Size",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Anarkali Gown Collection - Women's Printed Anarkali Gown (Design #3). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Fancy Georgette & Shibori Print fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 143,
    "name": "Women's Printed Anarkali Gown (Design #4)",
    "category": "womens-anarkali-gown-collection",
    "categoryTitle": "Women's Anarkali Gown Collection",
    "price": 445,
    "mrp": 799,
    "fabric": "Fancy Georgette & Shibori Print",
    "img": "assets/images/womens-anarkali-gown-collection/womens-anarkali-gown-collection-004.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 99,
    "sizes": [
      "Free Size",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Anarkali Gown Collection - Women's Printed Anarkali Gown (Design #4). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Fancy Georgette & Shibori Print fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 144,
    "name": "Women's Printed Anarkali Gown (Design #5)",
    "category": "womens-anarkali-gown-collection",
    "categoryTitle": "Women's Anarkali Gown Collection",
    "price": 445,
    "mrp": 799,
    "fabric": "Fancy Georgette & Shibori Print",
    "img": "assets/images/womens-anarkali-gown-collection/womens-anarkali-gown-collection-005.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 116,
    "sizes": [
      "Free Size",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Anarkali Gown Collection - Women's Printed Anarkali Gown (Design #5). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Fancy Georgette & Shibori Print fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 145,
    "name": "Women's Printed Anarkali Gown (Design #6)",
    "category": "womens-anarkali-gown-collection",
    "categoryTitle": "Women's Anarkali Gown Collection",
    "price": 445,
    "mrp": 799,
    "fabric": "Fancy Georgette & Shibori Print",
    "img": "assets/images/womens-anarkali-gown-collection/womens-anarkali-gown-collection-006.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 133,
    "sizes": [
      "Free Size",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Anarkali Gown Collection - Women's Printed Anarkali Gown (Design #6). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Fancy Georgette & Shibori Print fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 146,
    "name": "Women's Casual Plain T-Shirt (Design #1)",
    "category": "womens-plain-tshirts",
    "categoryTitle": "Women's Casual Plain T-Shirts",
    "price": 345,
    "mrp": 549,
    "fabric": "Soft Cotton",
    "img": "assets/images/womens-plain-tshirts/womens-plain-tshirts-001.jpg",
    "badge": "Casual Wear",
    "rating": 4.6,
    "reviews": 48,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Casual Plain T-Shirts - Women's Casual Plain T-Shirt (Design #1). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Soft Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 147,
    "name": "Women's Casual Plain T-Shirt (Design #2)",
    "category": "womens-plain-tshirts",
    "categoryTitle": "Women's Casual Plain T-Shirts",
    "price": 345,
    "mrp": 549,
    "fabric": "Soft Cotton",
    "img": "assets/images/womens-plain-tshirts/womens-plain-tshirts-002.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 65,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Casual Plain T-Shirts - Women's Casual Plain T-Shirt (Design #2). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Soft Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 148,
    "name": "Women's Casual Plain T-Shirt (Design #3)",
    "category": "womens-plain-tshirts",
    "categoryTitle": "Women's Casual Plain T-Shirts",
    "price": 345,
    "mrp": 549,
    "fabric": "Soft Cotton",
    "img": "assets/images/womens-plain-tshirts/womens-plain-tshirts-003.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 82,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Casual Plain T-Shirts - Women's Casual Plain T-Shirt (Design #3). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Soft Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 149,
    "name": "Women's Casual Plain T-Shirt (Design #4)",
    "category": "womens-plain-tshirts",
    "categoryTitle": "Women's Casual Plain T-Shirts",
    "price": 345,
    "mrp": 549,
    "fabric": "Soft Cotton",
    "img": "assets/images/womens-plain-tshirts/womens-plain-tshirts-004.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 99,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Casual Plain T-Shirts - Women's Casual Plain T-Shirt (Design #4). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Soft Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 150,
    "name": "Women's Casual Plain T-Shirt (Design #5)",
    "category": "womens-plain-tshirts",
    "categoryTitle": "Women's Casual Plain T-Shirts",
    "price": 345,
    "mrp": 549,
    "fabric": "Soft Cotton",
    "img": "assets/images/womens-plain-tshirts/womens-plain-tshirts-005.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 116,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Casual Plain T-Shirts - Women's Casual Plain T-Shirt (Design #5). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Soft Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 151,
    "name": "Women's Casual Plain T-Shirt (Design #6)",
    "category": "womens-plain-tshirts",
    "categoryTitle": "Women's Casual Plain T-Shirts",
    "price": 345,
    "mrp": 549,
    "fabric": "Soft Cotton",
    "img": "assets/images/womens-plain-tshirts/womens-plain-tshirts-006.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 133,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Casual Plain T-Shirts - Women's Casual Plain T-Shirt (Design #6). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Soft Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 152,
    "name": "Women's Casual Plain T-Shirt (Design #7)",
    "category": "womens-plain-tshirts",
    "categoryTitle": "Women's Casual Plain T-Shirts",
    "price": 345,
    "mrp": 549,
    "fabric": "Soft Cotton",
    "img": "assets/images/womens-plain-tshirts/womens-plain-tshirts-007.jpg",
    "badge": "Hot Deal",
    "rating": 4.8,
    "reviews": 150,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Casual Plain T-Shirts - Women's Casual Plain T-Shirt (Design #7). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Soft Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 153,
    "name": "Women's Casual Plain T-Shirt (Design #8)",
    "category": "womens-plain-tshirts",
    "categoryTitle": "Women's Casual Plain T-Shirts",
    "price": 345,
    "mrp": 549,
    "fabric": "Soft Cotton",
    "img": "assets/images/womens-plain-tshirts/womens-plain-tshirts-008.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 167,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Casual Plain T-Shirts - Women's Casual Plain T-Shirt (Design #8). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Soft Cotton fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 154,
    "name": "Women's Heavy Fancy Wedding Gown (Design #1)",
    "category": "womens-wedding-gown-collection",
    "categoryTitle": "Women's Heavy Fancy Wedding Gown",
    "price": 445,
    "mrp": 799,
    "fabric": "Fancy Heavy Georgette & Work Print",
    "img": "assets/images/womens-wedding-gown-collection/womens-wedding-gown-collection-001.jpg",
    "badge": "Wedding Special",
    "rating": 4.6,
    "reviews": 48,
    "sizes": [
      "Free Size",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Heavy Fancy Wedding Gown - Women's Heavy Fancy Wedding Gown (Design #1). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Fancy Heavy Georgette & Work Print fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 155,
    "name": "Women's Heavy Fancy Wedding Gown (Design #2)",
    "category": "womens-wedding-gown-collection",
    "categoryTitle": "Women's Heavy Fancy Wedding Gown",
    "price": 445,
    "mrp": 799,
    "fabric": "Fancy Heavy Georgette & Work Print",
    "img": "assets/images/womens-wedding-gown-collection/womens-wedding-gown-collection-002.jpg",
    "badge": "",
    "rating": 4.7,
    "reviews": 65,
    "sizes": [
      "Free Size",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Heavy Fancy Wedding Gown - Women's Heavy Fancy Wedding Gown (Design #2). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Fancy Heavy Georgette & Work Print fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 156,
    "name": "Women's Heavy Fancy Wedding Gown (Design #3)",
    "category": "womens-wedding-gown-collection",
    "categoryTitle": "Women's Heavy Fancy Wedding Gown",
    "price": 445,
    "mrp": 799,
    "fabric": "Fancy Heavy Georgette & Work Print",
    "img": "assets/images/womens-wedding-gown-collection/womens-wedding-gown-collection-003.jpg",
    "badge": "",
    "rating": 4.8,
    "reviews": 82,
    "sizes": [
      "Free Size",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Heavy Fancy Wedding Gown - Women's Heavy Fancy Wedding Gown (Design #3). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Fancy Heavy Georgette & Work Print fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 157,
    "name": "Women's Heavy Fancy Wedding Gown (Design #4)",
    "category": "womens-wedding-gown-collection",
    "categoryTitle": "Women's Heavy Fancy Wedding Gown",
    "price": 445,
    "mrp": 799,
    "fabric": "Fancy Heavy Georgette & Work Print",
    "img": "assets/images/womens-wedding-gown-collection/womens-wedding-gown-collection-004.jpg",
    "badge": "",
    "rating": 4.9,
    "reviews": 99,
    "sizes": [
      "Free Size",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Heavy Fancy Wedding Gown - Women's Heavy Fancy Wedding Gown (Design #4). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Fancy Heavy Georgette & Work Print fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  },
  {
    "id": 158,
    "name": "Women's Heavy Fancy Wedding Gown (Design #5)",
    "category": "womens-wedding-gown-collection",
    "categoryTitle": "Women's Heavy Fancy Wedding Gown",
    "price": 445,
    "mrp": 799,
    "fabric": "Fancy Heavy Georgette & Work Print",
    "img": "assets/images/womens-wedding-gown-collection/womens-wedding-gown-collection-005.jpg",
    "badge": "Bestseller",
    "rating": 4.6,
    "reviews": 116,
    "sizes": [
      "Free Size",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Premium Women's Heavy Fancy Wedding Gown - Women's Heavy Fancy Wedding Gown (Design #5). Beautifully crafted with traditional design and modern comfort for all occasions.",
    "keyFeatures": [
      "Premium Fancy Heavy Georgette & Work Print fabric",
      "Authentic traditional design",
      "Perfect fit for all body types",
      "Available in 5 sizes"
    ],
    "careInstructions": "Gentle hand wash recommended. Use cold water with mild detergent. Avoid bleach and harsh chemicals. Dry in shade. Iron on reverse side with medium heat if needed."
  }
];

const CATEGORIES = {
  "baby-girls-party-wear-dresses": {
    title: "Baby Girl's 3/4 Pc Party Wear Dresses",
    icon: "👗",
    price: 710,
    tag: "Festive Set"
  },
  "heavy-kurti-collection": {
    title: "✨ Heavy Kurti Collection",
    icon: "✨",
    price: 545,
    tag: "Showroom Quality"
  },
  "kids-hoodie-sweatshirts": {
    title: "Kid's Hoodie & Sweatshirt Collection",
    icon: "🧥",
    price: 270,
    tag: "Warm Fleece"
  },
  "mens-collar-tshirts": {
    title: "Men's Collar T-Shirts Collection",
    icon: "👔",
    price: 309,
    tag: "Cotton Polo"
  },
  "mens-coord-sets": {
    title: "Men's Co-ord Sets Collection",
    icon: "👕",
    price: 345,
    tag: "Textured Knit"
  },
  "mens-kurta-collection": {
    title: "Men's Kurta Collection",
    icon: "🪡",
    price: 699,
    tag: "Ethnic Wear"
  },
  "mens-plain-round-neck-tshirts": {
    title: "Men's Premium Plain T-Shirts",
    icon: "👕",
    price: 345,
    tag: "High GSM"
  },
  "smart-boy-collection": {
    title: "Smart Boy Collection",
    icon: "👦",
    price: 345,
    tag: "Casual & Play"
  },
  "womens-anarkali-gown-collection": {
    title: "Women's Anarkali Gown Collection",
    icon: "👗",
    price: 445,
    tag: "Flowing Silhouette"
  },
  "womens-plain-tshirts": {
    title: "Women's Casual Plain T-Shirts",
    icon: "👚",
    price: 345,
    tag: "Daily Comfort"
  },
  "womens-wedding-gown-collection": {
    title: "Women's Heavy Fancy Wedding Gown",
    icon: "👑",
    price: 445,
    tag: "Bridal & Party"
  }
};
