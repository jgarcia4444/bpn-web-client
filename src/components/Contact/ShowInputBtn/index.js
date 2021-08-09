import React from 'react';

import './index.css';

const ShowInputBtn = ({ show, handleShowBtnClick }) => {

    return (
        <div onClick={handleShowBtnClick} className="show-input-btn">
            {show ? "Hide Form" : "Show Form"}
        </div>
    )
}

export default ShowInputBtn;