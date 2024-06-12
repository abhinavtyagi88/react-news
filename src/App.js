import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar' 
import NewsComponent from './Components/NewsComponent';

import LoadingBar from 'react-top-loading-bar'

import {
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setProgress({progress:progress})
  }

  render() {
    return (
      <div>
      <Navbar/>

      <LoadingBar
        color='#f11946'
        progress={100}
        
       
      />
      <Routes>
          <Route setProgress = {this.setProgress}exact path="/" element={<NewsComponent  key="differe" title="Title" country="in" category="general"/>}></Route>

          <Route setProgress = {this.setProgress}exact path="/business" element={<NewsComponent key="different" title="Title" country="in" category="business"/>}></Route>
          <Route setProgress = {this.setProgress}exact path="/entertainment" element={<NewsComponent key="differen" title="Title" country="in" category="entertainment"/>}></Route>
          <Route setProgress = {this.setProgress}exact path="/health" element={<NewsComponent key="differ" title="Title" country="in" category="health"/>}></Route>
          <Route setProgress = {this.setProgress}exact path="/science" element={<NewsComponent key="diffe" title="Title" country="in" category="science"/>}></Route>/general
          <Route setProgress = {this.setProgress}exact path="/sports" element={<NewsComponent key="diff" title="Title" country="in" category="sports"/>}></Route>
          <Route setProgress = {this.setProgress}exact path="/technology" element={<NewsComponent key="dif" title="Title" country="in" category="technology"/>}></Route>
        
      </Routes>
      
      
      </div>
    )
  }
}

