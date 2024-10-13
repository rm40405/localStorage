const addProductToCart = () => {

    const productfield = document.getElementById('product');
    const quantityfield = document.getElementById('quantity');
    product=productfield.value;
    quantity=quantityfield.value;
    productfield.value='';
    quantityfield.value='';
    console.log(product, quantity);
    
    displayProduct(product, quantity);
    saveProductToLocalStorage(product,quantity);

}
const displayProduct = (p,q) => {
    const cartContainer = document.getElementById('cart-container');
    const productList = document.createElement('h3');
    productList.innerHTML=`${p}: ${q}`;
    cartContainer.appendChild(productList);
}

const getStorageTocarts = () => {
    const storageProduct = localStorage.getItem('cart');
    let cart = {};
    if(storageProduct){
       cart = JSON.parse(storageProduct);
    }
    return cart;
}


const saveProductToLocalStorage = (p,q) => {
    const cart = getStorageTocarts();
    cart[p] = q;
   const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);



}

const displaySaveProductToLocalStorage = ()=>{
    const cartSaved = getStorageTocarts();
    for (const product in cartSaved) {
         const quantity = cartSaved[product]
         displayProduct(product,quantity);
       
    }
}
displaySaveProductToLocalStorage();