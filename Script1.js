document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");
    let cartItems = 0;

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartItems += 1;
            cartCount.textContent = cartItems;
        });
    });
});

