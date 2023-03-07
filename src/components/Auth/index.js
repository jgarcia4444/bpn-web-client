import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {FiUser, FiLock} from 'react-icons/fi'

import FormInput from '../FormInput';

import '../../styles/Auth/index.css';
import '../../styles/global.css';

const Auth = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const {state} = location;
    const authState = state !== null ? state.authState : "login";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const emailInputInfo = {
        label: "Email",
        value: email,
        changeFunction: e => setEmail(e.target.value),
        icon: <FiUser color={"#fff"} size={20} />
    }

    const passwordInputInfo = {
        label: "Password",
        value: password,
        changeFunction: e => setPassword(e.target.value),
        icon: <FiLock color={"#fff"} size={20} />
    }

    const confirmPasswordInputInfo = {
        label: "Confirm Password",
        value: confirmPassword,
        changeFunction: e => setConfirmPassword(e.target.value),
        icon: <FiLock color={"#fff"} size={20} />
    }

    const inputs = [emailInputInfo, passwordInputInfo, confirmPasswordInputInfo];

    const renderInputs = () => {
        let chosenInputs;
        if (authState === "login") {
            chosenInputs = inputs.slice(0, inputs.length - 1);
        } else {
            chosenInputs = inputs;
        }
        return chosenInputs.map((item, i) => <FormInput inputInfo={item} key={`${i}-${item.label}`} />)
    }

    const configureButtonText = () => {
        return authState === "login" ? "Login" : "Sign Up";
    }

    const handleAuthClick = () => {
        if (authState === 'login') {
            if (email !== "" && password !== "") {
                // trigger login action
            }
        } else {
            if ((email !== "" && password !== "") && confirmPassword !== "") {
                if (password === confirmPassword) {
                    // trigger sign up action
                } else {
                    // passwords don't match
                }
            }
        }
    }

    const handleOtherAuthClick = () => {
        if (authState === "login") {
            navigate('/auth', {state: {authState: 'sign-up'}});
        } else {
            navigate('/auth', {state: {authState: 'login'}});
        }
    }

    const configureOtherAuthText = () => {
        let configuredText, authClickText;
        if (authState === 'login') {
            configuredText = "Don't have an account?";
            authClickText = "Sign Up"
        } else {
            configuredText = "Already have an account?";
            authClickText = "Login"
        }
        return (
            <p className="otherAuthText">{configuredText} <span className="otherAuthClickText" onClick={handleOtherAuthClick}>{authClickText}</span></p>
        )
    }

    return (
        <div className="authContainer">
            <div className="authContainerTitleRow">
                <h1 className='containerTitle authContainerTitle'>{authState === "login" ? "Login" : "Sign Up"}</h1>
            </div>
            <div className="pageDetailsContainer">
                <div className="formContainer">
                    {renderInputs()}
                    <div className="authButtonRow">
                        <div className="otherAuthTextContainer">
                            {configureOtherAuthText()}
                        </div>
                        <div className="authButtonContainer">
                            <button onClick={handleAuthClick} className="authButton">
                                {configureButtonText()}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="authDetailsContainer">
                    <div className="titleRow">
                        <h2 className="authTitle">Pros of having an account</h2>
                    </div>
                    <div className="accountDetailsListContainer">
                        <ul className="accountDetailsList">
                            <li className="listItem">Ability to post in the forum</li>
                            <li className="listItem">
                                Use the account created here and log into the mobile app.
                            </li>
                            <li className="listItem">
                                View your saved records in different forms than the mobile app.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;