// const homeurl = "http://localhost:3000";
// const homeEl = document.getElementById('home');
import Product from './product.js';
const productForm = document.getElementById('productForm');


function refreshProducts(){
  fetch("http://localhost:3000/products")
      .then((res) => res.json()) 
      .then((products) => {
          products.forEach(p => {
              const prod = new Product(p);
              prod.renderProd();
          });
      });
}
refreshProducts();

// Price - Description - Item Details
// function formatPrice(price){
//     return `$${price}`;
// };
// function formatDescription(itemdetails){
//     return `${itemdetails}`
// };
// function formatDepartment(department_name){
//     return `${department_name}`
// };

function deleteProduct(data) {
    const {id} = data.target.dataset;
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        data.target.parentElement.parentElement.parentElement.remove();
      });
  }

function submitItem(data){
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((product) => {
        productForm.reset();
        const prod = new Product(product);
        prod.renderProd();
      });
  };

  function bindProductFormEventListener(){
    productForm.addEventListener("submit", function (eve) {
      eve.preventDefault();
      const formData = new FormData(eve.target);
      const data = Object.fromEntries(formData.entries());
      submitItem(data);
    }
  )};
  bindProductFormEventListener();

// function renderProducts(products) {
//     products.forEach(product => {
     
//         const productObject = new Product(product)
//         // console.log(productObject)
//         homeEl.innerHTML += `
//         <div class="card black">
//         <div class="card-content white-text">
//             <div class="card-action">
//                 <h3>${productObject.name}</h3>
//                 <h4>Price: ${productObject.formatPrice()}</h4>
//                 <h5>Description: ${productObject.itemdetails}</h5>
//                 <h5>Department: ${productObject.department_name}</h5>
//                 <a id="delete-button-${productObject.name}" class="waves-effect waves-teal btn-flat btn-delete">Delete</a>
//             </div>
//         </div>    
//         </div>
//         `
//     });   
    
//     (document.querySelectorAll(`.btn-delete`)).forEach(Btn => Btn.addEventListener('click', deleteProduct));
    
// };