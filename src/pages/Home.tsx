// @ts-ignore
import * as fcl from '@onflow/fcl'
import useCurrentUser from 'hooks/useCurrentUser'
import { LandingLogo } from 'images'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const user = useCurrentUser()

  useEffect(() => {
    if (user.loggedIn) {
      navigate('/dashboard')
    }
  }, [user])

  return (
    <div className="top-20 h-screen w-screen flex flex-col justify-center" style={{
      
      background: 'linear-gradient(324deg, rgba(22,255,153,0.3) 29%, rgba(253,187,45,0.2) 83%)'
    }}>
      <div className="w-screen flex justify-between items-center py-10 px-12 lg:py-0">
        <div className="px-28 flex flex-col">
            <h1 className="font-black text-7xl max-w-2xl text-custom-300 font-Satoshi24px">
                The Publishing Stack On Flow
            </h1>
            <h2 className="text-2xl mt-8 max-w-2xl text-gray-600">
                Empower your online voice with Tales's web3 publishing platform, with the power of Flow
            </h2>
            <div className='flex gap-8 mt-10'>
                <button className='bg-custom-300 text-xl text-white px-12 py-3 rounded-lg' onClick={() => fcl.authenticate()}>Get Started</button>
                <button className='bg-gray-200 text-xl text-gray-700 px-12 py-3 rounded-lg'>Learn More</button>
            </div>
        </div>
        <div className='flex flex-col m-auto'>
          <img src={LandingLogo} className="scale-75"/>
        </div>
      </div>
    </div>
  )
}

export default Home
