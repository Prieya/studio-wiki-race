import React, { Component } from 'react';
import WikiApi from './WikiApi.js';

export default class GameView extends Component {
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
          <ul>
            {this.state.links.map(n => <li style={{listStyle: 'circle', color:'red' }}> {n} <hr/> </li>) }
          </ul>
        </div>
    );
  }
}