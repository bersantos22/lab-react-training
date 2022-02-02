import {useState} from 'react';
import diceImg0 from '../../assets/images/dice-empty.png';
import diceImg1 from '../../assets/images/dice1.png';
import diceImg2 from '../../assets/images/dice2.png';
import diceImg3 from '../../assets/images/dice3.png';
import diceImg4 from '../../assets/images/dice4.png';
import diceImg5 from '../../assets/images/dice5.png';
import diceImg6 from '../../assets/images/dice6.png';

export function Dice(){
    const [diceImg,setDice] = useState(diceImg0)

    const diceArray =[diceImg1, diceImg2, diceImg3, diceImg4, diceImg5, diceImg6];

   function Click(){setTimeout(function handleDice(){
    setDice(diceArray[(Math.floor(Math.random()*6))]);
   
 },1000);} 
    
    return(
        <div className='container'>
            <img style={{width: '10%'}} onClick={Click} src={diceImg} alt='imgDice' />
        </div>
    )
}