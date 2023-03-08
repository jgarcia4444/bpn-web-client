import React from 'react';

import '../../styles/Forum/index.css';
import RefreshButton from './RefreshButton';

const Forum = () => {

    return (
        <div className="forumContainer">
            <h1 className="containerTitle">Forum</h1>
            <div className="refreshForumRow">
                <RefreshButton />
            </div>
        </div>
    )
}

export default Forum;