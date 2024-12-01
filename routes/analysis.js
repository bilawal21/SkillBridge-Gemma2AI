const express = require('express');
const router = express.Router();
const multer = require('multer');
const analysisController = require('../Features/ResumeAnalysis');
const careerPathController = require("../Features/careerPathSuggestions");
const SkillsRecommend = require('../Features/SkillsRecommendation');
const Storage = require('../utilities/FileStorage');
const mockInter = require('../Features/MockInterviews');
const career = require('../Features/careerPathSuggestions');

const upload = multer({ storage: Storage });

router.post('/uploadResume', upload.single('resume'), (req, res) => {
    console.log("File uploaded and saved as 'resume.pdf'");
    res.send("File uploaded successfully!");
});


router.post('/getcareerpaths', career.suggestCareerPaths);
router.post('/getmockinterviews', mockInter);
router.post('/getanalysis', analysisController.analysisControler);
router.post('/getskillsrecommendation', SkillsRecommend.RecommendSkills);

module.exports = router;