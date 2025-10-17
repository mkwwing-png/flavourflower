// 購物車功能
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 更新購物車數量
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// 頁面載入時執行
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});
