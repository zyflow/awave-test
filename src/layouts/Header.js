import { ReactComponent as Logo } from '../assets/images/logo.svg';
import React from "react";
import Menu from "./Menu";

function Header({currentMenuItem, setCurrentMenuItem}) {

    return  <div className='header' >
            <div className='menu-item' >
                <div className='start'>
                    <Logo />
                </div>
                <div className='end' >
                    <Menu currentMenuItem={currentMenuItem} setCurrentMenuItem={setCurrentMenuItem} />
                </div>
            </div>
    </div>
}

export default Header;
