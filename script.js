// Function to calculate the total price based on user input
function updateTotal() {
    // 1. Get the price of the selected stone from the dropdown
    const pricePerSqFt = document.getElementById('stoneSelect').value;
    
    // 2. Get the length and width entered by the user
    const length = document.getElementById('len').value || 0;
    const width = document.getElementById('wid').value || 0;
    
    // 3. Perform the math: Area * Price
    const total = pricePerSqFt * length * width;
    
    // 4. Update the text on the screen with the formatted Indian Rupee price
    document.getElementById('totalPrice').innerText = "₹ " + total.toLocaleString('en-IN');
}

// Function to open WhatsApp with a pre-filled message
function sendWhatsApp() {
    const stoneDropdown = document.getElementById('stoneSelect');
    const stoneName = stoneDropdown.options[stoneDropdown.selectedIndex].text;
    const totalAmount = document.getElementById('totalPrice').innerText;
    
    // Create the message for India Stone Impex
    const message = `Hello India Stone Impex, I've calculated a quote on your website:
Stone: ${stoneName}
Total Estimate: ${totalAmount}
Please let me know the availability of these slabs.`;

    // Encode the message for a URL and open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919351431311?text=${encodedMessage}`);
}
