import React from 'react'
import './style.scss'
import HeroBanner from './heroBanner/HeroBanner'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <div style={{height: '1000rem'}}></div>
    </div>
  )
}

export default Home