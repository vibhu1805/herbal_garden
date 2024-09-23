const express = require('express');
const { addBookmark, removeBookmark, getBookmarks } = require('../controllers/bookmarkController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, addBookmark).get(protect, getBookmarks);
router.route('/remove').post(protect, removeBookmark);

module.exports = router;
