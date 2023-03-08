import React from 'react'

import '../../../styles/Health/Article/index.css';

const Article = ({articleInfo}) => {

    const {title, imgUrl, description, url} = articleInfo;

    return (
        <div className="articleContainer">
            <div className="articleImgCol">
                <img className="articleImage" src={imgUrl} alt="Article Feature Image"/>
            </div>
            <div className="articleContentCol">
                <div className="articleTitleRow">
                    <h4 className="articleTitle">{title}</h4>
                </div>
                <div className="articleDescriptionRow">
                    <p className="articleDescription">{description} <a className="urlAnchor" target="_blank" href={url}>See full Article</a></p>
                </div>
            </div>
        </div>
    )
}

export default Article;