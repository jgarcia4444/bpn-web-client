
import React from 'react'

import '../../../styles/Forum/SendMessageButton/index.css';

const SendMessageButton = ({handleClick}) => {

    return (
        <div onClick={handleClick} className="sendMessageButton">
            Send
        </div>
    )
}

export default SendMessageButton;