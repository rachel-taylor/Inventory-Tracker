class Product {
    constructor({id, name, description, price}) {
      this.id = Product.id;
      this.name = Product.name;
      this.description = Product.description;
      this.price = Product.price;
    }

    formatPrice(price){
        return `$${price}`;
    };
    formatDescription(itemdetails){
        return `${itemdetails}`
    };
    formatDepartment(department_name){
        return `${department_name}`
    };

} 