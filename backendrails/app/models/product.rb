class Product < ApplicationRecord
    belongs_to :department

    def department_name 
        self.department.name 
    end 
end
