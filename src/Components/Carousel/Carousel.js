import {useState} from "react";


export function Carousel(props){
const[i, setImgs] = useState(0);

function handleImagesLeft(){
    if(i >= 0 && i <= props.images.length -1){
        setImgs(i-1) 
    }  else {
        setImgs(props.images.length-1);
    } 
console.log(i)
}
function handleImagesRight(){
    if(i >= 0 && i <= props.images.length -1){
        setImgs(i+1) 
    }  else{
        setImgs(0)
    } 
    console.log(i)
}
    return (
            <div className = 'container'>
                <button onClick={handleImagesLeft}>Left</button>
                <img src={props.images[i]} alt='imgCarousel' />
                <button onClick={handleImagesRight}>Right</button>
            </div>
    )
}