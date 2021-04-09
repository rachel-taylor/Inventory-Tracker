const homeurl = "http://localhost:3000";
const homeEl = document.getElementById('home');
const productForm = document.getElementById('productForm');


function refreshProducts(){
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


    
function deleteProduct(e) {
    const buttonId = e.target.id; // delete-button-ProductName
    const name = buttonId.replace("delete-button-", "");
    console.log("Name is:", name);
    // TODO: send the name in somehow
    fetch(`http://localhost:3000/products`, {
        method: "DELETE",
        })
        .then((res) => res.json())
            .then((data) => {
            e.target.parentElement.remove()
            });
          }

// function deleteProduct(data) {
//     const { id } = data.target.dataset;
//     fetch(`http://localhost:3000/products/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         e.target.parentElement.parentElement.parentElement.remove();
//       });
//   }



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
        submitProduct(data);
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










/*
FLIPPING 
- Design the card "front" vs the card "back"
- Create a CSS transition to flip the card
    - see this https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
    - I also suggest using the CSS transform property: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
    - you will probably have to work on this a little bit - it might not be straightforward
- Write a flipCard function
    - I suggest passing in an argument that is the CSS selector for the card, for instance, "#card-id" (remember # precedes ids in CSS selectors.)
    - Then you can use the jquery technique to get the element: $(selector)
        - this is the same as doing document.querySelector(selector), just shorter
    - Change the class, or whatever, to trigger the transition
- Event listener for click, on the card (both front and back)
    - In the event listener, call the flipCard() function

OR
https://www.ostraining.com/blog/coding/jquery-flip/
*/