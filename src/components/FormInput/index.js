import React from 'react';

import '../../styles/components/FormInput/index.css';

const FormInput = ({inputInfo}) => {

    const {value, changeFunction, label, icon} = inputInfo;

    const configureType = () => {
        if (label === "Email") {
            return "email"
        } else if (label === "Username") {
            return "text"
        } else {
            return "password";
        }
    }

    return (
        <div className="inputContainer">
            <div className="inputLabelRow">
                <p className="inputLabel">{label}</p>
            </div>
            <div className="inputValueRow">
                {icon}
                <input className="input" type={configureType()} value={value} onChange={changeFunction} />
            </div>
        </div>
    )
}

export default FormInput;