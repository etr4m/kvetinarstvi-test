// Load contact info from Decap CMS
async function loadContactInfo() {
    try {
        const response = await fetch('/_data/contact.json');
        const contact = await response.json();

        // Update footer with contact info
        const footer = document.querySelector('footer');
        if (footer && contact) {
            footer.innerHTML = `
                <div style="max-width: 1200px; margin: 0 auto;">
                    <h3>Kontakt</h3>
                    ${contact.phone ? `<p>📞 ${contact.phone}</p>` : ''}
                    ${contact.email ? `<p>✉️ ${contact.email}</p>` : ''}
                    ${contact.address ? `<p>📍 ${contact.address}</p>` : ''}
                    ${contact.hours ? `<p>🕐 ${contact.hours}</p>` : ''}
                    <p style="margin-top: 2rem;">&copy; 2026 Květinářství Test</p>
                    <p><a href="/admin">Admin panel</a></p>
                </div>
            `;
        }
    } catch (error) {
        console.log('Contact info not found yet');
    }
}

// Load products from Decap CMS
async function loadProducts() {
    const productsContainer = document.getElementById('products-preview');
    if (!productsContainer) return;

    try {
        const response = await fetch('/_products/');
        // For now, show placeholder until products are added
        productsContainer.innerHTML = `
            <div class="product-grid" id="product-list">
                <div class="product-card">
                    <h3>💐 Produkty</h3>
                    <p>Přidejte produkty přes <a href="/admin">admin panel</a></p>
                    <p>CMS funguje! Kontakty se zobrazí v patičce.</p>
                </div>
            </div>
        `;
    } catch (error) {
        console.log('Products not loaded yet');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadContactInfo();
    loadProducts();
});
