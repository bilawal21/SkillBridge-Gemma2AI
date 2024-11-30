const express = require('express');
const router = express.Router();
const multer = require('multer');
const analysisController = require('../Features/ResumeAnalysis');
const SkillsRecommend = require('../Features/SkillsRecommendation');
const Storage = require('../utilities/FileStorage');

const upload = multer({ storage: Storage });

router.post('/uploadResume', upload.single('resume'), (req, res) => {
    console.log("File uploaded and saved as 'resume.pdf'");
    res.send("File uploaded successfully!");
});


router.post('/getanalysis', analysisController.analysisControler);
router.post('/getskillsrecommendation', SkillsRecommend.RecommendSkills);

module.exports = router;