// ITERATION 1

function updateSubtotal(product) {
const price = product.querySelector('.price span');

const quantity = product.querySelector('.quantity input');

const subtotal = product.querySelector('.subtotal span');

const subTprice = price.innerHTML * quantity.value;
  console.log('Calculating subtotal, yey!');

  subtotal.innerHTML = subTprice;
  console.log(price)
   return subTprice
}
  //... your code goes here


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProduct = document.getElementsByClassName('product')
  let singleSubTotal = 0;
  for (i = 0; i < allProduct.length; i++) {
    singleSubTotal += updateSubtotal(allProduct[i]);
  }
  console.log(singleSubTotal)

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span');
  let finalTotal = 0;
  for (j = 0; j < singleSubTotal; j++) {
    finalTotal = singleSubTotal;
    total.innerHTML = finalTotal;
  };
  if (singleSubTotal === 0) {
    total.innerHTML = finalTotal;

  }
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target,parentNode.parentNode);
  //... your code goes here
 
  const td = target.parentNode

  const tr = td.parentNode

  const tbody = tr.parentNode

  tbody.removeChild(tr)
  calculateAll()
  }


// ITERATION 5

function createProduct() {
  // ... your code goes here
   const productName = document.querySelector('.create-product input[type="text"]')
   const productPrice = document.querySelector('.create-product input[type="number"]');
   const tableBody = document.querySelector("tbody")
   const productTemp = `
   <tr class=“product”>
     <td class=“name”>
       <span>${productName.value}</span>
     </td>
     <td class=“price”>$<span>${productPrice.value}</span></td>
     <td class=“quantity”>
     <input type=“number” value=“0” min=“0" placeholder=“Quantity” />
     </td>
       <td class=“subtotal”>$<span>0</span></td>
       <td class=“action”>
       <button class=“btn btn-remove”>Remove</button>
     </td>
   </tr>`
 tableBody.innerHTML += productTemp
 removeBtns2()
 productName.value = ''
 productPrice.value = 0
 if (i < productName.value ){
   
 }


//  console.log(productName);
 }
 function removeBtns2(){
 const removeBtns = document.querySelectorAll('.btn-remove')
   removeBtns.forEach((eachRmvBtn) => {
      eachRmvBtn.addEventListener('click', removeProduct);
    })
 }
 window.addEventListener('load', () => {
   const calculatePricesBtn = document.getElementById('calculate');
   calculatePricesBtn.addEventListener('click', calculateAll);
   // const removeBtns = document.querySelectorAll(‘.btn-remove’)
   // removeBtns.forEach((eachRmvBtn) => {
   //   eachRmvBtn.addEventListener(‘click’, removeProduct);
   // })
   removeBtns2()
   const addProduct = document.getElementById('create');
   addProduct.addEventListener('click', createProduct);
});
