import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import UserLogin from './Login/Login';
import UserSiginUp from './Login/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import SlicePayment from './Components/SlicePayment';
import PageNotFound from './Components/PageNotFound'; 
import CartPage from "./Components/cartPage";
function App() {
  return <div className="App">
       <div>
    <BrowserRouter>
    <Navbar/>
       <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} /> 
       <Route path="/products" element={<Products/>} />
       <Route path="/login" element={<UserLogin/>} />
       <Route path="/signup" element={<UserSiginUp/>} />
       <Route path="/slice-payment/:productId" element={<SlicePayment/>} />
       <Route path="/cart" element={<CartPage />} />
       {/* Route for handling unknown routes */}
       <Route path="*" element={<PageNotFound />} />
       </Routes>
           </BrowserRouter>
        </div>
        <Footer/>
    </div>;

}

export default App;
