export default class Product {
    //  initialize where product properties listed
    constructor(attributes) {
      this.id = attributes.id;
      this.name = attributes.name;
      this.itemdetails = attributes.itemdetails;
      this.price = attributes.price;
      this.department_name = attributes.department_name;
    }

    

    formatPrice(){
        return `$${this.price}`;
    };
    formatDescription(itemdetails){
        return `${itemdetails}`
    };
    formatDepartment(department_name){
        return `${department_name}`
    };

    deleteProduct(e) {
        fetch(`http://localhost:3000/products/${e.target.dataset.id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((product) => {
            if (product.id) {
                document.getElementById(`card-${product.id}`).remove();
            } else {
                console.error('Product not deleted.')
            }
        });
    }

    renderProd(){
        const homeEl = document.getElementById('home');
        homeEl.innerHTML += `
        <div class="card black" id="card-${this.id}">
            <div class="card-content white-text">
                <div class="card-action">
                    <h3>${this.name}</h3>
                    <h4>Price: ${this.formatPrice()}</h4>
                    <h5>Description: ${this.itemdetails}</h5>
                    <h5>Department: ${this.department_name}</h5>
                    <a data-id="${this.id}" class="waves-effect waves-teal btn-flat btn-delete">Delete</a>
                </div>
            </div>    
        </div>
        `
        ;

        homeEl.addEventListener("click", this.deleteProduct, false);

    };
};
