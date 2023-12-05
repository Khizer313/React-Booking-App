import React from 'react'
import './Featured.css'
const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className="featuredItems">
            <img src="https://img.freepik.com/premium-photo/simple-beautiful-house-design-image_739463-172.jpg" alt="booking app image for dublin" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h1>123 properties</h1>
            </div>
        </div>
        <div className="featuredItems">
            <img src="https://img.freepik.com/premium-photo/3d-rendering-illustration-modern-house_956414-211.jpg" alt="booking app image for dublin" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h1>563 properties</h1>
            </div>
        </div>
        <div className="featuredItems">
            <img src="https://img.freepik.com/premium-photo/modern-luxury-home-architects-villa-exterior-design-picture-ai-generated-art_848903-2696.jpg" alt="booking app image for dublin" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h1>794 properties</h1>
            </div>
        </div>


      </div>
      {/* end of featured */}
    </>
  )
}

export default Featured
