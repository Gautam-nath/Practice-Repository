import React, { Component } from "react";

class Student1 extends Component{
    render(){
        return(
            <>
            <h2>welcome to Student1 Component</h2>
            <h3>Reamaining Fee1:{this.props.fee1}</h3>
            </>
        )
    }
}
export default Student1;