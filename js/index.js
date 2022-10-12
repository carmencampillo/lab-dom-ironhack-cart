// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price =product.querySelector ('.price span'); // targeting the price in html
  constquantity = product.querySelector ('.quantity input');
  const priceText = Number (price.innerText); //for grabbing the selector using the innerText but only in number instead of
const quantityValue = Number (quantity.value); // + is same like changing the string to number
const subtotal = priceText * quantityValue;
const sub = product.querySelector('.subtotal span');
sub.innerText = subtotal;
console.log (product, priceText, quantityValue, subtotal);
return subtotal;


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0; // need to be let because its changing
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((element) => {
 let subTotal = updateSubtotal(element)
  total += subTotal    // adding the total from each element
  })
  console.log(total);
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
