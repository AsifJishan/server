const express = require('express');
const router = express.Router();
const {
  getAllProperties,
  getProperty,
  addProperty,
  updateProperty,
  deleteProperty,
} = require('../controllers/propertyController');

router.get('/', getAllProperties);
router.get('/:id', getProperty);
router.post('/', addProperty);
router.put('/:id', updateProperty);
router.delete('/:id', deleteProperty);

module.exports = router;
