import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navigation.scss";

export const Navigation = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="link" onClick={handleShow}>
                <GiHamburgerMenu className='headerIcon'/>
            </Button>

            <Offcanvas show={show} onHide={handleClose} className="navigation">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        Menu
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* <Nav justify variant="pills" defaultActiveKey="/" className='options'>
                        <Nav.Item>
                            <Nav.Link href="/">All Tasks</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/add">Add Task</Nav.Link>
                        </Nav.Item>
                    </Nav> */}
                    <Nav justify variant="pills" defaultActiveKey="/" className='options'>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={handleClose}  className='option'>All Tasks</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/add" onClick={handleClose} className='option'>Add Task</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/help" onClick={handleClose} className='option'>Help</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {/* <nav>
                        <Link to="/">Tasks</Link>
                        <Link to="/add">Add</Link>
                    </nav> */}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}