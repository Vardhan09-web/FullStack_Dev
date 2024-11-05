import React from 'react'
import HomeCards from "../components/HomeCards"
import HomeCarousel from "../components/HomeCarousel"
import SocialCard from "../components/SocialCard"

const Home = () => {
  return (
    <>
    <HomeCarousel/>
    <HomeCards />
    <SocialCard />
    </>
  )
}

export default Home