class Product {
    //  initialize where product properties listed
    constructor(attributes) {
    // console.log(attributes)
    debugger
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

    renderProd(){
        products.forEach(product => {
            const productObject = new Product(this)
            
            // console.log(productObject)
            homeEl.innerHTML += `
            <input type="hidden" id="product_id" name="product_id" value=${this.id}>
            <div class="card black">
            <div class="card-content white-text">
                <div class="card-action">
                    <h3>${this.name}</h3>
                    <h4>Price: ${this.formatPrice()}</h4>
                    <h5>Description: ${this.itemdetails}</h5>
                    <h5>Department: ${this.department_name}</h5>
                    <a id="delete-button-${this.name}" class="waves-effect waves-teal btn-flat btn-delete">Delete</a>
                </div>
            </div>    
            </div>
            `
        });   
        
        (document.querySelectorAll(`.btn-delete`)).forEach(Btn => Btn.addEventListener('click', deleteProduct));
        
    };
    };
