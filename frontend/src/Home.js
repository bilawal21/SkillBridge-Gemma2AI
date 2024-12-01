import { useState } from 'react'
import { Navbar, Container, Row, Col, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import LLM from './Components/LLM/LLM';
import Upload from './Components/FileUpload/Upload';
import { endpoint } from './utils/Endpoint';
import axios from 'axios'

const Home = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [showTextField, setShowTextField] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [singleResponse, setSingleResponse] = useState([])
    const [showSpinner, setShowSpinner] = useState(false)

    const Analysis = async () => {
        setShowTextField(false)
        setShowSpinner(true)

        try {
            await axios.post(`${endpoint}/ResumeAnalysis/getanalysis`).then((response) => {
                setSingleResponse(response.data)
            }).finally(() => {
                setShowSpinner(false)
            })
        } catch (error) {
            setShowSpinner(false)
            console.log("There was an error while getting an analysis on the resume")
        }
    }

    const Mock = async () => {
        setShowTextField(true)
        setShowSpinner(true)
        try {
            await axios.post(`${endpoint}/ResumeAnalysis/getmockinterviews`).then((response) => {
                setShowSpinner(false)
                setSingleResponse(response.data)
            })
        } catch (error) {
            setShowSpinner(false)
            console.log("There was an issue while generating mock interview questions")
        }
    }

    const Career = async () => {
        setShowTextField(false)
        setShowSpinner(true)
        try {
            await axios.post(`${endpoint}/ResumeAnalysis/getcareerpaths`).then((response) => {
                setShowSpinner(false)
                setSingleResponse(response.data)
            })
        } catch (error) {
            setShowSpinner(false)
            console.log("There was an issue while getting career path suggestions")
        }
    }

    const Recommendation = async () => {
        setShowTextField(false)
        setShowSpinner(true)
        try {
            await axios.post(`${endpoint}/ResumeAnalysis/getskillsrecommendation`).then((response) => {
                setShowSpinner(false)
                setSingleResponse(response.data)
            })
        } catch (error) {
            setShowSpinner(false)
            console.log("There was an issue while getting career path suggestions")
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type === 'application/pdf') {
                setSelectedFile(file);
                console.log('PDF file uploaded:', file);
            } else {
                setSelectedFile(null);
                alert("The selected file is not a pdf.")
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', selectedFile);

        if (!selectedFile) {
            alert("No file selected.");
        } else {
            try {
                await axios.post(`${endpoint}/ResumeAnalysis/uploadResume`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }).then((response) => {
                    alert(response.data);
                    setBtnDisabled(false)
                });
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('File upload failed.');
            }
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
                                    // height={30}
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
                        <Col className="d-flex justify-content-center" xs={12} sm={12} md={12} lg={6} xl={4}>
                            <Upload feature1={Analysis} feature2={Mock} feature3={Career} feature4={Recommendation} handleFileChange={handleFileChange} handleSubmit={handleSubmit} btnDisabled={btnDisabled} setBtnDisabled={setBtnDisabled} />
                        </Col>
                        <Col className="d-flex justify-content-center" xs={12} sm={12} md={12} lg={6} xl={8}>
                            <LLM showTextField={showTextField} showSpinner={showSpinner} singleResponse={singleResponse} />
                        </Col>
                    </Row>
                </div>

            </div>
        </>
    )
}

export default Home
