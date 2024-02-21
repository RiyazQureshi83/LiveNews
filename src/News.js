export default function News(props){
    console.log(props)

 
    return(

        <div className="news">

            <div className="news-img">
                <img src={props.article.urlToImage} alt="images"/>

            </div>
            <h1>{props.article.title}</h1>
            <p>{props.article.description?.substring(0,100).concat("...")}</p>
            <a href={props.article.url} target="_mian">Read More</a>
            <div className="source">
                <p>Auther: {props.article.author}</p>
                <p>{props.article.source.name}</p>
            </div>

        </div>
    )
}