import React, { Fragment } from 'react'
import './home.css'

const Home = () => {
  return (
      <div className='div-container'>
        <div className='home-texts'>
          <h1>Welcome to WorldPitch – Your Gateway to Football Insight</h1>
          <p className='p1'>Track clubs, explore players, and build your favorites</p>
          <p className='p2'>Dive deep into football like never before. From top-tier European<br/>
           leagues to emerging local talents, WorldPitch gives you instant access<br/>
           to club statistics, player profiles, and real-time updates. Whether you're<br/>
           a casual fan or a devoted follower, this is your pitch.</p>
           <p className='p3'>Compare club performances, follow your favorite athletes, and stay <br/>
            updated on transfers, injuries, and match outcomes — all in one place.</p>
        </div>
        <div className='bottom-extra'>
        <div className='cta-button'>
          <button className='cta-club'>Explore Clubs</button>
          <button className='cta-player'>Discover Players</button>
        </div>
        <div className='list-extra'>
        <ul className='ul'>
        <li>⚽ Over 1,000 player profiles updated regularly</li>
        <li>📈 Live stats, charts & performance insights</li>
        <li>⭐ Create your dream favorites list</li>
        <li>🔍 Advanced search for players & clubs</li>
        </ul>
       </div>
       </div>
      </div>
  )
}

export default Home