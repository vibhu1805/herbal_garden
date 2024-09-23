const Plant = require('../models/Plants');

// Get all plants
const getPlants = async (req, res) => {
    try {
        const plants = await Plant.find();
        res.status(200).json(plants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a plant by ID
const getPlantById = async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (plant) {
            res.status(200).json(plant);
        } else {
            res.status(404).json({ message: 'Plant not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new plant
const addPlant = async (req, res) => {
    try {
        const plant = new Plant(req.body);
        const createdPlant = await plant.save();
        res.status(201).json(createdPlant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getPlants,
    getPlantById,
    addPlant,
};
