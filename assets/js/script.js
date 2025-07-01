import { products } from './products.js';

document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav__link, .header__logo');
    const pages = document.querySelectorAll('.page');
    const navList = document.getElementById('nav-list');
    const navToggle = document.getElementById('nav-toggle');

    function switchPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('page--active');
            if (page.id === pageId) {
                page.classList.add('page--active');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('nav__link--active');
            if (link.dataset.page === pageId) {
                link.classList.add('nav__link--active');
            }
        });

        navList.classList.remove('nav__list--show');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.page;
            switchPage(pageId);
            window.scrollTo(0, 0);
        });
    });

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('nav__list--show');
    });

    const featuredContainer = document.getElementById('featured-products');
    const catalogContainer = document.getElementById('product-grid-catalog');

    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.productId = product.id;

        card.innerHTML = `
            <div class="product-card__image-container">
                <img src="${product.imageUrl}" alt="${product.name}" class="product-card__image" loading="lazy">
            </div>
            <div class="product-card__info">
                <p class="product-card__category">${product.category}</p>
                <h4 class="product-card__title">${product.name}</h4>
                <p class="product-card__price">${product.price}</p>
            </div>
        `;
        return card;
    }

    function renderProducts(container, productList) {
        container.innerHTML = '';
        productList.forEach(product => {
            const card = createProductCard(product);
            container.appendChild(card);
        });
    }

    renderProducts(featuredContainer, products.filter(p => p.featured));
    renderProducts(catalogContainer, products);

    const filterButtons = document.querySelectorAll('.catalog__filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('catalog__filter-btn--active'));
            button.classList.add('catalog__filter-btn--active');

            const filter = button.dataset.filter;
            let filteredProducts = (filter === 'all') ? products : products.filter(p => p.category === filter);
            renderProducts(catalogContainer, filteredProducts);
        });
    });

    const modal = document.getElementById('product-modal');
    const modalCloseBtn = document.getElementById('modal-close');

    function openModal(productId) {
        const product = products.find(p => p.id == productId);
        if (!product) return;

        document.getElementById('modal-img').src = product.imageUrl;
        document.getElementById('modal-category').textContent = product.category;
        document.getElementById('modal-title').textContent = product.name;
        document.getElementById('modal-description').textContent = product.description;
        document.getElementById('modal-price').textContent = product.price;

        const sizesContainer = document.getElementById('modal-sizes');
        sizesContainer.innerHTML = '';
        product.sizes.forEach(size => {
            const sizeEl = document.createElement('span');
            sizeEl.className = 'modal__size';
            sizeEl.textContent = size;
            sizesContainer.appendChild(sizeEl);
        });

        const whatsappBtn = document.getElementById('modal-whatsapp-btn');
        whatsappBtn.href = `https://wa.me/56912345678?text=Hola!%20Me%20interesa%20el%20producto%20'${encodeURIComponent(product.name)}'`;

        modal.classList.add('modal--visible');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('modal--visible');
        document.body.style.overflow = 'auto';
    }

    document.body.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (card) {
            openModal(card.dataset.productId);
        }
    });

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('modal--visible')) {
            closeModal();
        }
    });
});
