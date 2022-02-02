import {useState} from 'react';
import React from 'react';

export function ClickablePicture(props){

    const [change, setChange] = useState(props.img)
  function handleChange(){
        if(change === props.img){
           setChange(props.imgClicked);
        } else {
            setChange(props.img);
        }
       
    } ;
 
    return(
            <div className='container'>
            <img style={{width: '15%'}} onClick={handleChange} src={change} alt='pictureAlemao'/>
        </div>
    )
}
