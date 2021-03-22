const homeurl = "http://localhost:3000";
const homeEl = document.getElementById('home');
const productForm = document.getElementById('productForm');

function refreshProducts(){
    homeEl.innerHTML = "<h3>Refreshing</h3>";
    fetch("http://localhost:3000/products")
        .then((res) => res.json()) 
        .then((data) => renderProducts(data));
};
refreshProducts()

function formatPrice(price){
    return `$${price}`;
};
function formatDescription(itemdetails){
    return `${itemdetails}`
};
function formatDepartment(department_name){
    return `${department_name}`
};

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


 
const renderProducts = function (products) {
    console.log(products);
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

