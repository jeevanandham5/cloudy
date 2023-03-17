import './App.css'
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header'
import Contact from './components/Contact';
import Hosting from './components/Hosting';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="Hosting" element={<Hosting/>}/>
    <Route path="Login" element={<Login/>}/>
    <Route path="Signup" element={<Signup/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
