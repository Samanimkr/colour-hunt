import React from "react";

export class Box extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const boxStyle = {
            backgroundColor: this.props.colour,
            flex: 1,
            minWidth: '33.333%',
            height: '150px',
            boxShadow: 'inset 0 0 2px #000000',
            cursor: "pointer",
            textAlign: "center"
        };
        return (
            <div className="box" style={boxStyle} onClick={() => this.props.boxClicked(this.props.colour)}></div>
        )
    }
}
