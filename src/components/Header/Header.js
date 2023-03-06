import "./Header.scss";
import {BsBookmarkCheck} from "react-icons/bs";
import { Button } from "react-bootstrap";
import { Navigation } from "./Nav/Navigation";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    return (
        <header>
            <div className="left">
                <Navigation/>
                <Button className="go-home" onClick={goHome}>
                    <div className="logo">
                        <BsBookmarkCheck className='headerIcon'/> Todo App
                    </div>
                </Button>
            </div>
            <div className="right">
                by Yuxiao Yan
            </div>
        </header>
    );
}