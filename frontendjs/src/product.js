class Product {
    //  initialize where product properties listed
    constructor() {
      this.id = this.id;
      this.name = this.name;
      this.description = this.description;
      this.price = this.price;
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