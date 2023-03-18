import uuid from "react-uuid";
import { useState, useContext } from "react"
import { AppContext } from "../../App";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AddTask.scss";
import { Row } from "react-bootstrap";

export const AddTask2 = () => {

    // Collect the user input in a custom component using controlled components
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [show, setShow] = useState(false);

    const initialize = () => {
        setDescription('');
        setStatus(false);
    }
    const handleClose = () => {
        setShow(false);             
        setIsValid(false);
        initialize();
    };
    const handleShow = () => setShow(true);

    // access the variables using useContext
    const {tasks, setTasks} = useContext(AppContext);

    const handleSubmit = (event) => {
        if (description.trim() === '') {
            setDescription('');
            event.preventDefault();
            event.stopPropagation();
            setIsValid(true);
        }
        else{
            event.preventDefault();
            setTasks([...tasks, {
                id: uuid(),
                description: description,
                done: status
            }]);
            setShow(false)
            setIsValid(false);
            initialize();
        }
    };

    return (
        <div>
            <div>
                <Button variant="primary" size="sm" className="smallBtn" onClick={handleShow}>
                    Add a Task
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>New Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={isValid} onSubmit={handleSubmit}>
                            <Row>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="My new task ..."
                                        maxLength={150}
                                        value={description}
                                        onChange={(event) => {setDescription(event.target.value)}}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please write a description.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group>
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select
                                        value={status}
                                        onChange={(event) => {setStatus(event.target.value)}}
                                    >
                                        <option value="false">Open</option>
                                        <option value="true">Completed</option>                            
                                    </Form.Select>
                                </Form.Group>
                            </Row> 
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Add
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}