import { useState } from 'react'
import { Navbar, Container, Row, Col, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import LLM from './Components/LLM/LLM';
import Upload from './Components/FileUpload/Upload';

const Home = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [showTextField, setShowTextField] = useState(false)


    const feature1 = () => {
        setShowTextField(true)
    }

    const feature2 = () => {
        setShowTextField(false)
    }

    const feature3 = () => {
        setShowTextField(false)
    }

    const feature4 = () => {
        setShowTextField(false)
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Check MIME type
            if (file.type === 'application/pdf') {
                setSelectedFile(file);
                console.log('PDF file uploaded:', file);
            } else {
                setSelectedFile(null);
                alert("The selected file is not a pdf.")
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedFile) {
            alert(`File selected: ${selectedFile.name}`);
        } else {
            alert("No file selected.");
        }
    };


    return (
        <>
            <div className='surrounding-div' >
                <div className='main-outside-div' >
                    <Navbar className="bg-body-tertiary boot-nav custom-shadow">
                        <Container className='d-flex justify-content-center' >
                            <Navbar.Brand href="#home" >
                                <img
                                    alt=""
                                    src="/logoBlue.png"
                                    width={30}
                                    height={30}
                                    className="d-inline-block align-top"
                                />
                                SkillBridge
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </div>

                {/* New section below the navbar */}
                <div className='grid-container' >
                    <Row className='h-100'>
                        <Col className="d-flex justify-content-center" xs={12} md={4}>
                            <Upload feature1={feature1} feature2={feature2} feature3={feature3} feature4={feature4} handleFileChange={handleFileChange} handleSubmit={handleSubmit} />
                        </Col>
                        <Col className="d-flex justify-content-center" xs={12} md={8}>
                            <LLM showTextField={showTextField} />
                        </Col>
                    </Row>
                </div>

            </div>
        </>
    )
}

export default Home
