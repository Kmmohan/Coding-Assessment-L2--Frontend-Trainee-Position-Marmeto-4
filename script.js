// Sample cart data (parsed from JSON)
const cartData = {
    original_total_price: 250000,
    items: [
        {
            id: 49839206859071,
            quantity: 1,
            title: "Asgaard sofa",
            price: 25000000, // Original price per item
            discounted_price: 20000000, // Discounted price per item
            image: "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/Asgaardsofa3.png?v=1728384481",
            product_description: "The Asgaard sofa offers unparalleled comfort and style with its sleek design and high-quality materials.",
            vendor: "Lnd [ RISHABH ]",
            line_price: 20000000,
        },
    ],
    currency: "INR",
};

// Parse cart data for rendering
function parseCartData(json) {
    return json.items.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price / 100, // Convert to proper format (assuming price is in paisa)
        discountedPrice: item.discounted_price / 100,
        image: item.image,
        quantity: item.quantity,
        description: item.product_description,
        vendor: item.vendor,
    }));
}

// Use parsed data to populate the cart
const cart = parseCartData(cartData);

// Example of displaying the cart using the previously implemented rendering
function displayCartFromData() {
    cart.forEach((item) => {
        console.log(`Product: ${item.title}`);
        console.log(`Price: ₹${item.price.toFixed(2)}`);
        console.log(`Discounted Price: ₹${item.discountedPrice.toFixed(2)}`);
        console.log(`Quantity: ${item.quantity}`);
        console.log(`Vendor: ${item.vendor}`);
        console.log(`Image: ${item.image}`);
        console.log("----------");
    });
    renderCartItems(); // Assuming renderCartItems uses the global `cart` variable
}

// Initialize and render the cart
displayCartFromData();
renderCartItems();
