const faker = require('faker');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/images', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database')
});

const imagesSchema = new mongoose.Schema({
  itemId: Number,
  storeId: Number,
  imagesUrl: {
    image_one: String,
    image_two: String,
    image_three: String,
    image_four: String,
    image_five: String
  }
});

const Image = mongoose.model('Images', imagesSchema);

let generateFakeData = () => {

  let count = 0;
  while (count < 100) {
    let fakeImage = new Image({
      itemId: faker.datatype.number(),
      storeId: faker.datatype.number(),
      imagesUrl: {
        image_one: faker.image.image(),
        image_two: faker.image.image(),
        image_three: faker.image.image(),
        image_four: faker.image.image(),
        image_five: faker.image.image()
      }
    })
    fakeImage.save()
    count++
  }
}
generateFakeData()


let find = () => {
  return Image.find()
}

module.exports = {
  find: find
}

// const imagesSchema = new mongoose.Schema({
//   itemId: Number,
//   storeId: Number,
//   imagesUrl: [
//     {image_one: String},
//     {image_two: String},
//     {image_three: String},
//     {image_four: String},
//     {image_five: String}
//   ]
// });

// const Image = mongoose.model('Images', imagesSchema);

// let generateFakeData = () => {

//   let count = 0;
//   while (count < 100) {
//     let fakeImage = new Image({
//       itemId: faker.datatype.number(),
//       storeId: faker.datatype.number(),
//       imagesUrl: [
//         {image_one: faker.image.image()},
//         {image_two: faker.image.image()},
//         {image_three: faker.image.image()},
//         {image_four: faker.image.image()},
//         {image_five: faker.image.image()}
//       ]
//     })
//     fakeImage.save()
//     count++
//   }
// }
// generateFakeData()

