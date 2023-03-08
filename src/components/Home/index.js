import React, { Component } from 'react';

import '../../styles/Home/index.css';

import HomeScreen from '../../assets/screens/bpn-home-screen.png';
import HeartFlexing from '../../assets/hearts/heart-flexing.png';

class Home extends Component {

    render() {

        return (
            <div className="homeContainer">
                <header className="homeHeaderContainer">
                    <div className="col homeHeaderCol">
                        <img className="screenshot" src={HomeScreen} alt="Home screen screnshot" />
                    </div>
                    <div className="col homeHeaderCol">
                        <h1 className="containerTitle">BPN</h1>
                        <p className="appName">Blood Pressure Numbers</p>
                        <p className="callToActionText">
                        Take control of your blood pressure monitoring with our app - the ultimate tool for hypertension and hypotension management.
                        </p>
                        <div className="downloadRow">
                            <div className="downloadButton">
                                <a target="_blank" href="" className="downloadAnchor">
                                    <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="" className="downloadImage" />
                                </a>
                            </div>
                            <div className="downloadButton">
                                <a target="_blank" href="" className="downloadAnchor">
                                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="" className="downloadImage" />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="healthyHeartContainer">
                    <div className="col healthyHeartCol">
                        <img className="heartFlexingImage" src={HeartFlexing} alt="Healthy Heart Flexing" />
                    </div>
                    <div className="col healthyHeartCol">
                        <h2 className="containerTitle">Healthy Heart</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;