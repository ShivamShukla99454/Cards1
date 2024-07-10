import React from "react";

function Btn(){
    const Button = (click)=>{
   alert(`you have clicked ${click} Button!`)
    }
    return(
        <div>
        <button onClick={() => {Button('Button1')}}>Button1</button>
        <button onClick={() => {Button('Button2')}}>Button2</button>
        <button onClick={() => {Button('Button3')}}>Button3</button>
        </div>
        )
}
export default Btn