import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import fetchRecords from '../../redux/actions/recordsActions/fetchRecords';

const UsersRecords = ({recordsReducer, fetchRecords, userId}) => {

    const {records, loadingRecords, recordsFetched} = recordsReducer;

    useEffect(() => {
        if (records.length === 0 && recordsFetched === false) {
            fetchRecords(userId)
        }
    },[records]);

    return (
        <div className="usersRecordsContainer">
            <h2 className="containerTitle">Records</h2>
            {records.length !== 0  ?
                <LineChart width={400} height={400} data={records}>
                    <Line type="monotone" dataKey="systolic" stroke="#f00"/>
                    <Line type="monotone" dataKey="diastolic" stroke="#f66"/>
                    <XAxis name="dateRecorded" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            :
                <p>No records have been recorded yet...</p>
            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        recordsReducer: state.recordsReducer,
        userId: state.user.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRecords: userId => dispatch(fetchRecords(userId)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersRecords);