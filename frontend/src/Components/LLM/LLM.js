import '../../Main.css'
import Spinner from 'react-bootstrap/Spinner';
import ReactMarkdown from 'react-markdown';
import CustomCarousel from './CustomCarousel';


const LLM = ({ showSpinner, singleResponse }) => {

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
                                    <h3>Skill Gaps: </h3>
                                    <ReactMarkdown >{singleResponse.SkillsGaps}</ReactMarkdown>
                                    <br></br>
                                    <h3>Recommended Course: </h3>
                                    <ReactMarkdown >{singleResponse.RecommendedCourse}</ReactMarkdown>
                                    <br></br>
                                    <h3>Recommended Certificates: </h3>
                                    <ReactMarkdown >{singleResponse.RecommendedCertificates}</ReactMarkdown>
                                    <br></br>
                                    <h3>Relevent Projects: </h3>
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
                            {singleResponse?.Type === "Mock" && <div className="message-container custom-shadow mb-3">
                                <img src="/logoBlue.png" width={30} height={30} alt="Logo" />
                                <div className='message-container-text' >
                                    <h3>Mock Interview</h3>
                                    <h3>Questions</h3>
                                    <ReactMarkdown>{singleResponse.Questions}</ReactMarkdown>
                                    <h3>Example Answers</h3>
                                    <ReactMarkdown>{singleResponse.answers}</ReactMarkdown>
                                </div>
                            </div>}

                        </div>
                        {showSpinner && <div className='d-flex justify-content-start align-items-center' ><Spinner animation="grow" />Loading...</div>}



                    </>
                )}

            </div>
        </div >
    )
}

export default LLM
