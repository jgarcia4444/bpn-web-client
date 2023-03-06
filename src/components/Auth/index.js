import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {FiUser, FiLock} from 'react-icons/fi'

import FormInput from '../FormInput';

import '../../styles/Auth/index.css';

const Auth = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const {state} = location;
    const {authState} = state;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const emailInputInfo = {
        label: "Email",
        value: email,
        changeFunction: val => setEmail(val),
        icon: <FiUser color={"#fff"} size={20} />
    }

    const passwordInputInfo = {
        label: "Password",
        value: password,
        changeFunction: val => setPassword(val),
        icon: <FiLock color={"#fff"} size={20} />
    }

    const confirmPasswordInputInfo = {
        label: "Confirm Password",
        value: confirmPassword,
        changeFunction: val => setConfirmPassword(val),
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
            <h1>Auth</h1>
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
        </div>
    )
}

export default Auth;