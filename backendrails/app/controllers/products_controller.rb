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
        new_product_params = product_params
        department = Department.find_by(name: new_product_params["department_id"])
        new_product_params["department_id"] = department.id
        product = Product.new(new_product_params)
        if product.save!
            render json: product 
        else
            render text: "Product Not Saved"
        end 
    end 

    # def delete 
    #     product = Product.find(params[:id])
    #     product.destroy
    #     if product.delete 
    #         render json: product 
    #     else 
    #         flash text: "Product Not Deleted"
    #     end 
    # end 

    def destroy
        product = Product.find(params[:id])
        product.destroy
        render json: {id: product.id}
    end 

    def edit 

    end

    private 

    def product_params
        params.permit(:name, :price, :itemdetails, :department_id)
    end 
    
end
