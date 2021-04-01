const homeurl = "http://localhost:3000";
const homeEl = document.getElementById('home');
const productForm = document.getElementById('productForm');


function refreshProducts(){
    homeEl.innerHTML = "<h3 id='mess1'>Refreshing</h3>";
    fetch("http://localhost:3000/products")
        .then((res) => res.json()) 
        .then((data) => renderProducts(data));
        // .then(innerHTML) => ()
};
refreshProducts()

$("#mess1").empty();

// var updating = document.getElementById("mess1");
// updating.innerHTML = ""

function formatPrice(price){
    return `$${price}`;
};
function formatDescription(itemdetails){
    return `${itemdetails}`
};
function formatDepartment(department_name){
    return `${department_name}`
};

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

(document.querySelectorAll('.delete-btn')).forEach(delBtn => delBtn.addEventListener('click', deleteComment))
    
function deleteComment(e) {
    const id = e.target.dataset.id;
    fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
        })
        .then((res) => res.json())
            .then((data) => {
            e.target.parentElement.remove()
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
        renderProducts([product]);
      });
  };

function bindItemFormEventListener(){
    productForm.addEventListener("submit", function (eve) {
        eve.preventDefault();
        const formData = new FormData(eve.target);
        const data = Object.fromEntries(formData.entries());
        submitItem(data);
    }
    )}; 
bindItemFormEventListener()




 
function renderProducts(products) {
    // console.log(products);
    products.forEach(product => {
        homeEl.innerHTML += `
        <div id="home">    
        <h3>${product.name}</h3>
        <h4>Price: ${formatPrice(product.price)}</h4>
        <h5>Description: ${formatDescription(product.itemdetails)}</h5>
        <h5>Department: ${formatDepartment(product.department_name)}</h5>
        </div>
        `
    });
};

