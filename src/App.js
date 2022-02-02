import IdCard from './Components/IdCard/IdCard'
import Greetings from './Components/Greetings/Greetings'
import Random from './Components/Random/Random';
import photo1 from './imagem/john.jpg'
import photo2 from './imagem/8.jpg'
import BoxColor from './Components/boxColor/BoxColor'
function App() {
  return (
    <>
    <h1 style={{padding:"10px"}}>IdCard </h1>
     <IdCard 
        picture= {photo1}
        alt='photo'
        firstName='John'
        lastName='Doe'
        gender='Male'
        height='1.78m'
        birth='Mon Jul 13 1992'
     />
     <IdCard 
        picture={photo2} alt='photo'
        firstName='Obrien'
        lastName='Delores'
        gender='Female'
        height='1.78m'
        birth='Mon May 10 1993'
     />
     <h1 style={{padding:"10px"}}>Greetings</h1>
      <Greetings
        lang='de'
        firstName='Ludwig'
        firstName1='François'
        lang=''
       /> 
       <Greetings 
          firstName='François'
          lang=''
       />
       <h1 style={{padding:"10px"}}>Random</h1>
      <Random />
      <h1 style={{padding:"10px"}}>Box Color</h1>
      <BoxColor
        colorText='white'
        r="255"
        g="0"
        b="0"
       />
       
       <BoxColor
        colorText='black'
        r="128"
        g="255"
        b="0"
     />
       <h1 style={{padding:"10px"}}>CreditCard</h1>
       <h1 style={{padding:"10px"}}>Rating</h1>
       <h1 style={{padding:"10px"}}>DriverCard</h1>
       <h1 style={{padding:"10px"}}>ClickablePicture</h1>
       <h1 style={{padding:"10px"}}>Carousel</h1>
       <h1 style={{padding:"10px"}}>NumbersTable</h1>
    </>
  );
}

export default App;
