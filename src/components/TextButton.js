import React from "react";
import {Text} from "../redux/actions/Text";
import {useDispatch} from "react-redux";

function TextButton(){

    const dispatch = useDispatch();
    return(
        <button onClick={() => dispatch(Text("Luke is ugly"))}>Text Me</button>
    )
}

export default TextButton;