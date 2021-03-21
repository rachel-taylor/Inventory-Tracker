class Product < ApplicationRecord
    belongs_to :department
    attr_accessor :itemdetails

    def department_name 
        self.department.name 
    end 
end
