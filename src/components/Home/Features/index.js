
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MdFolderOpen, MdPrint, MdDataUsage, MdSpeakerNotes } from 'react-icons/md';

import Feature from './Feature';

import './index.css';

class Features extends Component {

    state = {
        displayState: "SHOW_ALL",
        featureToShow: ""
    }

    displayFeatures = () => {
        const featureObject = [
            {
                title: "Monitor Blood Pressure",
                shortIntro: "Keep track of your blood pressure all in one convenient place.",
                icon: <MdFolderOpen size={48} />
            },
            {
                title: "Print Records",
                shortIntro: "Need a physical copy? No problem, print out your records.",
                icon: <MdPrint size={48} />
            },
            {
                title: "See Averages",
                shortIntro: "Get an overall snapshot of your average blood pressure filtered as you choose.",
                icon: <MdDataUsage size={48} />
            },
            {
                title: "Add Notes",
                shortIntro: "Write in notes, to add further detail to your blood pressure record",
                icon: <MdSpeakerNotes size={48} />
            }
        ]

        return (
            <Row>
                { Array(4).fill(0).map((_, i) => {
                    return ( 
                        <Col key={i} sm={6}>
                            <Feature handleIconClick={this.handleIconClick} featureDetails={featureObject[i]} />
                        </Col>
                        )
                })}
            </Row>
        )

    }

    handleIconClick = (title) => {
        var featureToShow = ""
        switch(title) {
            case "Monitor Blood Pressure":
                featureToShow = "BP";
                break;
            case "Print Records":
                featureToShow = "PRINT";
                break;
            case "See Averages":
                featureToShow = "AVERAGE";
                break;
            case "Add Notes":
                featureToShow = "NOTES";
                break;
            default:
                break;
        };
        if (featureToShow !== "") {
            this.setState({
                ...this.state,
                displayState: 'SHOW_FEATURE',
                featureToShow: featureToShow
            });
        }
    }

    displayFeature = () => {
        var featureObject;
        switch(this.state.featureToShow) {
            case "BP":
                featureObject = {
                    title: "Monitor Blood Pressure",
                    shortIntro: "Keep track of your blood pressure all in one convenient place.",
                    icon: <MdFolderOpen size={48} />,
                    description: "Monitor and track your blood pressure. This app helps you keep track of your blood pressure over time. It allows you the user to easily input your blood pressure readings. All previous records are easily found on the records screen."
                }
                break;
            case "PRINT":
                featureObject = {
                    title: "Print Records",
                    shortIntro: "Need a physical copy? No problem, print out your records.",
                    icon: <MdPrint size={48} />,
                    description: "Every now and then or maybe everytime a physical copy may be needed for doctors visits and personal reference. This app makes it easy to print out all of your records and you may also filter them based off 3 different filters."
                }
                break;
            case "AVERAGE":
                featureObject = {
                    title: "See Averages",
                    shortIntro: "Get an overall snapshot of your average blood pressure filtered as you choose.",
                    icon: <MdDataUsage size={48} />,
                    description: "Easily get a quick look at your average systolic and diastolic blood pressure. When on the records screen a filter can be applied (all, morning, evening). The averages displayed will be computed and changed based off the filter selected."
                };
                break;
            case "NOTES":
                featureObject = {
                    title: "Add Notes",
                    shortIntro: "Write in notes, to add further detail to your blood pressure record",
                    icon: <MdSpeakerNotes size={48} />,
                    description: "Finer Details can be inserted into the blood pressure record. For example a user could have felt dizzy which led them to taking their blood pressure. Notes like these can possibly add more insight into the blood pressure record."
                };
                break;
            default:
                featureObject = {
                    title: "Add Notes",
                    shortIntro: "Write in notes, to add further detail to your blood pressure record",
                    icon: <MdSpeakerNotes size={48} />,
                    description: "Finer Details can be inserted into the blood pressure record. For example a user could have felt dizzy which led them to taking their blood pressure. Notes like these can possibly add more insight into the blood pressure record."
                }
                break;
        }
        return <Feature showFullDescription={true} handleIconClick={() => this.handleIconClick(featureObject.title)} featureDetails={featureObject} />
    }

    handleShowAllClick = () => {
        this.setState({
            ...this.state,
            displayState: 'SHOW_ALL',
            featureToShow: ""
        })
    }

    render() {

        return (
            <Container className="features-container">
                <Row>
                    <h2 className="features-title">Features</h2>
                    { this.state.displayState === 'SHOW_FEATURE' &&
                        <div onClick={this.handleShowAllClick} className="show-all-btn-container">
                            Show All
                        </div>
                    }   
                </Row>                
                {this.state.displayState === "SHOW_ALL" && this.displayFeatures() }
                {this.state.displayState === "SHOW_FEATURE" && this.displayFeature()}
            </Container>
        )
    }
}

export default Features;