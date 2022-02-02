import {useState} from 'react';

export function LikesButton(){
    const [counter, setCounter]= useState(0)
    const colorRandom = ['purple','blue','green','yellow','orange','red']
    function handleAcress(){
        setCounter(counter+1)

       

    }
 
    

    return (
        <div style={{padding:'20px'}}>
            <button style={{backgroundColor:colorRandom[Math.floor(Math.random()*6)], width: '150px', height: '40px', color:'white' }} onClick={handleAcress}>{counter} Likes</button> 

            </div>

    )
           
}
