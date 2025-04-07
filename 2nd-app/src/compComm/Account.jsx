import React, { Component } from "react";
import Student from "./Student";
import Student1 from "./Student1";

class Account extends Component {
   constructor(props){
           super(props)
           this.remainingfee=50000;
   }
   render(){
    return(
        <>
        <h1>welcome to Account Componnent</h1>
        <Student fee={this.remainingfee}/>
        <Student1 fee1={this.remainingfee}/>
        </>
    )
   }

}
export default Account;