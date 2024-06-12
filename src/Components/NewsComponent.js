import React, { Component }  from 'react'
import NewsItem from './NewsItem'


export default class NewsComponent extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      setProgress:"0"
    }
  }


  
  async componentDidMount() {

    const apiUrl = process.env.REACT_APP_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    
    let url=`${apiUrl}${`in`}&category=${this.props.category
  }&apiKey=${apiKey}`;
    let data= await fetch(url);
    let passedData= await data.json();


    console.log("FETCHING>>>");
    this.setState({articles:passedData.articles});
    
  }

  render() {
    
    return (
      <div>
        <div className='container my-3 center'>
        <h1>Headlines!</h1>
        
        {/* {this.setState.loading && <Spiner/>} */}
        
        
        <div className="row">
          {this.state.articles.map((element)=>{
            return<div className='col-md-4' key={element.urlToImage} >
              
              <NewsItem  author={element.author?element.author:"NewsMonkey"}title={element.title} imageUrl={element.urlToImage?element.urlToImage:""} discription={element.description?element.description.slice(0,84)+"...":element.description} rediectUrl={element.url}/>

            </div>
          })}
        </div>

      </div>

      </div>
      
    )
  }
}

NewsComponent.propTypes = {
  category: 'general'
};

