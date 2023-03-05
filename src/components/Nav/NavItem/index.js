import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom';

import '../../../styles/Nav/NavItem/index.css';

const NavItem = ({itemInfo, changeIconColorToWhite, changeIconColorToBlack}) => {

    console.log("Here is the item Info for the nav link", itemInfo);

    const {label, to, icon} = itemInfo;

    const navigate = useNavigate();

    const [nextLevelMenu, setNextLevelMenu] = useState(false);

    const handleNavClick = () => {
        if (icon !== undefined) {
            if (nextLevelMenu === true) {
                setNextLevelMenu(false);
            } else {
                setNextLevelMenu(true);
            }
        } else {
            navigate(to);
        }
    }

    const handleDropdownClick = dropdownLabel => {
        navigate(dropdownLabel);
    }

    return (
        <div 
            onMouseLeave={() => changeIconColorToBlack(icon !== undefined ? true : false)} 
            onMouseEnter={() => changeIconColorToWhite(icon !== undefined ? true : false)} 
            onClick={handleNavClick} 
            className="navItemContainer"
        >
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