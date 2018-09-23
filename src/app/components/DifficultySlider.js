import React from "react";

export const DifficultySlider = (props) => {
    return (
      <div className="slidecontainer">
        <h3>Difficulty (Easy, Medium or Hard):</h3>
        <input type="range" min="1" max="3" className="slider" onInput={(event) => props.onInput(event.target.value)}/>
      </div>
    )
}
