
import React from 'react'
import {FiLoader} from 'react-icons/fi';
import '../../../styles/Loaders/SpinningLoader/index.css';

const SpinningLoader = ({color, size}) => {

    return (
        <FiLoader className="spin" color={color} size={size}/>
    )
}

export default SpinningLoader;