import React, { Component } from 'react';

import '../../styles/Home/index.css';
import '../../styles/Home/smallScreen.css';

import HomeScreen from '../../assets/screens/bpn-home-screen.png';
import HeartFlexing from '../../assets/hearts/heart-flexing.png';
import RowRecord from '../../assets/features/row-record.png';
import AddRecord from '../../assets/features/add-record.png'
import CardRecord from '../../assets/features/card-record.png';

import FeatureCard from '../Cards/FeatureCard';

class Home extends Component {

    
    render() {
        
        const featureCards = [
            {title: "Row Records", description: "View your records in easy to read rows along with the average of all your recorded blood pressures.", img: RowRecord},
            {title: "Add Records", description: "Add in your blood pressure recording to be saved to your account.", img: AddRecord},
            {title: "Card Records", description: "View your records in a card style where you can also update previously saved records.", img: CardRecord}
        ]
        const renderFeatureCards = () => {
            return featureCards.map((feature, i) => <FeatureCard key={`${i}-${feature.title}`} featureInfo={feature}/>)
        }
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
                        <p className="healthyHeartDescription">Overall, being heart health conscious can improve your quality of life, help you avoid chronic conditions, and lead to a longer and healthier life.</p>
                    </div>
                </div>
                <div className="featuresContainer">
                    <div className="featuresTitleRow">
                        <h2 className="containerTitle">Features</h2>
                    </div>
                    <div className="featureCardsContainer">
                        {renderFeatureCards()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;