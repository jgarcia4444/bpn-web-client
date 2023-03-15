import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {FiUser, FiLock, FiMail} from 'react-icons/fi'
import { connect } from 'react-redux';

import FormInput from '../FormInput';

import '../../styles/Auth/index.css';
import '../../styles/Auth/smallScreen.css';
import '../../styles/global.css';

import signUp from '../../redux/actions/userActions/signUp';
import login from '../../redux/actions/userActions/login';

const Auth = ({signUp, user, login, raisePasswordMatchError}) => {

    const {signUpErrors, loginErrors} = user

    const location = useLocation();
    const navigate = useNavigate();
    const {state} = location;
    const authState = state !== null ? state.authState : "login";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameError, setUsernameError] = useState("");


    const emailInputInfo = {
        label: "Email",
        value: email,
        changeFunction: e => setEmail(e.target.value),
        icon: <FiMail color={"#fff"} size={20} />,
        error: emailError,
    }

    const passwordInputInfo = {
        label: "Password",
        value: password,
        changeFunction: e => setPassword(e.target.value),
        icon: <FiLock color={"#fff"} size={20} />,
        error: passwordError
    }

    const confirmPasswordInputInfo = {
        label: "Confirm Password",
        value: confirmPassword,
        changeFunction: e => setConfirmPassword(e.target.value),
        icon: <FiLock color={"#fff"} size={20} />,
        error: ""
    }

    const usernameInputInfo = {
        label: "Username",
        value: username,
        changeFunction: e => setUsername(e.target.value),
        icon: <FiUser color={"#fff"} size={20} />,
        error: usernameError,
    }

    const inputs = [usernameInputInfo, emailInputInfo, passwordInputInfo, confirmPasswordInputInfo];

    const renderInputs = () => {
        let chosenInputs;
        if (authState === "login") {
            chosenInputs = inputs.slice(1, inputs.length - 1);
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
                let userInfo = {
                    email,
                    password
                };
                login(userInfo);
            }
        } else {
            if ((email !== "" && password !== "") && confirmPassword !== "") {
                if (password === confirmPassword) {
                    let userInfo = {
                        email: email,
                        username: username,
                        password: password
                    }
                    signUp(userInfo);
                } else {
                    raisePasswordMatchError();
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

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
        setUsernameError("");
    }

    const configureFormErrors = () => {
        clearErrors("")
        if (authState === "login") {
            if (loginErrors.length > 0) {
                loginErrors.forEach(error => {
                    if (error.errorType === "GENERAL" || error.errorType === "EMAIL") {
                        setEmailError(error.message);
                    } else {
                        setPasswordError(error.message);
                    }
                })
            }
        } else {
            if (signUpErrors.length > 0) {
                signUpErrors.forEach(error => {
                    if (error.errorType === "GENERAL" || error.errorType === "EMAIL") {
                        setEmailError(error.message);
                    } else if (error.errorType === "USERNAME") {
                        setUsernameError(error.message);
                    } else {
                        setPasswordError(error.message);
                    }
                })
            }
        }
    }

    useEffect(() => {
        configureFormErrors()
        if (user.email !== "" && (loginErrors.length === 0 && signUpErrors.length === 0)) {
            navigate(`/user/account`);
        }
    },[user.email])

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

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: userInfo => dispatch(signUp(userInfo)),
        login: userInfo => dispatch(login(userInfo)),
        raisePasswordMatchError: () => dispatch({type: "SIGN_UP_ERROR",errors: [{type: "Password", message: "Password and the password confirmation do not match."}]})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Auth);