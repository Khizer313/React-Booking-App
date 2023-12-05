import React from 'react'
import './Home.css'
import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/header/Header'
import Featured from '../../Components/featured/Featured'
import PropertyList from '../../Components/propertyList/PropertyList'
import RecentProperties from '../../Components/recentProperties/RecentProperties'
import MailList from '../../Components/mailList/MailList'
import Footer from '../../Components/footer/Footer'

const Home = () => {
  return (
    <>
      
    <Navbar/>
    <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <RecentProperties/>
        <MailList/>
        <Footer/>

      </div>


    </>
  )
}

export default Home
