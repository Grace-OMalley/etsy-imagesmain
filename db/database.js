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

// let generateFakeData = () => {

//   let count = 1;
//   while (count <= 100) {
//     let fakeImage = new Image({
//       itemId: count,
//       storeId: faker.datatype.number(),
//       imagesUrl: {
//         image_one: 'https://picsum.photos/seed/' + faker.datatype.number(1000) + 'picsum/3000/2000',
//         image_two: 'https://picsum.photos/seed/' + faker.datatype.number(1000) + 'picsum/3000/2000',
//         image_three: 'https://picsum.photos/seed/' + faker.datatype.number(1000) + 'picsum/3000/2000',
//         image_four: 'https://picsum.photos/seed/' + faker.datatype.number(1000) + 'picsum/3000/2000',
//         image_five: 'https://picsum.photos/seed/' + faker.datatype.number(1000) + 'picsum/3000/2000'
//       }
//     })
//     fakeImage.save()
//     count++
//   }
// }
// generateFakeData()


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

