import React from "react";



function IdCard(props){
return(
    <section>
        <div style={{border:"1px solid black", margin:"20px", width:"1200px",height:"160px" ,display:'flex', flexDirection:'row'}}>
            <div style={{padding:'20px'}}>
                <img  src={props.picture} alt='photoPerson' />;
            </div>

            <div>
            
                <p><b>First Name:</b>{props.lastName} <br></br>
                <b>Last Name:</b> {props.firstName}<br></br>
                <b>Gender:</b> {props.gender}<br></br>
                <b>Height:</b> {props.height}<br></br>
                <b>Birth:</b> {props.birth}</p>
            </div>
        </div>
    </section>
    );
};
export default IdCard;
