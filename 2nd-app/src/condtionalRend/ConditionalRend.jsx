import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
const ConditionalRend=()=>{
    const [isLoggedIn,setisLoggedIn] =useState(false);
//conditional rendering using if else
if (isLoggedIn) {
    return <Login/>;
} else{
  return <SignUp/>;
}
}
export default ConditionalRend;