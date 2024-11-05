import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'




function App() {


  return (
    <div>
      <Header/>
      <SelectProduct/>
    </div>
  )
}

function Header(){
  return(
    <div className="header">
      <h1>Welcome to product page!</h1>
    </div>
  )
}

function SelectProduct(){

  return(
    <><div className="product">
      <h2>Select product</h2>
    </div>
    
    <div id="name">
      <p>Product:</p>

    </div>

    <div id="quantity">
      <p>Quauntity:</p>
    
    </div>
    
  </>
  )
}



export default App
