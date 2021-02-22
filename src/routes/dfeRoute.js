const express = require('express');
const router = express.Router();
const controller = require('../controllers/dfeController')
router.post('/dfe', controller.post);
module.exports = router;
