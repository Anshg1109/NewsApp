import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "Concussion and suicide: A family's search for answers",
            "description": "Kelly Catlin was 23 when she took her own life. An Olympic cyclist, she suffered a bad crash in training. Her family believe it changed her.",
            "url": "http://www.bbc.co.uk/sport/cycling/59639369",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1198D/production/_122077027_catlin_getty.jpg",
            "publishedAt": "2021-12-16T00:22:25.581706Z",
            "content": "Catlin was a three-time world champion track cyclist and an Olympic silver medallist at Rio 2016\r\nIn January 2019, on a sunny day in the coastal mountains surrounding San Francisco, an Olympic medal-… [+10391 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jeff Zeleny, Chief National Affairs Correspondent",
            "title": "Biden picks Michelle Kwan to be ambassador to Belize and Caroline Kennedy to be ambassador to Australia",
            "description": "President Joe Biden on Wednesday announced his intention to nominate Michelle Kwan, a former Olympic figure skater and longtime Democratic activist, to serve as ambassador to Belize.",
            "url": "http://www.cnn.com/2021/12/15/politics/michelle-kwan-caroline-kennedy-ambassador/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211215160323-caroline-kennedy-michelle-kwan-split-super-tease.jpg",
            "publishedAt": "2021-12-15T21:57:03Z",
            "content": null
        },
        {
            "source": {
                "id": "the-hindu",
                "name": "The Hindu"
            },
            "author": "PTI",
            "title": "Tokyo Olympics | Deepika ninth in ranking round; Koreans top-two",
            "description": "The performances will determine the seedings for the elimination rounds.",
            "url": "https://www.thehindu.com/sport/tokyo-olympics-deepika-ninth-in-ranking-round-koreans-top-two/article35481902.ece",
            "urlToImage": "https://www.thehindu.com/sport/uvmmr0/article35481908.ece/ALTERNATES/LANDSCAPE_615/thnak1330128994jpg",
            "publishedAt": "2021-07-23T03:40:59Z",
            "content": "Star Indian archer Deepika Kumari finished ninth in the womens individual ranking round as the countrys Olympic campaign kickstarted at the Yumenoshima Park in Tokyo on Friday.\r\n The world No.1 finis… [+1117 chars]"
        },
        {
            "source": {
                "id": "the-hindu",
                "name": "The Hindu"
            },
            "author": "The Hindu",
            "title": "In search of gold: On Tokyo Olympics",
            "description": "The Olympic Games remain the greatest sporting event for fans and athletes alike",
            "url": "https://www.thehindu.com/opinion/editorial/in-search-of-gold-the-hindu-editorial-on-tokyo-olympics-2021/article35478354.ece",
            "urlToImage": "https://www.thehindu.com/static/theme/default/base/img/og-image.jpg",
            "publishedAt": "2021-07-22T18:32:00Z",
            "content": "A medal can lose its lustre but the athletes sporting immortality is set in stone, such is the enduring allure of triumphs at the Olympics. Even a participant without any titles, is referred to as an… [+2521 chars]"
        }
    ]

    constructor(){
        super();
        console.log("Hello I am a constructor from News component");
        this.state={
            articles : this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsDaily - Top Headlines</h2> 
                <div className="row">
                {this.state.articles.map((element)=>{
                    return  <div key={element.url} className="col-md-4">
                        <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>   
                })}  
                </div>
            </div>
        )
    }
}

export default News
