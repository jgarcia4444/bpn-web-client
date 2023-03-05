import React from 'react';

import '../../styles/components/FormInput/index.css';

const FormInput = ({inputInfo}) => {

    const {value, changeFunction, label, icon} = inputInfo;

    const configureType = () => {
        if (label === "email") {
            return "email"
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