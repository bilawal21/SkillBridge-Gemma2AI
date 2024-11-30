import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';


const CustomModal = ({ show, handleClose, selectedOption, setSelectedOption, handleRadioChange, handleSubmit }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Choose Feature</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Please choose your feature</Form.Label>
                        <div className="d-flex flex-column">
                            <Form.Check
                                type="radio"
                                label="Feature 1"
                                name="feature"
                                value="Feature1"
                                checked={selectedOption === 'Feature1'}
                                onChange={handleRadioChange}
                                className="mb-3" // Add margin bottom between radio buttons
                            />
                            <Form.Check
                                type="radio"
                                label="Feature 2"
                                name="feature"
                                value="Feature2"
                                checked={selectedOption === 'Feature2'}
                                onChange={handleRadioChange}
                                className="mb-3"
                            />
                            <Form.Check
                                type="radio"
                                label="Feature 3"
                                name="feature"
                                value="Feature3"
                                checked={selectedOption === 'Feature3'}
                                onChange={handleRadioChange}
                                className="mb-3"
                            />
                        </div>
                    </Form.Group>
                    <Button variant="primary" onClick={handleClose} className="w-100">
                        Save
                    </Button>
                </Form>
            </Modal.Body>
            {/* <Modal.Footer>

                <Button variant="secondary" onClick={handleClose} className="w-20">
                    Close
                </Button>
            </Modal.Footer> */}
        </Modal>
    )
}

export default CustomModal
