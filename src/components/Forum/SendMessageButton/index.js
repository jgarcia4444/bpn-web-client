
import React from 'react'

const SendMessageButton = ({handleClick}) => {

    return (
        <div onClick={handleClick} className="sendMessageButton">
            Send
        </div>
    )
}

export default SendMessageButton;