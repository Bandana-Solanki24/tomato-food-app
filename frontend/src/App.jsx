import './App.css';
import Navbar from './components/navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/place-order/PlaceOrder';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/login-popup/LoginPopup';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar setShowLogin={setShowLogin} />
        <Home />
      </>
    },
    {
      path: "/cart",
      element:
        <>
          <Navbar setShowLogin={setShowLogin} />
          <Cart />
        </>

    },
    {
      path: "/order",
      element:
        <>
          <Navbar setShowLogin={setShowLogin} />
          <PlaceOrder />
        </>
    }
  ]);

  return (
    <>

      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
