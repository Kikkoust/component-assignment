import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'




function App() {


  return (
    <div>
      <Header/>
      <SelectProduct/>
      <OrderInfo/>
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
  
  const [selectedProd, setSelectedProd] = useState('Fender Stratocaster');
  const [quantity, setQuantity] = useState(1);

  const productPrice = {
    'Fender Stratocaster': 790,
    'Fender Telecaster': 750,
    'Fender Jazzmaster': 800,
    'Fender Mustang': 650
  };


  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(0, prev + increment)); //Ei voi laittaa määrää negatiiviseksi.
  };

  return (
    <>
      <div className="product">
        <h2>Select product</h2>
      </div>
    
    <div id="name">
      <p>Product:</p>
      <select 
          value={selectedProd} 
          onChange={(e) => setSelectedProd(e.target.value)}>
          {Object.keys(productPrice).map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>

    </div>

    <div id="quantity">
    <p>Quantity:</p>
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
    </div>
    
    <div className="addorder">
          <button>Add Order</button>
    </div>

  </>
  )
}

function OrderInfo(){
  return(
    <div className="info">
      <h1>Order Info</h1>
      <table>
          <tr>
            <th id="colhead1">Product</th>
            <th id="colhead">Quanitity</th>
            <th id="colhead">Total</th>
          </tr>
          <tr>
            <td>testi</td>
            <td>testi</td>
            <td>testi</td>
          </tr>
          <tr>
            <td>testi</td>
            <td>testi</td>
            <td>testi</td>
          </tr>
          <tr>
            <td>testi</td>
            <td>testi</td>
            <td>testi</td>
          </tr>


      </table>
    </div>
  )
}



export default App
