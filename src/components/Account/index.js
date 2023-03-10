import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
            Username: {username}, Email: {email}
            <div onClick={logout}>Logout Button</div>
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