// Products list
products = [
    { name: 'Vestido de noche', img: 'img/vestido-noche.jpg', price: '$1,000.00', },
    { name: 'Tenis', img: 'img/tenis.avif', price: '$1,500.00', },
    { name: 'Chamarra', img: 'img/chamarra.jpg', price: '$1,500.00', },
    { name: 'Chamarra', img: 'img/chamarra-man.avif', price: '$1,500.00', },
    { name: 'Blusa', img: 'img/blusa.jpg', price: '$500.00', },
];

cartList = [
    {name: 'Chamarra', img: 'img/chamarra-man.avif', price: '$1,000'},
    {name: 'Tenis', img: 'img/tenis.avif', price: '$1,700'},
    {name: 'Chamarra', img: 'img/chamarra.jpg', price: '$900'},
];

const parent2 = document.querySelector('.products');

products.forEach(( product, index ) => {
    const newProductParent = document.createElement("article");
    newProductParent.classList.add("product");
    const nameProduct = document.createElement("h3");
    nameProduct.innerText = product.name;
    nameProduct.setAttribute("id", "txt");
    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", product.img);
    const priceProduct = document.createElement("p");
    priceProduct.innerText = product.price;
    
    addProduct = document.createElement("i");
    addProduct.setAttribute("data-index", index);
    addProduct.classList.add("add-product");
    
    addProductName = document.createElement("p");
    addProductName.innerText = "Add to Cart";

    addProductImg = document.createElement("img");
    addProductImg.setAttribute("src", "img/cart-add.jpg");

    addProduct.append(addProductImg);
    addProduct.append(addProductName);

    newProductParent.append(imgProduct);
    newProductParent.append(nameProduct);
    newProductParent.append(priceProduct);
    newProductParent.append(addProduct);
    parent2.append(newProductParent);
});

let totalBadges = cartList.length;
const badge = document.getElementById("badge");
badge.innerText = cartList.length;

const cart1 = document.querySelector(".cart");

parent2.addEventListener('click', (e) => {
    const addButton = e.target.closest(".add-product");
    
    if (addButton) {
        const buyBtn = document.querySelector("button");
        buyBtn.remove();
        const index = addButton.getAttribute("data-index");
        const selectedProduct = products[index];

        const cartProduct = document.createElement("div");
        cartProduct.innerHTML = `
            <img src=${selectedProduct.img} alt=${selectedProduct.name}>
            <p>${selectedProduct.name}</p>
            <p>${selectedProduct.price}</p>
            <i class="remove"><img src="img/remove.png" alt="Icono Remover" class="delete-icon"></i>
        `;

        const newBuyBtn = document.createElement("button");
        newBuyBtn.innerText = "COMPRAR";

        cart1.append(cartProduct);
        cart1.append(newBuyBtn);

        totalBadges ++;
        badge.innerText = totalBadges;
    }
});

const divClose = document.createElement("div");
const cartTitle = document.createElement("h2");
cartTitle.innerText = 'Carrito';

cartClose = document.createElement("i");
cartClose.classList.add("close");

cartCloseImg = document.createElement("img");
cartCloseImg.setAttribute("src", "img/close.png");
cartCloseImg.classList.add("delete-icon");
cartClose.append(cartCloseImg);

divClose.append(cartTitle);
divClose.append(cartClose);

cart1.append(divClose);

cartList.forEach(( cart ) => {
    const divCart = document.createElement("div");
    divCart.className = "cart-product";

    cartImg = document.createElement("img");
    cartImg.setAttribute("src", cart.img);

    const cartName = document.createElement("p");
    cartName.innerText = cart.name;

    const cartPrice = document.createElement("p");
    cartPrice.innerText = cart.price;

    removeProduct = document.createElement("i");
    removeProduct.className = "remove";
    removeProductImg = document.createElement("img");
    removeProductImg.setAttribute("src", "img/remove.png");
    removeProductImg.classList.add("delete-icon");
    removeProduct.append(removeProductImg);

    divCart.append(cartImg);
    divCart.append(cartName);
    divCart.append(cartPrice);
    divCart.append(removeProduct);

    cart1.append(divCart);
});

cart1.addEventListener('click', (e) => {
    if( e.target.classList.contains("delete-icon") ) {
        const iTag = e.target.parentElement;
        const product = iTag.parentElement;

        product.remove();

        totalBadges --;
        badge.innerText = totalBadges;
    }
});

// Other method to Delete products
/* const iconRemove = document.querySelectorAll(".remove");
iconRemove.forEach( icon => {
    console.log('ELIMINA');
    icon.addEventListener('click', () => {
        const iconParent = icon.parentElement;
        iconParent.remove();

        totalBadges --;
        badge.innerText = totalBadges;
    });
}); */


//------- Mopdify text
const buyBtn = document.createElement("button");
buyBtn.innerText = "COMPRAR";
cart1.append(buyBtn);

const btn = document.getElementsByTagName("button");
btn[0].innerText = 'BUY PRODUCT(S)';

const header = document.querySelector("header");
const cartIcon = header.lastElementChild;

cartIcon.addEventListener('click', () => {
    cart1.classList.add("show");
});

const closeCart = document.querySelector(".close");
closeCart.addEventListener('click', () => {
    cart1.classList.remove('show');
});


//------- Select Elements
const t = document.getElementById("txt");
/* console.log(t); */

const image = document.getElementsByClassName("header__logo");
/* console.log(image[2]); */

const tags = document.getElementsByTagName("section");
/* console.log(tags); */

const elem = document.querySelector(".header__logo");
/* console.log(elem); */

const elems = document.querySelectorAll(".header__logo");
/* console.log(elems); */

const newElem = document.createElement("a");
/* console.log(newElem); */

//------- Create element & add attribute
/* const parent = document.querySelector(".products");
const newArticle = document.createElement("article");
newArticle.setAttribute("class", "new");
parent.append(newArticle); */

//------- Attributes
const logo = document.querySelector(".header__logo");
/* logo.setAttribute("src", "img/remove.png"); */
/* console.log(logo.getAttribute("src"));
console.log(logo.hasAttribute("src")); */
/* logo.removeAttribute("src"); */

if( logo.hasAttribute("src") ) {
    /* console.log('Existe'); */
}

//------- CSS classes
const parent3 = parent2.firstElementChild;
const price = parent3.lastElementChild;
price.classList.add("red-price");
price.classList.replace("red-price", "blue-price");
price.classList.remove("blue-price");

//------- Mopdify style
// btn[0].style.cursor = "pointer";
// btn[0].style.backgroundColor = "gray";

//------- Events
const elemBtn = btn[0];
elemBtn.addEventListener('click', () => {
    elemBtn.classList.toggle("toggle");
});

const product = document.querySelector(".product");
product.addEventListener('mouseenter', () => {
    product.style.opacity = ".5";
});

product.addEventListener('mouseleave', () => {
    product.style.opacity = "1";
});