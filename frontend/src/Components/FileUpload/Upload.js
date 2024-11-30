import React from 'react'
import '../../Main.css'
import { Button, Row, Col, Form } from 'react-bootstrap'


const Upload = ({ feature1, feature2, feature3, feature4, handleFileChange, handleSubmit }) => {

    return (
        <div className="section-left custom-shadow">
            {/* Add content for the first section */}
            <h3>Upload Resume/CV</h3>
            <div className='upload-container' >
                <div className='upload' >
                    <div className='upload-icon-and-button' >
                        <img src='/submit.png' width={100} height={100} />
                        <Form onSubmit={handleSubmit} className='d-flex flex-column justify-content' >
                            <Form.Group controlId="formFile" className="mb-1">
                                <Form.Control type="file" onChange={handleFileChange} />
                            </Form.Group>
                            <Button className='submit-btn btn-shadow mb-3' type='submit'>Upload Resume</Button>
                        </Form>
                    </div>
                    <div className='upload-instructions' >
                        <ul>
                            <li>Please make sure that the document is in a pdf form.</li>
                            <li>Upload the document by clicking on the icon and then click on the button</li>
                        </ul>

                    </div>
                    <div >
                        <Row className="feature-choice" >
                            <Col xs={6} className="mb-3">
                                <Button className="w-100 submit-btn btn-shadow"
                                    onClick={feature1}
                                >Feature 1</Button>
                            </Col>
                            <Col xs={6} className="mb-3">
                                <Button className="w-100 submit-btn btn-shadow"
                                    onClick={feature2}>Feature 2</Button>
                            </Col>
                            <Col xs={6} className="mb-3">
                                <Button className="w-100 submit-btn btn-shadow"
                                    onClick={feature3}>Feature 3</Button>
                            </Col>
                            <Col xs={6} className="mb-3">
                                <Button className="w-100 submit-btn btn-shadow"
                                    onClick={feature4}>Feature 4</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload
