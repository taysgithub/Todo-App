import "./Header.scss";
import {BsBookmarkCheck} from "react-icons/bs";

import { Navigation } from "./Nav/Navigation";

export const Header = () => {
    return (
        <header>
            <div className="left">
                <Navigation/>
                <div className="logo">
                    <BsBookmarkCheck className='headerIcon'/> Todo App
                </div>
            </div>
            <div className="right">
                by Yuxiao Yan
            </div>
        </header>
    );
}