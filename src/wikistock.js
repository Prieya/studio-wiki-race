import React, { Component } from 'react';
import WikiApi from './WikiApi.js';

export default class wikistock extends Component {
    constructor(props){
        super(props);
        this.state = {
            links:[]
        };
    }
    componentDidMount(){
        var self = this;
        
        WikiApi.getLinks(this.props.title).then(
            function(text){
                self.setState({
                    links:text
                });
            });
    }
  render() {

    var currentTitle = this.props.title;

    return (
      <div>
         
            <button>
             {this.state.links.map(n => this.props.setCurrentTitle(n)}> {n} <hr/> </li>) }
            <button/>
        
        </div>
    );
  }
}