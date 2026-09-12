import React from 'react'
import Hero from '../components/Home/hero'
import About from '../components/Home/about'
import LatestRelease from '../components/Home/LatestRelease'
import StreamingPartners from '../components/Home/StreamingPartners'
import FeaturedArtists from '../components/Home/FeaturedArtists'
import WhatWeCreate from '../components/Home/WhatWeCreate'
import Collab from '../components/Home/Collab'
import Footer from '../components/Layout/footer'
import Navbar from '../components/Layout/navbar'
import UpcomingRelease from '../components/Home/UpcomingRelease'


function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <WhatWeCreate />
            <LatestRelease />
            <StreamingPartners />
            <FeaturedArtists />
            <UpcomingRelease/>
            <Collab />
            <Footer/>
        </div>
    )
}

export default Home