import React from 'react';
import '../index.css';
import './button.css'



const Button = (props) =>{
    return(
        <button className={props.classAdd} onClick={props.add}>{props.buttonText}</button>
    )
}
export default Button;