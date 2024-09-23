const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  botanicalName: { type: String, required: true },
  commonNames: [String],
  habitat: [String],
  medicinalUses: [String],
  cultivationMethods: [String],
  images: [String],
  videos: [String],
  audioDescriptions: [String]
});

module.exports = mongoose.model('Plant', plantSchema);