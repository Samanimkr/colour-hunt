import React from "react";

export class Question extends React.Component {
    render() {
        return (
            <div>
                <p className="rgbColour">{this.props.rgb}</p>
            </div>
        )
    }
}
