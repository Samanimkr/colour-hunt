import React from "react";

export class Box extends React.Component {
    constructor(props){
        super(props);
    }

    isCorrect(){
        if (this.props.colour == this.props.answerColour) {
            alert("You Win!");
        } else {
            alert("You're Khara");
        }
    }

    render() {
        const boxStyle = {
            backgroundColor: this.props.colour,
            flex: 1,
            minWidth: '33.333%',
            height: '150px',
            boxShadow: 'inset 0 0 2px #000000',
            cursor: "pointer"
        };
        return (
            <div className="box" style={boxStyle} onClick={this.isCorrect.bind(this)}></div>
        )
    }
}
