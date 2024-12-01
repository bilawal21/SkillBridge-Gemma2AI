const express = require('express');
const router = express.Router();
const multer = require('multer');
const analysisController = require('../Features/ResumeAnalysis');
const SkillsRecommend = require('../Features/SkillsRecommendation');
const Storage = require('../utilities/FileStorage');
const mockInter = require('../Features/MockInterviews');

const upload = multer({ storage: Storage });

router.post('/uploadResume', upload.single('resume'), (req, res) => {
    console.log("File uploaded and saved as 'resume.pdf'");
    res.send("File uploaded successfully!");
});


router.get('/getanalysis', analysisController.analysisControler);
router.get('/getskillsrecommendation', SkillsRecommend.RecommendSkills);
router.get('/getmockinterview', mockInter);

module.exports = router;