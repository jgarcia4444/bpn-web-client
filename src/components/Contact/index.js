import React from 'react';
import {FiMail, FiUser, FiPhone} from 'react-icons/fi';

import '../../styles/Contact/index.css';
import '../../styles/Contact/smallScreen.css';

const Contact = () => {

    return (
        <div className="contactContainer">
            <h1 className="containerTitle">Contact</h1>
            <div className="contactDetailsContainer">
                <div className="row contactDetailsRow">
                    <div className="contactDetailsCol">
                        <div className="contactDetailsLabel">
                            Name <FiUser color={'#fff'} size={24}/>
                        </div>
                        <p className="contactDetailsValue">Jake Garcia</p>
                    </div>
                </div>
                <div className="row contactDetailsRow">
                    <div className="contactDetailsCol">
                        <div className="contactDetailsLabel">
                            Email <FiMail color={'#fff'} size={24} />
                        </div>
                        <p className="contactDetailsValue"><a href="mailto:bloodpressurenumbers2020@gmail.com" className="anchor">bloodpressurenumbers2020@gmail.com</a></p>
                    </div>
                    <div className="contactDetailsCol">
                        <div className="contactDetailsLabel">
                            Phone <FiPhone color={'#fff'} size={24}/>
                        </div>
                        <p className="contactDetailsValue"><a className="anchor" href="tel:760-892-4561">(760) 892-4561</a></p>
                    </div>
                </div>
            </div>
            <div className="supportContainer">
                <h1 className="containerTitle">Support</h1>
                <div className="supportDetailsContainer">
                    <div className="supportDetailsListContainer">
                        <h3 className="supportDetailsListTitle">Email</h3>
                        <ul className="supportDetailsList">
                            <li className="supportDetailsItem">
                                Checked at 8am and 5pm PST.
                            </li>
                            <li className="supportDetailsItem">
                                Morning Replies 12:00pm PST
                            </li>
                            <li className="supportDetailsItem">
                                Evening Replies 8:00pm PST
                            </li>
                        </ul>
                        <span className="disclaimer">* All emails will not be replied at the exact times stated above they are estimates.</span>
                    </div>
                    <div className="supportDetailsListContainer">
                        <h3 className="supportDetailsListTitle">Phone</h3>
                        <ul className="supportDetailsList">
                            <li className="supportDetailsItem">
                                Call for questions or support.
                            </li>
                            <li className="supportDetailsItem">
                                Text messages will be answered as early as possible
                            </li>
                            <li className="supportDetailsItem">
                                Leave a voicemail if your phone call is not answered.
                            </li>
                        </ul>
                        <span className="disclaimer">* Phone calls and texts will be responded as they come in.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;