import IdCard from './Components/IdCard/IdCard'
import Greetings from './Components/Greetings/Greetings'
import Random from './Components/Random/Random';
import BoxColor from './Components/boxColor/BoxColor'
import img1 from './assets/images/maxence.png'
import img2 from './assets/images/maxence-glasses.png'
import {ClickablePicture} from './Components/ClickablePicture/ClickablePicture'
import {Rating} from './Components/Rating/Rating'
import {LikesButton} from './Components/LikeButton/LikeButton'
import {Dice} from './Components/Dice/Dice'
import {Carousel} from './Components/Carousel/Carousel'
import {NumbersTable} from './Components/NumbersTable/NumbersTable'

function App() {
  return (
    <>
    <h1 className = 'container'>IdCard </h1>
    <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth='newData???? Mon Jul 13 1992'
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth='newData??? Mon May 10 1993'
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
     <h1 className = 'container'>Greetings</h1>

         <Greetings lang="de">Ludwig</Greetings>

         <Greetings lang="fr">François</Greetings>

       <h1 className = 'container'>Random</h1>

         <Random min={1} max={6}/>
         <Random min={1} max={100}/>

      <h1 className = 'container'>Box Color</h1>
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
       <h1 className = 'container'>CreditCard</h1>

       <h1 className = 'container'>Rating</h1>
         <Rating>0</Rating>
         <Rating>1.49</Rating>
         <Rating>1.5</Rating>
         <Rating>3</Rating>
         <Rating>4</Rating>
         <Rating>5</Rating>
         
       <h1 className = 'container'>DriverCard</h1>

       <h1 className = 'container'>LikesButton</h1>

         <LikesButton />

       <h1 className = 'container'>ClickablePicture</h1>
       <ClickablePicture 
          img={img1}
          imgClicked={img2}
       />
        <h1 className = 'container'>Dice</h1>
         <Dice />
       <h1 className = 'container'>Carousel</h1>
       <Carousel
      images={[
         'https://randomuser.me/api/portraits/women/1.jpg',
         'https://randomuser.me/api/portraits/men/1.jpg',
         'https://randomuser.me/api/portraits/women/2.jpg',
         'https://randomuser.me/api/portraits/men/2.jpg'
      ]}
/>
       <h1 className = 'container'>NumbersTable</h1>
       <NumbersTable 
          limit={12}
       />
    </>
  );
}

export default App;
