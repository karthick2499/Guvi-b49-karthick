import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Commondata} from './Common '
import Demo from './Demo'
import Cart from './Cart'
import Navbarapp from './Navbar'



function App() {
 
  return (
   <Commondata>
    <div className="row">
      <div className="col" id='nav'>
        <Navbarapp></Navbarapp>
      </div>
    </div>
      <div className="row">
        <div className="col-8">
          <Demo></Demo>
        </div>
        <div className="col-4">
          <Cart></Cart>
        </div>
      </div>
   </Commondata>
  )
}

export default App
