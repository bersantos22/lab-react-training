import React from 'react';

function Random(props){
    return(
        <section>            
                <div style={{border:"1px solid black", margin:"20px", width:"1200px",height:"50px" , padding:"5px"}}>
                <p>Random value between {props.min} and {props.max} ={Math.floor(Math.random()*(props.max-props.min)+props.min)}</p>
                </div>
        </section>
    )
};

export default Random;