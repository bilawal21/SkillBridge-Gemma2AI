const generateResponse = require('./GenerateQuestions');
const GemmaResponse = require('./GemmaResponse');

const Answers = async (Questions) => {
    try {        
        const prompt = `You are given with questions for a mock interview : ${Questions}, you have to answer it, every question.`;
        const answers = await GemmaResponse.main(prompt);

        return answers;

    } catch (error) {
        console.error(error);
    }
};

module.exports = { Answers };