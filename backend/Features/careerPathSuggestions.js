const PlainTextConversion = require('../utilities/PlainTextConversion');
const GemmaResponse = require('../utilities/GemmaResponse');

exports.suggestCareerPaths = async (req, res) => {
    try {
       
        const resumePath = 'uploads/resume.pdf';
        const Text = await PlainTextConversion(resumePath);
      
        // console.log("Extracted Text: ", Text);

        
        const prompt = `Based on the following resume, suggest relevant career paths, industry trends, and future growth areas:
        Resume Text: "${Text}"
        
        Focus on skills, qualifications, and interests mentioned in the resume.`;

        // console.log("Prompt for API:", prompt);

        const recommendedPaths = await GemmaResponse.main(prompt);

        return res.status(200).json({
            message: "Career paths suggested successfully",
            recommendedPaths,
            Type: "Career",
        });
    } catch (error) {
        console.error('Error processing resume upload:', error);
        return res.status(500).json({ message: "Error processing the resume." });
    }
};