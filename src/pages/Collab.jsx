import React from 'react'
import Navbar from '../components/Layout/navbar'
import CollaborationHero from '../components/Collab/hero'
import Footer from '../components/Layout/footer'
import WhoWeCollaborate from '../components/Collab/WhoWeCollaborat'

function Collab() {
  return (
    <div >
        <Navbar/>
        <CollaborationHero/>
        <WhoWeCollaborate/>
        <Footer/>
    </div>
  )
}

export default Collab