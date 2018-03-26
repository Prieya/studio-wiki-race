import React, { Component } from 'react';
import GameView from './GameView.js';
import WikiLink from './WikiLink.js';
import WikiStack from './WikiStack.js';

export default class WikiGameApp extends Component {
  render() {
    // Properties (data) provided by WikiGameHistory.
    var isComplete = this.props.isComplete;
    var titles = this.props.titles;
    var targetTitle = this.props.targetTitle;
    var currentTitle = this.props.currentTitle;

    // Properties (functions) provided by WikiGameHistory.
    var addTitle = this.props.addTitle;
    var setCurrentTitle = this.props.setCurrentTitle;

    return (
      <div>
      <WikiStack title = {titles} CurrentTitle = {setCurrentTitle} complete = {isComplete} targetTitle = {targetTitle}/>
      <GameView title = {currentTitle}/>
       <WikiLink title = {currentTitle} setCurrentTitle = {setCurrentTitle} addTitle = {addTitle}/>
      </div>
    );
  }
}
