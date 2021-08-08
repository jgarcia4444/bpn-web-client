
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
                shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                icon: <MdFolderOpen size={48} />
            },
            {
                title: "Print Records",
                shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                icon: <MdPrint size={48} />
            },
            {
                title: "See Averages",
                shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                icon: <MdDataUsage size={48} />
            },
            {
                title: "Add Notes",
                shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        };
        this.setState({
            ...this.state,
            displayState: 'SHOW_FEATURE',
            featureToShow: featureToShow
        });
    }

    displayFeature = () => {
        var featureObject;
        switch(this.state.featureToShow) {
            case "BP":
                featureObject = {
                    title: "Monitor Blood Pressure",
                    shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    icon: <MdFolderOpen size={48} />,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
                break;
            case "PRINT":
                featureObject = {
                    title: "Print Records",
                    shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    icon: <MdPrint size={48} />,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
                break;
            case "AVERAGE":
                featureObject = {
                    title: "See Averages",
                    shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    icon: <MdDataUsage size={48} />,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                };
                break;
            case "NOTES":
                featureObject = {
                    title: "Add Notes",
                    shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    icon: <MdSpeakerNotes size={48} />,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                };
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