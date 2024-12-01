const PlainTextConversion = require('../utilities/PlainTextConversion');
const GemmaResponse = require('../utilities/GemmaResponse');

exports.RecommendSkills = async (req, res) => {

    const resumePath = 'uploads/resume.pdf';
    const Text = await PlainTextConversion(resumePath);

    const Prompt = `Please analyze the following resume and provide specific technical and soft skill recommendations for career advancement.

                    Resume:${Text}

                    Please consider the following in your recommendations:

                    Current role and industry
                    Career goals
                    Areas of interest
                    Please provide structured learning paths for each recommended skill, starting from beginner to advanced levels. Also share hyperlinks of websites, Lectures.

                    And above all a roadmap for beginner to advance in mentioned skills only.

                    Example Learning Path:

                    Skill: Python Programming

                    Beginner:
                    Complete a beginner's Python course on Coursera or edX
                    Practice with Python exercises on HackerRank or Codewars
                    Intermediate:
                    Learn data structures and algorithms in Python
                    Work on personal projects using Python frameworks like Django or Flask
                    Advanced:
                    Explore machine learning and data science with Python libraries like NumPy, Pandas, Scikit-learn, and TensorFlow
                    Contribute to open-source Python projects
                    Please tailor your recommendations to my specific experience and career goals.

                    Remember to be as specific as possible in your resume and career goals to get the most accurate and relevant recommendations`;

    const SkillsRoadMap = await GemmaResponse.main(Prompt);

    return res.json({
        SkillsRoadMap,
        Type: "Recommend"
    })
};