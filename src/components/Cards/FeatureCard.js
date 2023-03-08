import React from 'react'

import '../../styles/components/Cards/FeatureCard/index.css';
import '../../styles/components/Cards/FeatureCard/smallScreen.css';

const FeatureCard = ({featureInfo}) => {
    const {title, description, img} = featureInfo;
    return (
    <div className="featureCardContainer">
        <img src={img} alt="Feature Image" className="featureImage"/>
        <div className="featureCardInfoContainer">
            <h3 className="featureTitle">{title}</h3>
            <p className="featureDescription">{description}</p>
        </div>
    </div>
    )
}

export default FeatureCard;