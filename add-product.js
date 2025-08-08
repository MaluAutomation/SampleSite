function addToCart() {
    const item = new URLSearchParams(window.location.search).get('item') || 'pizza';
    const quantity = parseInt(document.getElementById('quantity').value, 10);

    if (isNaN(quantity) || quantity < 1) {
        alert("Please enter a valid quantity.");
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find(product => product.name === item);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name: item, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${quantity} ${item}(s) added to cart!`);
}

function goBack() {
    window.location.href = 'homepage.html';
}

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        localStorage.removeItem('user');
        window.location.href = 'login.html';
    }
}