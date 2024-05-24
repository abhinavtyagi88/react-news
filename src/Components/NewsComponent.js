import React, { Component }  from 'react'
import NewsItem from './NewsItem'
// import proptypes from 'prop-types'; 
// var PropTypes = require('prop-types'); 


// import Spiner from './Spiner';

export default class NewsComponent extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      setProgress:"0"
    }
  }

  // const [text, setText] = useState(''); 

  
  async componentDidMount() {
    
    let url=`https://newsapi.org/v2/top-headlines?country=${`in`}&category=${this.props.category
  }&apiKey=0eb654cb92c74161afbc78b32e131981`;
    let data= await fetch(url);
    let passedData= await data.json();

    console.log(passedData);
    console.log("FETCHING>>>");
    this.setState({articles:passedData.articles});
    
    console.log("setPROGRESS");
    // this.props.setProgress(100);

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

