import React from "react";
import styles from './Greetings.module.css';

function Greetings(props){

    function Language(lang){
        let newLang ='';
        if(lang === 'de'){
            newLang =`Hallo ${props.firstName}`;
    
        } else if(lang === 'en'){
        newLang= `Hello ${props.firstName}`;
    
        } else if(lang === "es"){
            newLang =`Hola ${props.firstName}`;
    
        } else {
            newLang =`Bonjour ${props.firstName}`;
        };
    return newLang
    }
return(
        <section className={styles.section2}>
            <div style={{ border:"1px solid black", margin:"20px", width:"1200px",height:"50px" , padding:"5px"}}>
                <p>{Language(props.lang)}</p>
            </div>
        </section>

    )

};



export default Greetings;
