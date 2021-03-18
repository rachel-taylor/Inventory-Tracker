require 'faker'

#  byebug 

departments = ['Housewares', 'Electronics', 'Lawn and Garden', 'Grocery']

departments.each do |d|
    Department.create(name: d)
end 

5.times do 
    Product.create!(name: Faker::Coffee.blend_name, itemdetails: Faker::TvShows::Simpsons.quote, price: Faker::Commerce.price, department: Department.all.sample(1)[0])
 end 

# Product.all.each do |p|
#     p.update(department: Department.all.sample(1)[0])
# end 

# puts "test"