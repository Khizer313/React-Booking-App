import React, { useState } from 'react'
import './Hotel.css'
import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../Components/mailList/MailList'
import Footer from '../../Components/footer/Footer'
const Hotel = () => {
  // this is used for 2 things , first for showing slider image as order and second for moving images in slider after right or left arrow is clicked
  const[slideNumber,setSlideNumber]=useState(0)
  //---- this is used for hiding slider div by default, and showing that div, when any image of map func is clicked, using handle open function and by changing its value to true in that handle open func
  const[open,setOpen]=useState(false)

  // --i is getting index of images in map function, using onclick
const handleOpen = (i)=>{
 setSlideNumber(i);
 setOpen(true)
}

const handleMove = (direction)=>{
  let newSlideNumber;
  if(direction==="l"){
    // if slideNumber is 0 then increase it to 5 then decrease by -1
    newSlideNumber = slideNumber === 0 ? 5 :slideNumber-1
  }else{
        // if slideNumber is at 5 then decrease it till 0 then decrease by +1
    newSlideNumber = slideNumber === 5 ? 0 :slideNumber+1

  }
  setSlideNumber(newSlideNumber)
}




const photos = [
  {
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AoDwvvVMID5Tt7Q3hQlkv0o5tfDjBj2twFCFRXr5dka2HZryrdlgz7Qh6IHyZqqQ5sg&usqp=CAU"
  },
  {
    src:"https://housing-images.n7net.in/01c16c28/90e081d8378c88f3535572dd31039e36/v0/medium/2_bhk_independent_house-for-sale-chengalpattu-Chennai-others.jpg"
  },
  {
    src:"https://im.proptiger.com/1/3139723/6/mm-nagar-elevation-125427771.jpeg?width=520&height=400"
  },
  {
    src:"https://im.proptiger.com/1/3139723/6/mm-nagar-elevation-125427771.jpeg?width=520&height=400"
  },
  {
    src:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/au/wp-content/uploads/2022/08/AustralianHousing-scaled.jpg"
  },
  {
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2Wota9JGOvd74Oon93CQ-jsR4NpsCrJzOE4_9Vv4dnG-CNXoVgum7Joo8OjcEVW1kJc&usqp=CAU"
  },
]



  return (
    <>
      <Navbar/>
      <Header type="list"/>

     <div className="hotelContainer">
      {/*-------- this is images slider, its value in use state is by default false but when any map function images is clicked then its value will be true , means it will start showing */}
    { open && <div className="slider">
       
    <FontAwesomeIcon icon={faCircleXmark} className='cancel' onClick={()=>setOpen(false)}/>
    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
    <div className="sliderWrapper">
      <img src={photos[slideNumber].src} alt="slider image" className="sliderImg" />
    </div>
    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>



      </div>}



       <div className="hotelWrapper">
        <button className="bookNow">Reserve or BookN Now!</button>
        <h1 className="hotelTitle">Grand Hotel</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot}/>
          <span>Elton, Old Town, 33-324, Lahore, Pakistan</span>
        </div>
        <span className="hotelDistance">
          Excellent location - 500m from center
        </span>
        <span className="hotelPriceHighlight">
          Book a stay over $114 at this property and get a free airport taxi
        </span>
        <div className="hotelImages">
          {photos.map((photo,i)=>(
            <div className="hotelImgWrapper">
              {/*------- onclick is used for  showing image slider when any one image is clicked and that clicked will show on big screen as an image slider ---------- */}
             <img onClick={()=>handleOpen(i)} src={photo.src} alt="selected photos" className="hotelImg" />

            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">Stay in the heart of krakow
          <h1 className="hotelTitle">Stay in the heart of krakow</h1>
          <p className="hotelDesc">
            Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit v v Lorem ipsum dolor sit v Lorem ipsum dolor sit Lorem ipsum dolor sit v v v Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit v Lorem ipsum dolor sit v v vv Lorem ipsum dolor sit Lorem ipsum dolor sit v vLorem ipsum dolor Lorem ipsum dolor sit vv Lorem ipsum dolor  Lorem ipsum dolor Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sitLorem ipsum dolor sit v Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit v v v Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
          </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for 9-night stays!</h1>
            <span>
            Lorem ipsum dolor sit Lorem ipsum dolor sit v Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
            </span>
            <h2> <b>$986</b> (9 nights)</h2>
            <button>Reserve or Book Now!</button>
          </div>
          </div>  

       </div>

     <MailList/>
     <Footer/>



     </div>
    



    </>
  )
}

export default Hotel
