const generateResponse = require('../utilities/GenerateQuestions');
const GetAnswers = require('../utilities/GetAnswers');

const Mock = async (req, res) => {
    try {
        const resumePath = "uploads/resume.pdf"; 
        const Questions = await generateResponse(resumePath);

        const answers = await GetAnswers.Answers(Questions);
        return res.json({ Questions, answers});

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = Mock;