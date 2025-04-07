import React, { Component } from "react";

class StateInClass extends Component {
    constructor(props) {
       // super(props)
       super();
        this.name="Mitali";

        this.state={
            nameInstate:"Ritali"
        }

    }
    changeName(){
          console.log(this.name);
          this.name="Mitali Nath"
          console.log(this.name);
          
    }
   changeStateName(){
    console.log(this.setState.nameInstate);
    this.setState({nameInstate:"Ritali Nath"})
    console.log(this.state.nameInstate);
    
   }
    render(){
        return(
            <>
            <h2>React without using state</h2>
            <h3>Name Value using Normal Variable:{this.name}</h3>
            <button onClick={this.changeName.bind(this)}>Change State Name</button>

           <h2>React using State</h2>
           <h3>Name Value using state:{this.state.nameInstate}</h3>
           <button onClick={this.changeStateName.bind(this)}>Change State Name</button>

            </>
        )
    }
}
export default StateInClass;