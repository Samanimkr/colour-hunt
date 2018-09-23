import React from "react";

export class DifficultySlider extends React.Component {
  render(){
    return (
      <div className="slidecontainer">
        <h3>Difficulty (Easy, Medium or Hard):</h3>
        <input type="range" min="1" max="3" className="slider"/>
      </div>
    )
  }
}
