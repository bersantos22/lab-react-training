import React from 'react';

function BoxColor(props){

    function ColorToHex(color){
        const hexadecimal = color.toString(16);
        return hexadecimal.length === 1? "0" + hexadecimal : hexadecimal;
    }
    function ConvertRGBtoHex(red,green,blue){
        return "#" + ColorToHex(red) +ColorToHex(green) +ColorToHex(blue);
    }
    return(
        <section>
        <div style={{backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`, border:"1px solid black", margin:"20px", width:"1150px",padding:"30px", color:`${props.colorText}`, textAlign:"center" }}>
        <p>
            rgb({props.r},{props.g},{props.b}) <br></br>
        {ConvertRGBtoHex(props.r,props.g,props.b)}
        </p>
        </div>
        </section>
    )
};

export default BoxColor;