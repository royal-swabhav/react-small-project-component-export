import React from "react";

export const Buttons = (props) =>{
    return(
        <button onClick={props.handleClick}>{props.text}</button>
    );
}

