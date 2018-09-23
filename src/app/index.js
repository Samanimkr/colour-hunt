import React from "react";
import { render } from "react-dom";

import { Question } from "./components/Question";
import { Box } from "./components/Box";
import { DifficultySlider } from "./components/DifficultySlider";

class App extends React.Component {
    constructor(){
      super();
      this.state = {
        numOfBoxes: 9
      }
    }

    getRandomNum(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    generateColoursArray(){
        var genColours = [];
        var genR, genG, genB;
        var numOfBoxes = this.state.numOfBoxes;
        for (var i = 0; i < numOfBoxes; i++) {
            genColours[i] = this.generateColour();
        }
        return genColours;
    }

    generateColour() {
        var genR = this.getRandomNum(255);
        var genG = this.getRandomNum(255);
        var genB = this.getRandomNum(255);
        return `RGB(${genR}, ${genG}, ${genB})`;
    }

    onBoxClick(boxColour){
      if (boxColour == this.answerColour) {
          alert("You Win!");
      } else {
          alert("You're Wrong. The answer was box number " + (this.answerIndex+1)+ ".");
      }
      this.forceUpdate();
    }

    changeDifficulty(difficulty){
      if (difficulty==1) {
        this.setState({numOfBoxes: 3});
      } else if (difficulty==2) {
        this.setState({numOfBoxes: 6});
      } else if (difficulty==3){
        this.setState({numOfBoxes: 9});
      }
    }

    render(){
        var colours = this.generateColoursArray();
        this.answerIndex = this.getRandomNum(this.state.numOfBoxes);
        this.answerColour = this.generateColour();
        colours[this.answerIndex] = this.answerColour;

        return (
            <div>
                <Question rgb={this.answerColour} />
                <DifficultySlider onInput={this.changeDifficulty.bind(this)}/>
                <div className="boxWrapper">
                    {
                        colours.map((colour, index) => {
                            return <Box key={index} colour={colour} boxClicked={this.onBoxClick.bind(this)} />;
                        })
                    }
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById('app'));
