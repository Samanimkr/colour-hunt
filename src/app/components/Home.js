import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p className="rgbColour">{this.props.rgb}</p>
            </div>
        )
    }
}
