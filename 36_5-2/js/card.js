const addProduct = () => {
    let pName = document.getElementById('pName');
    let pQuantity = document.getElementById('pQuantity');
    let productN = pName.value;
    let productQ = pQuantity.value;

    display(productN, productQ);
    saveProductToLocal(productN, productQ);
    //let productN কোনো ইনপুট ফিল্ডকে reference (রেফারেন্স) করে না। এটি শুধু সেই মুহূর্তে ইনপুট ফিল্ডের মান কপি করে রাখে।
    pName.value = '';
    pQuantity.value = '';
}
const display = (proN, proQ) => {
    const ulInput = document.getElementById('ulInput');
    const li = document.createElement('li');
    li.innerText = `${proN}: ${proQ}`;
    ulInput.appendChild(li)
}
const getStoredShopping = () => {
    let cart = {}
    const cartGet = localStorage.getItem('cart')
    if (cartGet) {
        cart = JSON.parse(cartGet);
    }
    return cart;
}
const saveProductToLocal = (product, quantity) => {
    const cart = getStoredShopping();
    cart[product] = quantity;
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString)
    console.log('cart', cartString);
}

const displayLocalPro = () => {
    const save = getStoredShopping();
    console.log(save)
    for (const key in save) {
        const value = save[key];
        console.log(key, value);
        display(key, value);
    }
   
}
displayLocalPro();