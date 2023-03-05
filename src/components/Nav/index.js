import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import {FiUser} from 'react-icons/fi';

import '../../styles/Nav/index.css';

import NavItem from './NavItem';

import Logo from '../../assets/logo/BPN.png';
const Nav = () => {

    const logoHeader = () => {
        return (
            <div className="logoHeaderButton">
                <Link to="/">
                    <img alt="Company Logo" className="logoImg" src={Logo} />
                </Link>
            </div>
        )
    }



    const navLinks = [{label: "Health", to: "/health"}, {label: "Forum", to: "/forum"}, {label: "Contact", to: "/contact"}, {label: "", to: "#", icon: <FiUser color={"#000"} size={20} />}]

    const renderNavLinks = () => {
        console.log("Here are the nav links", navLinks)
        return navLinks.map((item, i) => <NavItem key={`${i}-${item.label}`} itemInfo={item} />)
    }

    return (
        <div className="navContainer">
            <div className="leftNavContainer">
                {logoHeader()}
            </div>
            <div className="rightNavContainer">
                {renderNavLinks()}
            </div>
            {/* <Row>
                <Col sm={8}>
                    <img alt="Horizontal Blood Pressure Numbers Logo" className="nav-link nav-img" src={logoHorizontal} />
                </Col>
                <Col sm={4}>
                    <Link onClick={handleOtherPageClick} className="basic-btn other-page-btn" to={`/${otherPage.toLowerCase()}`}>{otherPage}</Link>
                </Col>
            </Row> */}
        </div>
    )
}

export default Nav;