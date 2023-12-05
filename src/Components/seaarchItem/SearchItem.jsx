import React from 'react'
import './SearchItem.css'
const SearchItem = () => {
  return (
    <>
      <div className="searchItem">
        <img src="https://im.proptiger.com/1/3139723/6/mm-nagar-elevation-125427771.jpeg?width=520&height=400" alt="searched image" className='siImg'/>
        <div className="siDesc">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">Studio Apartment with Air Conditioning</span>
          <span className="siFeatures">Entire studio ● 1 bathroom ● 21m 1 full bed</span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
           <div className="siRatings">
            <span>Excellent</span>
            <button>8.9</button>
           </div>
           <div className="siDetailsTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxiOp">Includes taxes and fees</span>
            <button className='siBtn'>See Availability</button>
           </div>
        </div>
      </div>
    </>
  )
}

export default SearchItem
