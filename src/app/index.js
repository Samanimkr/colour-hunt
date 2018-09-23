import React from "react";
import { render } from "react-dom";

import { Question } from "./components/Question";
import { Box } from "./components/Box";
import { DifficultySlider } from "./components/DifficultySlider";

class App extends React.Component {
    constructor(){
      super();
      this.answerIndex = this.getRandomNum(9);
      this.answerColour = this.generateColour();
    }

    getRandomNum(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    generateColoursArray(){
        var genColours = [];
        var genR, genG, genB;
        for (var i = 0; i < 9; i++) {
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
      document.location.reload()
    }


    render(){
        var colours = this.generateColoursArray();
        colours[this.answerIndex] = this.answerColour;

        return (
            <div>
                <Question rgb={this.answerColour} />
                <DifficultySlider  />
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
