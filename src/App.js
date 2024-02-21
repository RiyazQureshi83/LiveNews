import { useEffect } from 'react';
import { useState } from 'react';

import './App.css';
import News from './News';  

function App() {

  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState("apple");

  useEffect(()=>{

    fetch("https://newsapi.org/v2/everything?q=${category}&from=2024-02-20&apiKey=6065395363274594973009dbb8cfd9a9")
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[category])
  return (
    <div className="App">
     <header className='header'> 

     <h1>Live News</h1>
     
     <input type='text' onChange={(event)=>{
      setCategory(event.target.value);
      }} placeholder='search news'></input>
     </header>

      <section className='news-articles'>


        {
          articles.map((article)=>{
            return(
              <News article = {article}/>
            )
          })
        }


  
     
      </section>
    </div>
  );
}

export default App;
