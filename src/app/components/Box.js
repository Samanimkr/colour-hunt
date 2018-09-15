import React from "react";

export class Box extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const boxStyle = {
            backgroundColor: this.props.colour,
            flex: 1,
            minWidth: '25%',
            height: '100px',
            boxShadow: 'inset 0 0 2px #000000'
        };
        return (
            <div className="box" style={boxStyle}></div>
        )
    }
}
