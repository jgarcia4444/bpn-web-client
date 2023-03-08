import React from 'react'
import {FiRefreshCw} from 'react-icons/fi';

import '../../../styles/Forum/RefreshButton/index.css';

const RefreshButton = () => {

    return (
        <div className="refreshButton">
            <FiRefreshCw color={"#fff"} size={24} />
        </div>
    )
}

export default RefreshButton;