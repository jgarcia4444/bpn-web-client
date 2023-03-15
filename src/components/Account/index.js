import React, {useEffect, useState} from 'react'
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../styles/Account/index.css';

import UsersRecords from '../UsersRecords';

import addUsername from '../../redux/actions/userActions/addUsername';

const Account = ({user, addUsername}) => {

    const [newUsername, setNewUsername] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const {username, email, userId, updateUsernameError} = user;

    const handleAddUsername = () => {
        if (newUsername !== "") {
            if (newUsername.split('').length > 3) {
                let userInfo = {
                    user_id: userId,
                    username: newUsername
                }
                addUsername(userInfo);
            } else {
                dispatch({type: "USER_UPDATE_ERROR", message: "Username must be 4 characters long at minimum."})
            }
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
                            <div className="usernameErrorRow">
                                {updateUsernameError !== "" &&
                                    <p className="updateUsernameError">{updateUsernameError}</p>
                                }
                            </div>
                            <div className="usernameInputRow">
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