import React from "react";

function Greetings(props){

    function Language(lang){
        let newLang ='';
        if(lang === 'de'){
            newLang =`Hallo ${props.children}`;
    
        } else if(lang === 'en'){
        newLang= `Hello ${props.children}`;
    
        } else if(lang === "es"){
            newLang =`Hola ${props.children}`;
    
        } else {
            newLang =`Bonjour ${props.children}`;
        };
    return newLang
    }
return(
        <section>
            <div style={{ border:"1px solid black", margin:"20px", width:"1200px",height:"50px" , padding:"5px"}}>
                <p>{Language(props.lang)}</p>
            </div>
        </section>

    )

};



export default Greetings;
