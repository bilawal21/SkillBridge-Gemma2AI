import { useEffect, useState } from 'react'
import { Form, InputGroup, Button, Carousel } from 'react-bootstrap';
import '../../Main.css'
import { FaPaperPlane } from 'react-icons/fa';
import Spinner from 'react-bootstrap/Spinner';
import ReactMarkdown from 'react-markdown';
import CustomCarousel from './CustomCarousel';

const messages = [
    "Welcome to SkillBridge! <br/><br/><br/><br/> I'm excited to help you enhance your skills and explore new opportunities. What would you like to start with? <br /><br /> It's great that you're here! SkillBridge offers a variety of resources to help you level up your career. Let me know how I can assist you in achieving your goals.",
    "Joining SkillBridge means being part of a community that thrives on learning and growing together. Whether you're looking to build new skills or advance in your career, you’re in the right place. How can I assist you today?",
    "SkillBridge is more than just a platform; it's a place where your talents can truly shine. With expert guidance and a rich set of resources, you can unlock opportunities that align with your professional aspirations. What area are you most interested in?",
    "If you're looking to take your career to the next level, you're in the right spot. SkillBridge provides cutting-edge learning tools and personalized guidance to help you reach your full potential. What’s your first goal?",
    "Success isn’t a destination—it’s a journey, and the road can sometimes be challenging. However, with the right resources and a growth mindset, you'll overcome any obstacle. How can I support you on this journey?",
    "At SkillBridge, we believe that growth happens through learning. Whether you're building new technical skills, soft skills, or leadership abilities, we’ve got something for you. How can we get started?",
    "There are endless possibilities ahead, and now is the perfect time to explore them. By joining SkillBridge, you open doors to new challenges and exciting opportunities. What would you like to explore first?",
    "Your potential is limitless. SkillBridge helps you unlock the skills and knowledge that will not only accelerate your career but also make a meaningful impact in your industry. Let's discuss how you can get started.",
    "At SkillBridge, we understand that learning is a lifelong process. Our resources are designed to meet you wherever you are in your professional journey. With tailored learning paths and expert mentorship, you'll be on the fast track to achieving your goals. What do you hope to accomplish?"
];

const LLM = ({ showTextField, responses, showSpinner, singleResponse }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: ${inputValue}`);
        setInputValue('');
    };

    return (
        <div className="section-right custom-shadow">
            {/* Add content for the second section */}
            <h3>SKillBridge</h3>
            <div className='llm-container' >
                {singleResponse?.length === 0 ? (
                    showSpinner ? (<div className='d-flex justify-content-start align-items-center' ><Spinner animation="grow" />Loading...</div>)
                        : (<CustomCarousel />)
                ) : (
                    <>
                        <div className='llm-responses p-2' >
                            {singleResponse?.Type === "Analysis" && <div className="message-container custom-shadow mb-3">
                                <img src="/logoBlue.png" width={30} height={30} alt="Logo" />
                                <div className='message-container-text' >
                                    <h3>SkillsGaps: </h3>
                                    <ReactMarkdown >{singleResponse.SkillsGaps}</ReactMarkdown>
                                    <br></br>
                                    <h3>RecommendedCourse: </h3>
                                    <ReactMarkdown >{singleResponse.RecommendedCourse}</ReactMarkdown>
                                    <br></br>
                                    <h3>RecommendedCertificates: </h3>
                                    <ReactMarkdown >{singleResponse.RecommendedCertificates}</ReactMarkdown>
                                    <br></br>
                                    <h3>ReleventProjects: </h3>
                                    <ReactMarkdown >{singleResponse.ReleventProjects}</ReactMarkdown>
                                </div>
                            </div>}
                            {singleResponse?.Type === 'Career' && <div className="message-container custom-shadow mb-3">
                                <img src="/logoBlue.png" width={30} height={30} alt="Logo" />
                                <div className='message-container-text' >

                                    <h3>Recommended Career Path:</h3>
                                    <ReactMarkdown  >{singleResponse.recommendedPaths}</ReactMarkdown>
                                </div>
                            </div>}
                            {singleResponse?.Type === "Recommend" && <div className="message-container custom-shadow mb-3">
                                <img src="/logoBlue.png" width={30} height={30} alt="Logo" />
                                <div className='message-container-text' >
                                    <h3>Recommended Skills to learn</h3>
                                    <ReactMarkdown>{singleResponse.SkillsRoadMap}</ReactMarkdown>

                                </div>
                            </div>}

                            {responses.map((response, index) => (
                                <div className="message-container custom-shadow mb-3" key={index}>
                                    <img src="/logoBlue.png" width={30} height={30} alt="Logo" />
                                </div>
                            ))}
                        </div>
                        {showSpinner && <div className='d-flex justify-content-start align-items-center' ><Spinner animation="grow" />Loading...</div>}
                        {showTextField && <div className='input-field' >
                            < Form onSubmit={handleSubmit}>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your message"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                    />
                                    <Button variant="outline-primary submit-btn" type="submit">
                                        <FaPaperPlane style={{
                                            color: "white"
                                        }} />
                                    </Button>
                                </InputGroup>
                            </Form>
                        </div>}


                    </>
                )}

            </div>
        </div >
    )
}

export default LLM
