import React from "react";
import {Toggle} from "../redux/actions/Toggle";
import {useDispatch} from "react-redux";

function ToggleButton(){

    const [color, setColor]=React.useState("red")

    const clicker = ()=>{
        if (color==="red"){
            setColor("green")
        }else{
            setColor("red")
        }

        dispatch(Toggle())
    }

    const dispatch = useDispatch();
    return(
        <button style={{color:color}} onClick={clicker}>Toggle Me</button>
    )
}

export default ToggleButton;