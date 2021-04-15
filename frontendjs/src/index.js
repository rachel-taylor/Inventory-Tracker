const homeurl = "http://localhost:3000";
const homeEl = document.getElementById('home');
const productForm = document.getElementById('productForm');


function refreshProducts(){
    fetch("http://localhost:3000/products")
        .then((res) => res.json()) 
        .then((data) => renderProducts(data));
};
refreshProducts()

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

// function deleteProduct(d){
//     const {id} = d.target.dataset
//     fetch(`http://localhost:3000/product/${parseInt(id)}`,
//     method: "DELETE",    
//     })
//     .then(res => res.json())
//     .then( data => {
//         d.target.parentElement.remove()
//     })
// };


    
// function deleteProduct(e) {
//     const buttonId = e.target.id; // delete-button-ProductName
//     const name = buttonId.replace("delete-button-", "");
//     console.log("Name is:", name);
//     // TODO: send the name in somehow
//     fetch(`http://localhost:3000/products`, {
//         method: "DELETE",
//         })
//         .then((res) => res.json())
//             .then((data) => {
//             e.target.parentElement.remove()
//             });
//           }

function deleteProduct(data) {
    const { id } = data.target.dataset;
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.parentElement.parentElement.parentElement.remove();
      });
  }

function submitItem(data) {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((product) => {
        document.getElementById("productForm").reset();
        renderProducts([product]);
        // location.reload ();
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
bindProductFormEventListener()

document.getElementById("productForm").reset();

function renderProducts(products) {
    products.forEach(product => {
        // const div1 = document.createElement("div")
        // div1.className = "card black"
        // homeEl.appendElement(div1)
        // outerElement.appendElement(innerElement)
        
        homeEl.innerHTML += `
        <div class="card black">
        <div class="card-content white-text">
            <div class="card-action">
                <h3>${product.name}</h3>
                <h4>Price: ${formatPrice(product.price)}</h4>
                <h5>Description: ${formatDescription(product.itemdetails)}</h5>
                <h5>Department: ${formatDepartment(product.department_name)}</h5>
                <a id="delete-button-${product.name}" class="waves-effect waves-teal btn-flat btn-delete">Delete</a>
            </div>
        </div>    
        </div>
        `
    });   
    
    (document.querySelectorAll(`.btn-delete`)).forEach(Btn => Btn.addEventListener('click', deleteProduct));
    
};