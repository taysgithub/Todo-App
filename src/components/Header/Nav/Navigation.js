import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {GiHamburgerMenu} from "react-icons/gi";
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
                    <Nav justify variant="pills" defaultActiveKey="/" className='options'>
                        <Nav.Item>
                            <Nav.Link href="/">All Tasks</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}