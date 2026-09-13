let quantity = 0;

function showQuantity() {
    
    if(quantity === 0)
    {
        console.log('Cart Empty');
        console.log('Cart Quantity: ' + quantity);
    }
    else
    {
        console.log('Yooo!');
        console.log('Cart Quantity: ' + quantity);
    }
} 

function addtoCart() {
    quantity += 1;
    console.log('Cart Quantity: ' + quantity);
}

function addDouble() {
    quantity += 2;
    console.log('Cart Quantity: ' + quantity);
}

function addTriple() {
    quantity += 3;
    console.log('Cart Quantity: ' + quantity);
}

function resetAll() {
    quantity = 0;
    console.log('Cart Empty');
    console.log('Cart Quantity: ' + quantity);
}