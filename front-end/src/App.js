import './App.css';
import Header from './components/header/Header';
import ProductsPage from './pages/productspage/ProductsPage';
import { Routes, Route } from 'react-router-dom';
import DetailsPage from './pages/detailspage/DetailsPage';
import { BrowserRouter as Router } from 'react-router-dom';
import CartPage from './pages/cartpage/CartPage';
import SignInPage from './pages/signinpage/SignInPage';
import ShippingPage from './pages/shippingpage/ShippingPage';
import PaymentScreen from './pages/paymentscreen/PaymentScreen';
import PlaceOrderScreen from './pages/placeorderscreen/PlaceOrderScreen';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
