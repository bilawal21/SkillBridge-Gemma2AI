const PlainTextConversion = require('./PlainTextConversion');
const GemmaResponse = require('./GemmaResponse');


const GenerateQuestions = async (resumePath) => {

    let Text = await PlainTextConversion(resumePath);

    let prompt = `You are an expert technical recruiter specializing in creating targeted interview questions 
                  based on a candidates resume : ${Text}. Your task is to:
                    1. Generate 8-10 highly specific interview questions
                    2. Directly relate questions to the candidate's skills and experience
                    3. Cover technical abilities, soft skills, and career progression
                    4. Ensure questions are probing and reveal deeper professional insights`
    
    const Response = await GemmaResponse.main(prompt);
    return Response;
};

module.exports = GenerateQuestions;
