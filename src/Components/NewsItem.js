import React, { Component } from 'react'

export default class NewsItem extends Component {
  render(props) {
    
    const imgStyle = {
      color: 'dark',
      width:"325px",
      height:"183px"
      
    };
    const item = {
      // color: 'blue',
      width:"350px",
      padding: '20px'
      
    };

    let author={
      width:"80%"
    }
    // const removeLinkUnderline={
    //   text-decoration:none;
    // }



    
    return (
      <div className='container'  >

        <div className="item shadow rounded pr-2  " style={item}>
         <div className='text-bg-danger rounded-3 px-1' style={author} >{this.props.author}</div>
        <img   style={imgStyle}  src={this.props.imageUrl} alt="Loading..." ></img>

       <p>{this.props.title}</p>

       <p>{this.props.discription}<button className="border border-danger rounded " ><a href={this.props.rediectUrl} className='link-underline link-underline-opacity-0'   style={{textDecoration: 'none',color:"red"}}>more</a>
       </button>
       </p>

        </div>

      </div>
    )
  }
}
