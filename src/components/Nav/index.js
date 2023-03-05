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

    const navLinks = [<NavItem label="Health" to='/health' />, <NavItem label="forum" to="/forum" />, <NavItem label="Contact" to="/contact"/>, <NavItem label="" icon={<FiUser />} />];

    return (
        <div className="navContainer">
            <div className="leftNavContainer">
                {logoHeader()}
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