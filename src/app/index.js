import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home";
import { Box } from "./components/Box";

class App extends React.Component {
    getRandomNum(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    generateColours(){
        var genColours = [];
        var genR, genG, genB;
        for (var i = 0; i < 12; i++) {
            genR = this.getRandomNum(255);
            genG = this.getRandomNum(255);
            genB = this.getRandomNum(255);
            genColours[i] = `rgb(${genR}, ${genG}, ${genB})`;
        }
        return genColours;
    }

    render(){
        var colours = this.generateColours();
        return (
            <div>
                <Home/>
                <div className="boxWrapper">
                    {
                        colours.map(function(colour, index){
                            return <Box key={index} colour={colour}/>;
                        })
                    }
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById('app'));
