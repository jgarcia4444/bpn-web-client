import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../styles/Account/index.css';

import UsersRecords from '../UsersRecords';

import addUsername from '../../redux/actions/userActions/addUsername';

const Account = ({user, addUsername}) => {

    const [newUsername, setNewUsername] = useState("");

    const navigate = useNavigate();

    const {username, email, userId} = user;

    const handleAddUsername = () => {
        if (username !== "") {
            if (username.split('').length > 3) {
                let userInfo = {
                    user_id: userId,
                    username: newUsername
                }
                addUsername(userInfo);
            } else {

            }
        } else {

        }
    }

    useEffect(() => {
        if (email === "") {
            navigate('/auth');
        }
    })

    return (
        <div className="accountContainer">
            <h1 className="containerTitle">Account</h1>
            <div className="userInfoRow">
                <div className="userInfoCol">
                    <h4 className="userInfoLabel">Username</h4>
                    {username === "" ?
                        <div className="newUsernameRow">
                            <input 
                                type="text" 
                                className="newUsernameInput" 
                                value={newUsername}
                                onChange={e => setNewUsername(e.target.value)}
                                placeholder="Add a username..."
                            />
                            <button
                                className="addnewUsernameButton"
                                onClick={handleAddUsername}
                            >
                                Add
                            </button>
                        </div>
                    :
                        username
                    }
                </div>
                <div className="userInfoCol">
                    <h4 className="userInfoLabel">Email</h4>
                    {email}
                </div>
            </div>
            <UsersRecords />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUsername: userInfo => dispatch(addUsername(userInfo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Account);