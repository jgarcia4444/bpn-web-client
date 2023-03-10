import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../../styles/Account/index.css';

import UsersRecords from '../UsersRecords';

const Account = ({user, logout}) => {

    const navigate = useNavigate();

    const {username, email} = user;

    useEffect(() => {
        if (username === "") {
            navigate('/auth');
        }
    })

    return (
        <div className="accountContainer">
            <h1 className="containerTitle">Account</h1>
            <div className="userInfoRow">
                <div className="userInfoCol">
                    <h4 className="userInfoLabel">Username</h4>
                    {username}
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
        logout: () => dispatch({type: 'LOGOUT'}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Account);