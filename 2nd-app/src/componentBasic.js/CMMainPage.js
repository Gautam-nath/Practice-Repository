import React from "react";
import CMHeader from "./CMHeader";
import HtmlComp from "./HtmlComp";
import JSComp from "./JSComp";
import ReactComp from "./ReactComp";
const CMMainPage = () =>{
    return(
        <div>
           <CMHeader/>
           <HtmlComp/>
           <JSComp/>
           <ReactComp/>
        </div>
    )
}
export default CMMainPage;