import React from "react";

export const Box = (props) => {
    const boxStyle = {
        backgroundColor: props.colour,
        flex: 1,
        minWidth: '33.333%',
        height: '150px',
        boxShadow: 'inset 0 0 2px #000000',
        cursor: "pointer",
        textAlign: "center"
    };
    return (
        <div className="box" style={boxStyle} onClick={() => props.boxClicked(props.colour)}></div>
    );
}
