class ProductsController < ApplicationController
    def index 
        products = Product.all
        render json: products 
    end 

    def show 
        product = Product.find(params[:id])
        render json: product
    end 


    def create 
        # byebug 
        new_product_params = product_params
        department = Department.find_by(name: new_product_params["department_id"])
        # new_product_params.delete :department
        #  byebug
        new_product_params["department_id"] = department.id
        # byebug 
        product = Product.new(new_product_params)
        if product.save!
            
            render json: product 
        else
        #     # format.json  {
        #     #     render json: => product.errors
        #     # }
            render text: "This is clearly an error :D"
        end 
        
    end

    private 

    def product_params
        params.permit(:name, :price, :itemdetails, :department_id)
    end 
    
end
