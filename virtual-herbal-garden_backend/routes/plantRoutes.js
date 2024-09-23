// routes/plants.js
const express = require('express');
const router = express.Router();
const Plant = require('../models/Plants'); // Ensure you have a Plant model

// POST /api/plants
router.post('/', async (req, res) => {
    const { name, botanicalName, commonNames, habitat, medicinalUses, cultivationMethods, images, videos, audioDescriptions } = req.body;

    try {
        const plant = new Plant({
            name,
            botanicalName,
            commonNames,
            habitat,
            medicinalUses,
            cultivationMethods,
            images, 
            videos, 
            audioDescriptions
        });

        const savedPlant = await plant.save();
        res.status(201).json(savedPlant);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get('/', async (req, res) => {
    try {
        const plants = await Plant.find();
        res.status(200).json(plants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;
