import React, { Component } from 'react';
import WikiApi from './WikiApi.js';
import Helmet from 'react-helmet';

export default class WikiStack extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var currentTitle = this.props.title;
    
    var btn1 = "btn btn-danger";
    
  if(this.props.complete == true){
    btn1 = "btn btn-primary";
    <Helmet bodyAttributes = {{style: 'background-color: #7FFF00'}}/>
  }
    return (
      <div>
          { this.props.title.map( n => <button key={n} class={btn1} onClick={() => this.props.CurrentTitle(n) }> {n} </button>) }
          <button class="btn btn-warning"> {this.props.targetTitle } </button>
      </div>
    );
  }
}
