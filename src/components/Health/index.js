import React from 'react';

import '../../styles/Health/index.css';
import AdsComponent from '../AdsComponent';

import Article from './Article';

const Health = () => {


    const articles = [
        {imgUrl: "https://newsinhealth.nih.gov/sites/nihNIH/files/styles/featured_media_breakpoint-large/public/2016/January/illustration-woman-blood-pressure-checked_0.jpg?itok=zdK0phAt", title: "Blood Pressure Matters", description: "About 1 in 3 adults in the U.S. has high blood pressure, but many don’t realize it. High blood pressure is sometimes called a “silent killer,” because it usually has no warning signs, yet it can lead to life-threatening conditions like heart attack or stroke.", url: "https://newsinhealth.nih.gov/2016/01/blood-pressure-matters"},
        {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugCkC4Hg9SxAnYAv9xHXJ8ckJPzuiKdqgjQ&usqp=CAU", title: "10 ways to control high blood pressure without medication", description: "If you have high blood pressure, you may wonder if medication is necessary to bring the numbers down. But lifestyle plays a vital role in treating high blood pressure. Controlling blood pressure with a healthy lifestyle might prevent, delay or reduce the need for medication.", url: "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/in-depth/high-blood-pressure/art-20046974#:~:text=Some%20examples%20of%20aerobic%20exercise,with%20periods%20of%20lighter%20activity."},
        {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQBvGwUzhNT0_9p18DL_JqsYVm7qUb8z27g&usqp=CAU", title: "High blood pressure dangers: Hypertension's effects on your body", description: "High blood pressure (hypertension) can quietly damage the body for years before symptoms develop. Uncontrolled high blood pressure can lead to disability, a poor quality of life, or even a deadly heart attack or stroke.", url: "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/in-depth/high-blood-pressure/art-20045868"}
    ]

    const renderArticles = () => {
        return articles.map((article, i) =><Article articleInfo={article} key={`${i}-${article.title}`} />)
    }

        return (
            <div className="healthContainer">
                <h1 className="containerTitle">Heart Healthy Articles</h1>
                <div className="articlesOutsideContainer">
                    <div className="healthArticlesContainer">
                        {renderArticles()}
                    </div>
                    <AdsComponent dataAdSlot={"2507699485"}/>
                </div>
                <div className="nextArticlesDateRow">
                    <small>Articles will be changed 03/22/2023 at 5:00PM PST.</small>
                </div>
            </div>
        )
}

export default Health;