import * as React from "react";
import logo from "../assets/gnu.png"
import "./Hello.scss";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
          <div>
            <h1 className="myStyle">Hello from {this.props.compiler} and {this.props.framework}!</h1>
            <img src={logo} alt="gnu.png"/>
          </div>
        )
    }
}