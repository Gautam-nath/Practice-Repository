import React, { Component } from "react";

class Student extends Component {
   
    render(){
        return(
            <>
            <h1>welcome to Student Component</h1>   
            <h2>Rmaining Fee:{this.props.fee}</h2>         
            </>
        )

    }
   
}
export default Student;