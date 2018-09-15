import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home";
import { Box } from "./components/Box";

class App extends React.Component {
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


    render(){
        var colours = this.generateColoursArray();
        var answerIndex = this.getRandomNum(9);
        var answerColour = this.generateColour();
        colours[answerIndex] = answerColour;

        return (
            <div>
                <Home rgb={answerColour} />
                <div className="boxWrapper">
                    {
                        colours.map(function(colour, index){
                            return <Box key={index} colour={colour} answerColour={answerColour} answerIndex={answerIndex}/>;
                        })
                    }
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById('app'));
