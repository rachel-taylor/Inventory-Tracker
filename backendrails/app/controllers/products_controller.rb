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
        product = Product.new
        if product.save 
            render json: products 
        else
            # format.json  {
            #     render json: => product.errors
            # }
            # render text: "This is clearly an error :D"
        end 
        
    end
    
end
