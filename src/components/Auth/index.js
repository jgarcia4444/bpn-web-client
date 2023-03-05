import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import {FiUser, FiLock} from 'react-icons/fi'

import FormInput from '../FormInput';

import '../../styles/Auth/index.css';

const Auth = () => {

    const params = useParams();

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
        if (params.authState === "login") {
            chosenInputs = inputs.slice(0, inputs.length - 1);
        } else {
            chosenInputs = inputs;
        }
        return chosenInputs.map((item, i) => <FormInput inputInfo={item} key={`${i}-${item.label}`} />)
    }

    return (
        <div className="authContainer">
            <h1>Auth</h1>
            <div className="formContainer">
                {renderInputs()}
            </div>
        </div>
    )
}

export default Auth;