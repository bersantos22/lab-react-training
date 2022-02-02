import React from 'react';

function Random(props){
    return(
        <section>
                <div style={{border:"1px solid black", margin:"20px", width:"1200px",height:"50px" , padding:"5px"}}>
                    <p>Random value between 1 and 6 = {Math.floor(Math.random()*(6-1)+1)}</p>
                </div>
                <div style={{border:"1px solid black", margin:"20px", width:"1200px",height:"50px" , padding:"5px"}}>
                <p>Random value between 1 and 100 = {Math.floor(Math.random()*(100-1)+1)}</p>
                </div>
        </section>
    )
};

export default Random;