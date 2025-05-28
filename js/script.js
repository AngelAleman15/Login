let totalAmount = 0;
let label = document.getElementById("productLabel");
let productAmount = 0;

function addToCart(productName, price, btn) {
    // Busca el label relativo al botón
    const cantidad = parseInt(btn.parentElement.querySelector('.product-amount-label').innerText);

    document.getElementById("selectedProductName").innerText = productName;
    document.getElementById("selectedProductPrice").innerText = `$${price}`;
    // Ya no necesitas modificar ningún label aquí

    for (let i = 0; i < cantidad; i++) {
        totalAmount += price;
    }
}

function showTotal() {
    document.getElementById("totalPrice").innerText = `$${totalAmount}`;
}

function clearCart() {
    document.getElementById("selectedProductName").innerText = 'Nombre Producto';
    document.getElementById("selectedProductPrice").innerText = '$0';
    document.getElementById("totalPrice").innerText = '$0';
    totalAmount = 0;
}

function sumarLabel(btn) {
    const label = btn.parentElement.querySelector('.product-amount-label');
    label.innerText = parseInt(label.innerText) + 1;
}

function restarLabel(btn) {
    const label = btn.parentElement.querySelector('.product-amount-label');
    let value = parseInt(label.innerText);
    if (value > 0) label.innerText = value - 1;
}

function createProduct() {
    const product = document.createElement('div');
    product.classList.add('product');

    const productImg = document.createElement('div');
    productImg.classList.add('product-img');
    const img = document.createElement('img');
    img.src = 'img/televisor.png';
    img.alt = 'Televisor';
    productImg.appendChild(img);

    const productName = document.createElement('div');
    productName.classList.add('product-name');
    productName.innerText = 'Televisor';

    const productPrice = document.createElement('div');
    productPrice.classList.add('product-price');
    productPrice.innerText = '$1000';

    const productAmount = document.createElement('div');
    productAmount.classList.add('product-amount');

    const productAmountBtnMinus = document.createElement('div');
    productAmountBtnMinus.classList.add('product-amount-btn');
    productAmountBtnMinus.style.backgroundColor = '#8F3A3E';
    productAmountBtnMinus.style.color = 'white';
    productAmountBtnMinus.innerText = '-';
    productAmountBtnMinus.onclick = function() { restarLabel(this); };

    const productAmountLabel = document.createElement('div');
    productAmountLabel.classList.add('product-amount-label');
    productAmountLabel.id = 'productLabel';
    productAmountLabel.innerText = '0';

    const productAmountBtnPlus = document.createElement('div');
    productAmountBtnPlus.classList.add('product-amount-btn');
    productAmountBtnPlus.style.backgroundColor = '#C3DC4B';
    productAmountBtnPlus.style.color = 'black';
    productAmountBtnPlus.innerText = '+';
    productAmountBtnPlus.onclick = function() { sumarLabel(this); };

    productAmount.appendChild(productAmountBtnMinus);
    productAmount.appendChild(productAmountLabel);
    productAmount.appendChild(productAmountBtnPlus);

    const productAdd = document.createElement('div');
    productAdd.classList.add('product-add');
    productAdd.innerText = 'AGREGAR';
    productAdd.onclick = function() {
        addToCart('Televisor', 1000, this);
    };

    product.appendChild(productImg);
    product.appendChild(productName);
    product.appendChild(productPrice);
    product.appendChild(productAmount);
    product.appendChild(productAdd);

    const productsContainer = document.querySelector('.products');
    productsContainer.appendChild(product);
}