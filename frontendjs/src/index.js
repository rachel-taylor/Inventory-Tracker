const homeEl = document.getElementById('home')

fetch("http://localhost:3000/products")
    .then((res) => res.json()) 
    .then((data) => renderProducts(data));

function formatPrice(price){
    return `$${price}`;
};

function formatDescription(itemdetails){
    return `${itemdetails}`
}

function formatDepartment(department_name){
    return `${department_name}`
}
 
const renderProducts = function (products) {
    console.log(products);
    products.forEach(product => {
        homeEl.innerHTML += `
        <div class="home">
        <h3>${product.name}</h3>
        <h4>Price: ${formatPrice(product.price)}</h4>
        <h5>Description: ${formatDescription(product.itemdetails)}</h5>
        <h5>Department: ${formatDepartment(product.department_name)}</h5>
        </div>
        `
    });
};

