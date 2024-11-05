import { useState } from 'react'
import logo from './assets/disc-32390_640.png'
import viteLogo from '/vite.svg'




function App() {
  const [orders, setOrders] = useState([]); 

  const addOrder = (product, quantity, total) => {
    const newOrder = { product, quantity, total };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  return (
    <div>
      <Header />
      <SelectProduct addOrder={addOrder} />
      <OrderInfo orders={orders} />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <h1>Welcome to product page!</h1>

    </div>
  );
}

function SelectProduct({ addOrder }) {
  const [selectedProd, setSelectedProd] = useState('Fender Stratocaster');
  const [quantity, setQuantity] = useState(1);

  const productPrice = {
    'Fender Stratocaster': 790,
    'Fender Telecaster': 750,
    'Fender Jazzmaster': 800,
    'Fender Mustang': 650,
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(0, prev + increment));
  };

  const handleAddOrder = () => {
    if (quantity > 0) {
      const total = quantity * productPrice[selectedProd];
      addOrder(selectedProd, quantity, total);
    } else {
      alert('Select quantity more than 0');
    }
  };

  return (
    <>
      <div>
        <h2>Select product</h2>
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

      <div>
        <p>Quantity:</p>
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>

      <button onClick={handleAddOrder}>Add Order</button>
    </>
  );
}

function OrderInfo({ orders }) {
  return (
    <div>
      <h1>Order Info</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="3">No added products</td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.total}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;