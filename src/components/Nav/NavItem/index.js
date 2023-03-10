import React, {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import { connect } from 'react-redux';

import '../../../styles/Nav/NavItem/index.css';

const NavItem = ({itemInfo, changeIconColorToWhite, changeIconColorToBlack, username, logout }) => {

    const {label, to, icon} = itemInfo;

    const navigate = useNavigate();
    const location = useLocation()

    const [nextLevelMenu, setNextLevelMenu] = useState(false);

    const handleNavClick = () => {
        const {pathname} = location;
        if (icon !== undefined) {
            if (username !== "") {
                if (pathname === '/user/account') {
                    if (nextLevelMenu === true) {
                        setNextLevelMenu(false);
                    } else {
                        setNextLevelMenu(true);
                    }
                } else {
                    navigate('/user/account');
                }
            } else {
                if (nextLevelMenu === true) {
                    setNextLevelMenu(false);
                } else {
                    setNextLevelMenu(true);
                }
            }
        } else {
            setNextLevelMenu(false);
            navigate(to);
        }
    }

    const handleDropdownClick = dropdownLabel => {
        navigate('/auth', {state: {authState: dropdownLabel}});
        changeIconColorToBlack(true);
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
                        {username === "" ?
                            <>
                                <div onClick={() => handleDropdownClick("login")} className="dropdownMenuRow">
                                    Login
                                </div>
                                <div onClick={() => handleDropdownClick("sign-up")} className="dropdownMenuRow">
                                    Sign Up
                                </div>
                            </>
                        :
                            <div onClick={logout} className="dropdownMenuRow">
                                Logout
                            </div>
                        }
                    </div>
                
                }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.user.username,
    }
}

const mapDisaptchToProps = dispatch => {
    return {
        logout: () => dispatch({type: "LOGOUT"}),
    }
}

export default connect(
    mapStateToProps,
    mapDisaptchToProps
)(NavItem);