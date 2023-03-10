import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const UsersRecords = ({recordsReducer}) => {

    const {records} = recordsReducer;

    useEffect(() => {
        if (records.length === 0) {
            // fetch records
        }
    });

    return (
        <div className="usersRecordsContainer">
            <h2 className="containerTitle">Records</h2>
            {/* This is where the graph would be. */}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        recordsReducer: state.recordsReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersRecords);