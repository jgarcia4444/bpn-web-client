import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import {FiLoader} from 'react-icons/fi';

import '../../styles/UserRecords/index.css';

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
            <div className="graphContainer">
                {loadingRecords === true ?
                    <FiLoader className="loader" color="#f00" size={48} />
                :
                    records.length !== 0  ?
                        <LineChart width={800} height={300} data={records}>
                            <Line type="monotone" dataKey="systolic" stroke="#f00"/>
                            <Line type="monotone" dataKey="diastolic" stroke="#f66"/>
                            <XAxis />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    :
                        <p>No records have been recorded yet...</p>
                    
                }
            </div>

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