// Load and display products from markdown files
async function loadProducts() {
    // This will be populated when we add products through Decap CMS
    // For now, placeholder
    const productsContainer = document.getElementById('products-preview');

    if (productsContainer) {
        productsContainer.innerHTML = `
            <div class="product-card">
                <h3>Příklad produktu</h3>
                <p>Produkty se zobrazí po přidání přes Decap CMS admin panel</p>
                <div class="price">0 Kč</div>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', loadProducts);
