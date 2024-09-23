// seed.js
const mongoose = require('mongoose');
const Plant = require('./models/Plants'); // Adjust path as needed

mongoose.connect('mongodb://localhost:27017/your-db-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const plants = [
  {
    name: 'Rose',
    botanicalName: 'Rosa',
    commonNames: ['Rose'],
    habitat: ['Garden'],
    medicinalUses: ['Astringent'],
    cultivationMethods: ['Pruning'],
    images: ['../my-app/public/images/chamomile.jpeg'],
    videos: ['http://example.com/rose.mp4'],
    audioDescriptions: ['http://example.com/rose.mp3'],
  },
  {
    name: 'Rose',
    botanicalName: 'Rosa',
    commonNames: ['Rose'],
    habitat: ['Garden'],
    medicinalUses: ['Astringent'],
    cultivationMethods: ['Pruning'],
    images: ['../my-app/public/images/neem.jpeg'],
    videos: ['http://example.com/rose.mp4'],
    audioDescriptions: ['http://example.com/rose.mp3'],
  }
  // Add more plants as needed
]

const seedPlants = async () => {
  await Plant.deleteMany({});
  await Plant.insertMany(plants);
  console.log('Database seeded!');
  mongoose.connection.close();
};

seedPlants();
