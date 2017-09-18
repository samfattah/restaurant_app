20.times do
  Item.create(
    dish: Faker::Food.dish,
    spice: Faker::Food.spice,
    price: Faker::Commerce.price.to_f
  )
end

puts 'Food has been seeded!'