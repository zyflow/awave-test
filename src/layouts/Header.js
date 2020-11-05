import { ReactComponent as Logo } from '../assets/images/logo.svg';
import React, {useState} from "react";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";

function Header() {
    const pathName = useLocation().pathname.substr(1);
    const [currentMenuItem, setCurrentMenuItem] = useState(pathName);

    return  <div className='header' >
            <div className='menu-item' >
                <div className='start'>
                    <a href="/" className='no-decoration'><Logo /></a>
                </div>
                <div className='end' >
                    <Menu currentMenuItem={currentMenuItem} setCurrentMenuItem={setCurrentMenuItem} />
                </div>
            </div>
    </div>
}

export default Header;
