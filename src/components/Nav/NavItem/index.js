import React, {useState} from 'react';

import {Navigate} from 'react-router-dom';

import '../../../styles/Nav/NavItem/index.css';

const NavItem = ({label, to, icon}) => {

    const [nextLevelMenu, setNextLevelMenu] = useState(false);

    const handleNavClick = () => {
        if (icon !== undefined) {
            if (nextLevelMenu === true) {
                setNextLevelMenu(false);
            } else {
                setNextLevelMenu(true);
            }
        } else {
            return <Navigate to={to} />
        }
    }

    const handleDropdownClick = dropdownLabel => {
        return <Navigate to={dropdownLabel} />
    }

    return (
        <div onClick={handleNavClick} className="navItemContainer">
                {label !== "" && label}
                {icon !== undefined && icon}
                {nextLevelMenu === true &&
                    <div className="dropdownMenu">
                        <div onClick={() => handleDropdownClick("login")} className="dropdownMenuRow">
                            Login
                        </div>
                        <div onClick={() => handleDropdownClick("sign-up")} className="dropdownMenuRow">
                            Sign Up
                        </div>
                    </div>
                }
        </div>
    )
}

export default NavItem;