import React from 'react';

import '../../styles/Health/index.css';

import Article from './Article';

const Health = () => {

    const articles = [
        {imgUrl: "https://newsinhealth.nih.gov/sites/nihNIH/files/styles/featured_media_breakpoint-large/public/2016/January/illustration-woman-blood-pressure-checked_0.jpg?itok=zdK0phAt", title: "Blood Pressure Matters", description: "About 1 in 3 adults in the U.S. has high blood pressure, but many don’t realize it. High blood pressure is sometimes called a “silent killer,” because it usually has no warning signs, yet it can lead to life-threatening conditions like heart attack or stroke.", url: "https://newsinhealth.nih.gov/2016/01/blood-pressure-matters"},
        {imgUrl: "https://newsinhealth.nih.gov/sites/nihNIH/files/styles/featured_media_breakpoint-large/public/2016/January/illustration-woman-blood-pressure-checked_0.jpg?itok=zdK0phAt", title: "Blood Pressure Matters", description: "About 1 in 3 adults in the U.S. has high blood pressure, but many don’t realize it. High blood pressure is sometimes called a “silent killer,” because it usually has no warning signs, yet it can lead to life-threatening conditions like heart attack or stroke.", url: "https://newsinhealth.nih.gov/2016/01/blood-pressure-matters"},
        {imgUrl: "https://newsinhealth.nih.gov/sites/nihNIH/files/styles/featured_media_breakpoint-large/public/2016/January/illustration-woman-blood-pressure-checked_0.jpg?itok=zdK0phAt", title: "Blood Pressure Matters", description: "About 1 in 3 adults in the U.S. has high blood pressure, but many don’t realize it. High blood pressure is sometimes called a “silent killer,” because it usually has no warning signs, yet it can lead to life-threatening conditions like heart attack or stroke.", url: "https://newsinhealth.nih.gov/2016/01/blood-pressure-matters"}
    ]

    const renderArticles = () => {
        return articles.map((article, i) =><Article articleInfo={article} key={`${i}-${article.title}`} />)
    }

        return (
            <div className="healthContainer">
                <h1 className="containerTitle">Heart Healthy Articles</h1>
                <div className="healthArticlesContainer">
                    {renderArticles()}
                </div>
                <div className="nextArticlesDateRow">
                    <small>Articles will be changed 03/15/2023 at 5:00PM PST.</small>
                </div>
            </div>
        )
}

export default Health;