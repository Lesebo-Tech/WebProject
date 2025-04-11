<script src="cart.js"></script>
 function addToCart(eventName, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    let ticket = {
        event: eventName,
        price: price,
        quantity: 1, // Default 1 ticket
    };

    cart.push(ticket);
    localStorage.setItem("cart", JSON.stringify(cart));
}

document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartTable = document.getElementById("cart-items");

    if (cart.length === 0) {
        cartTable.innerHTML = "<tr><td colspan='4'>Your cart is empty</td></tr>";
        return;
    }

    cart.forEach((item, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.event}</td>
            <td>R${item.price}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" 
                onchange="updateQuantity(${index}, this.value)">
            </td>
            <td>R${item.price * item.quantity}</td>
        `;
        cartTable.appendChild(row);
    });
});

function updateQuantity(index, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // Refresh to update total
}

function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Proceeding to payment...");
}
