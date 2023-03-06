import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Help.scss";
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useRef, useState } from 'react';

export const Help = () => {
    const [selected, setSelected] = useState(false);
    const selection = useRef(null);
    const handleSelect = (e) => {
        setSelected(true);
        // e.target.blur();
    }

    return (
        <div className="help">
            <h1 className="pageTitle">Help Center</h1>
            <hr />
            {/* <h3>Start by selecting your question</h3> */}
            <Nav variant="pills">
                <NavDropdown title="How can we help you with? " id="nav-dropdown" menuVariant="dark" drop='down-centered' ref={selection} onSelect={handleSelect}>
                    <NavDropdown.Item as={Link} to="introduction">Introduction</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="add">Add Task</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="remove">Remove Task</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {/* <nav className="help-menu">
                <Link to="introduction">Introduction</Link>
                <Link to="add">Add Task</Link>
                <Link to="remove">Remove Task</Link>
            </nav> */}
            {selected &&
                <div className="help-content">
                    <Outlet/>
                </div>
            }
        </div>
    )
}