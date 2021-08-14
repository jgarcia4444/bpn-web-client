import React from 'react';

import './index.css';

const ShowInputBtn = ({ show, handleShowBtnClick, margin }) => {

    return (
        <div style={margin} onClick={handleShowBtnClick} className="basic-btn show-input-btn">
            {show ? "Hide Form" : "Show Form"}
        </div>
    )
}

export default ShowInputBtn;