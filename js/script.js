// 產品數據
const products = [
    {
        id: 1,
        name: "浪漫紅玫瑰花束",
        price: 1280,
        originalPrice: 1580,
        image: "images/product-1.jpg",
        category: "love",
        badge: "熱賣",
        description: "精選頂級紅玫瑰，搭配滿天星和綠葉，表達濃濃愛意"
    },
    {
        id: 2,
        name: "優雅百合花籃",
        price: 980,
        image: "images/product-2.jpg",
        category: "birthday",
        description: "純白百合與淡雅配花，適合送給優雅的女性"
    },
    {
        id: 3,
        name: "陽光向日葵花束",
        price: 850,
        image: "images/product-3.jpg",
        category: "anniversary",
        description: "鮮豔向日葵帶來陽光般溫暖，適合慶祝特別時刻"
    },
    {
        id: 4,
        name: "夢幻新娘花球",
        price: 2500,
        image: "images/product-4.jpg",
        category: "wedding",
        badge: "新品",
        description: "專為新娘設計的典雅花球，搭配珍珠裝飾"
    },
    {
        id: 5,
        name: "粉色康乃馨花束",
        price: 680,
        image: "images/product-5.jpg",
        category: "birthday",
        description: "溫馨粉色康乃馨，表達對母親的感恩之情"
    },
    {
        id: 6,
        name: "紫色薰衣草花盒",
        price: 720,
        image: "images/product-6.jpg",
        category: "anniversary",
        description: "浪漫紫色薰衣草，散發迷人香氣"
    },
    {
        id: 7,
        name: "白色滿天星花束",
        price: 550,
        image: "images/product-7.jpg",
        category: "love",
        description: "純潔白色滿天星，象徵純真的愛情"
    },
    {
        id: 8,
        name: "多肉植物禮盒",
        price: 450,
        image: "images/product-8.jpg",
        category: "graduation",
        badge: "特價",
        description: "可愛多肉植物組合，適合辦公桌擺設"
    }
];

// 購物車功能
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 載入精選產品
    loadFeaturedProducts();
    
    // 更新購物車數量
    updateCartCount();
    
    // 漢堡選單功能
    initHamburgerMenu();
    
    // 初始化搜索功能
    initSearch();
    
    // 初始化電子報表單
    initNewsletter();
});

// 載入精選產品
function loadFeaturedProducts() {
    const productsGrid = document.getElementById('featured-products');
    
    if (productsGrid) {
        productsGrid.innerHTML = '';
        
        // 顯示前8個產品
        const featuredProducts = products.slice(0, 8);
        
        featuredProducts.forEach(product => {
            const
