const faker = require('faker');

module.exports = {
  imagesUrl: {
    image_one: faker.image.image(),
    image_two: faker.image.image(),
    image_three: faker.image.image(),
    image_four: faker.image.image(),
    image_five: faker.image.image()
  },
  _id: faker.datatype.number(),
  itemId: faker.datatype.number(),
  storeId: faker.datatype.number(),
  __v: 0
}
