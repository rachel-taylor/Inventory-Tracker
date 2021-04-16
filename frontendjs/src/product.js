class Product {
    //  initialize where product properties listed
    constructor(attributes) {
    // console.log(attributes)
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

} 