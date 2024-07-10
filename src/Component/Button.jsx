import React from "react";
function New(){
const name={
    firstname:'Shivam',
    lastname:'Shukla'
 }
 const func=()=>{
    return(
        <>
        <p>{name.firstname}</p>
        <p>{name.lastname}</p>
        </>
    )
 }
 return(
    <>
    {func()}
    </>
 )
 }
 export default New
