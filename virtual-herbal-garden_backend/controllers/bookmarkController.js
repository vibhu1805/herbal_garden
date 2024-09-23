const User = require('../models/user');
const Plant = require('../models/Plants');

// Add a plant to user's bookmarks
const addBookmark = async (req, res) => {
    const userId = req.user._id;
    const { plantId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the plant exists
        const plant = await Plant.findById(plantId);
        if (!plant) {
            return res.status(404).json({ message: 'Plant not found' });
        }

        // Check if the plant is already bookmarked
        if (user.bookmarks.includes(plantId)) {
            return res.status(400).json({ message: 'Plant already bookmarked' });
        }

        // Add plant to bookmarks
        user.bookmarks.push(plantId);
        await user.save();

        res.status(200).json({ message: 'Plant bookmarked successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Remove a plant from user's bookmarks
const removeBookmark = async (req, res) => {
    const userId = req.user._id;
    const { plantId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the plant exists
        const plant = await Plant.findById(plantId);
        if (!plant) {
            return res.status(404).json({ message: 'Plant not found' });
        }

        // Remove plant from bookmarks
        user.bookmarks = user.bookmarks.filter(id => !id.equals(plantId));
        await user.save();

        res.status(200).json({ message: 'Plant removed from bookmarks' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all bookmarked plants for a user
const getBookmarks = async (req, res) => {
    const userId = req.user._id;

    try {
        const user = await User.findById(userId).populate('bookmarks');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user.bookmarks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addBookmark,
    removeBookmark,
    getBookmarks,
};
