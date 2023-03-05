import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import {FiUser} from 'react-icons/fi';

import '../../styles/Nav/index.css';

import NavItem from './NavItem';

import Logo from '../../assets/logo/BPN.png';
const Nav = () => {

    const [iconColor, setIconColor] = useState('#000');

    const logoHeader = () => {
        return (
            <div className="logoHeaderButton">
                <Link to="/">
                    <img alt="Company Logo" className="logoImg" src={Logo} />
                </Link>
            </div>
        )
    }

    const changeIconColorToWhite = isIcon => {
        console.log("Change Icon Color");
        if (isIcon === true) {
            setIconColor("#fff");
        }
    }

    const changeIconColorToBlack = isIcon => {
        console.log("Change Icon Color");
        if (isIcon === true) {
            setIconColor("#000");
        }
    }



    const navLinks = [{label: "Health", to: "/health"}, {label: "Forum", to: "/forum"}, {label: "Contact", to: "/contact"}, {label: "", to: "#", icon: <FiUser color={iconColor} size={20} />}]

    const renderNavLinks = () => {
        console.log("Here are the nav links", navLinks)
        return navLinks.map((item, i) => <NavItem changeIconColorToWhite={changeIconColorToWhite} changeIconColorToBlack={changeIconColorToBlack} key={`${i}-${item.label}`} itemInfo={item} />)
    }

    return (
        <div className="navContainer">
            <div className="leftNavContainer">
                {logoHeader()}
            </div>
            <div className="rightNavContainer">
                {renderNavLinks()}
            </div>
        </div>
    )
}

export default Nav;