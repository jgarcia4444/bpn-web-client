import React from 'react'

const Article = ({articleInfo}) => {

    const {title, imgUrl, description, url} = articleInfo;

    return (
        <div className="articleContainer">
            <div className="articleImgCol">
                <img src={imgUrl} alt="Article Feature Image"/>
            </div>
            <div className="articleContentCol">
                <div className="articleTitleRow">
                    <h4 className="articleTitle">{title}</h4>
                </div>
                <div className="articleDescriptionRow">
                    <p className="articleDescritipn">{description} <a target="_blank" href={url}>See full Article</a></p>
                </div>
            </div>
        </div>
    )
}

export default Article;