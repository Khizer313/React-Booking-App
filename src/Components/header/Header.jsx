import React,{useState} from 'react'
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Calendar, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import './Header.css'
import { useNavigate } from 'react-router-dom';
const Header = ({type}) => {
    // this is for hiding and opening Calendar
    const [openDate,setOpenDate] = useState(false)

    // for getting input value on change
    const [destination,setDestination] = useState("")


    //----- this is installed , imported and copied from npm react-date-range package
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
          // this is for hiding and opening adult,children,room section
      const [openOptions,setOpenOptions] = useState(false)
      // ------- function for showing increasing and decreasing value in adult,children,room section -----
      const [options,setOptions] = useState(
        {
        adult:1,
        children:0,
        room: 1
    }
      )

      
      
      // ------- function for increasing and decreasing value in adult,children,room section -----
      const handleOption = (name,operation)=>{
          setOptions(prev=>{
              return{
                  ...prev,
                  [name]: operation === "i" ? options[name] +1 : options[name] - 1,
                }
            })
        }
        // use useNavigate hook to move user to any page 
        const navigate = useNavigate();
        // after clicking search btn , this function will be fired, and take user to another page using useNavigate() hook with carrying our 3 major values destination value, calender value and adult, children, room value
        const handleSearch = ()=>{
        navigate("./hotels", {state: {destination, date, options}})
        }


      return (
    <>
      <div className="header">
        <div className={type === "list"?"headerContainer listMode":"headerContainer"}>
            {/* -------  this is top header list of 5 items ------ */}
         <div className="headerList">
            <div className="headerListItems active">
           <FontAwesomeIcon icon={faBed} />
           <span>Stays</span>
            </div>
            <div className="headerListItems">
           <FontAwesomeIcon icon={faPlane} />
           <span>Flights</span>
            </div>
            <div className="headerListItems">
           <FontAwesomeIcon icon={faCar} />
           <span>Car's For Rentals</span>
            </div>
            <div className="headerListItems">
           <FontAwesomeIcon icon={faBed} />
           <span>Airport Taxi's</span>
            </div>
            <div className="headerListItems">
           <FontAwesomeIcon icon={faTaxi} />
           <span>Airport Taxi's</span>
            </div>
         </div>
         {/*------ end of header list ---- */}
         {/* -------  here is title ,button and paragraph ------ */}
         { type !== "list" &&
            <>
         <h1 className="headerTitle">
            A lifetime of discounts? It's Genius
         </h1>
         <p className="headerDesc">
            Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
         </p>
         <button className="headerBtn">
            Sign In / Register
         </button>

         {/* -------  here is starting of our long 100%-width search bar with input,calender and (adult,children and room)section  ------ */}
         <div className="headerSearch">
            {/*------ input section -------*/}
            <div className="headerSearchItems">
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input type="text" placeholder='Where are you going?' className='headerSearchInput'
                 onChange={e=>setDestination(e.target.value)}
                />
            </div>
             {/*------ calender section (range calender using npm i react-date-range and npm i date-fns{we import both of them }) -------*/}
            <div className="headerSearchItems">
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <span onClick={()=> setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
                {openDate &&<DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                />}
            </div>
            <div className="headerSearchItems">
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room}room `} </span>
               {openOptions && <div className="options">
                    <div className="optionItems">
                        <span className="optionText">
                            Adult </span>
                            <div className="optionCounter">
                            <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                            <span className='optionCounterNumber'>{options.adult}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                            </div>
                    </div>
                    <div className="optionItems">
                        <span className="optionText">
                            Children </span>
                            <div className="optionCounter">
                            <button
                            disabled={options.children <= 1}
                            className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
                            <span className='optionCounterNumber'>{options.children}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                           </div>                       
                    </div>
                    <div className="optionItems">
                        <span className="optionText">
                            Room </span>
                            <div className="optionCounter">
                           <button 
                           disabled={options.room <= 1}
                           className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                            <span className='optionCounterNumber'>{options.room}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                           </div>                        
                    </div>
                </div>
                 }
                {/*-------- end of option ------*/}
            </div>
            <div className="headerSearchItems">
                <button className="headerBtn" onClick={handleSearch} >Search</button>
            </div>
         </div>
         {/* end of adult,children and room */}
         </>
         }
        </div>
      </div>



    </>
  )
}

export default Header
