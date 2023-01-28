
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Welcome(){

    const [welcomMessage,setMessage] = useState("")
    const [nums,setNums] = useState([]); 


  
  const peopleapi = ()=>{
    Axios.get('https://azurewelcome-mani.azurewebsites.net/v1/people')
    .then((res)=> {
      console.log(res);
      setNums(res.data);
    }) 
  };

    const iterableList = nums.map(
        (i)=>{
          // return `<li style="color: blue; font-weight: bold">${i.typeId}</li>`
          return<li> {i}</li>;
        }
      );


    const firstapi = ()=>{
        Axios.get('https://azurewelcome-mani.azurewebsites.net/v1/message')
        .then((res)=> {
          console.log(res);
          setMessage(res.data);

        }) 
      };


    return (
        <div>
            <button name="subject" onClick={firstapi}>Welcome!</button>
            <h1 >{welcomMessage}</h1>
            <hr></hr>
            <button onClick={peopleapi}>Click here to see People list</button>
            <h1 >{iterableList}</h1>
        </div>
    )
}


export default Welcome;