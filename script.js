document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const searchInput = document.getElementById('search-input');
    const productCards = document.querySelectorAll('.card');
    if (searchInput) {
        searchInput.addEventListener('keyup', (event) => {
            const searchQuery = event.target.value.toLowerCase();
            productCards.forEach(card => {
                const productName = card.querySelector('h3').textContent.toLowerCase();
                if (productName.includes(searchQuery)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    const cartIcon = document.getElementById('cart-icon');
    const addToCartButtons = document.querySelectorAll('.card .cta-button');
    let cartItemCount = 0;
    if (cartIcon) {
        const cartCountBubble = document.createElement('span');
        cartCountBubble.id = 'cart-count';
        cartCountBubble.textContent = cartItemCount;
        cartIcon.parentNode.style.position = 'relative';
        cartIcon.parentNode.appendChild(cartCountBubble);
    }
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            cartItemCount++;
            document.getElementById('cart-count').textContent = cartItemCount;
        });
    });
});

const style = document.createElement('style');
style.textContent = `
    #cart-count {
        position: absolute;
        top: -5px;
        right: -10px;
        background-color: red;
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 12px;
        font-weight: bold;
    }
`;
document.head.appendChild(style);