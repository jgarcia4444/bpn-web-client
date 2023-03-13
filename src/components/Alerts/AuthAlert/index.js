import React from 'react'
import {FiX} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import '../../../styles/Auth/AuthAlert/index.css';

const AuthAlert = ({dismissAlert}) => {

    const navigate = useNavigate();

    const sendToAuth = authState => {
        dismissAlert();
        if (authState === 'login') {
            navigate('/auth', {state: {authState: 'login'}});
        } else {
            navigate('/auth', {state: {authState: 'sign-up'}});
        }
    }

    return (
        <div onClick={dismissAlert} className="authAlertContainer">
            <div className="authAlertModal">
                <div onClick={dismissAlert} className="dismissButton">
                    <FiX color={"#f00"} size={24} />
                </div>
                <div className="authAlertTitleRow">
                    <h3 className="authAlertTitle">Account Required</h3>
                </div>
                <div className="authAlertMessageRow">
                    <p className="authAlertMessage">To add a message to the forum you must create an account or login to your existing account.</p>
                </div>
                <div className="authAlertActionRow">
                    <div onClick={() => sendToAuth('login')} className="authAlertButton loginButton">Login</div>
                    <div onClick={() => sendToAuth('signup')} className="authAlertButton signUpButton">Sign Up</div>
                </div>
            </div>
        </div>
    )
}

export default AuthAlert;