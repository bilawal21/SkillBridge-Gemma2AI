const express = require('express');
const router = express.Router();
const multer = require('multer');
const analysisController = require('../controllers/ResumeAnalysis');

const upload = multer({dest: 'uploads/'});

router.post('/getanalysis', upload.single('resume'), analysisController.analysisControler);

module.exports = router;