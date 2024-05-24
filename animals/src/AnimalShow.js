
import { useState } from 'react'
import './AnimalShow.css'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

const svgMap = {
    bird:bird, cat:cat, cow:cow, dog:dog, gator:gator, horse:horse
}

function AnimalShow ({type}){
    
    const handleClick = () => {
        setClicks(click+1)
    }
    const [click,setClicks] = useState(0)

    return (
      <div className='animal-show' onClick={handleClick}>
        <img className='animal' alt='animal' src={svgMap[type]} />
        <img className='heart' src={heart} style={{width : 10 +10 * click}} />
      </div>
    )
  } 
  
  export default AnimalShow