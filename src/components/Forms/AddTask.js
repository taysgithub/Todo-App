import uuid from "react-uuid";
import { useState, useContext } from "react"
import { AppContext } from "../../App";
// import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AddTask.scss";
// import "./AddTask2.scss";
import { Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const AddTask = () => {

    // Collect the user input in a custom component using controlled components
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    const [isValid, setIsValid] = useState(false);
    // const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const initialize = () => {
        setDescription('');
        setStatus(false);
    }
    const handleClose = () => {
        // setShow(false);             
        setIsValid(false);
        initialize();
        navigate('/');
    };
    // const handleShow = () => setShow(true);

    // access the variables using useContext
    const {tasks, setTasks} = useContext(AppContext);

    const handleSubmit = async (event) => {
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
            const docRef = await addDoc(collection(db, "tasks"), {
                description: description,
                done: status,
                timestamp: serverTimestamp()
            })
            // setShow(false)
            setIsValid(false);
            initialize();
            navigate('/');
        }
    };

    return (
        <div className="add-task"> 
            <div className="title">
                <h1>New Task</h1>        
                <hr />
            </div> 
            <div className="form">
                <Form noValidate validated={isValid} onSubmit={handleSubmit} className="form-groups">
                    <Row>
                        <Form.Group>
                            <Form.Label><b>Description</b></Form.Label>
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
                <hr />
                <div className="buttons">
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Add
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}