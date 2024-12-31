
import './App.css';
//import ClassCompEg from "./Components/ClassComponents/ClassCompEg";
import Home from "./Components/FunctionalComponents/Home";
import About from './Components/FunctionalComponents/About';
import Gallery from './Components/FunctionalComponents/Gallery';
import Contact from './Components/FunctionalComponents/Contact'
import NavBar from './Components/FunctionalComponents/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Components/FunctionalComponents/Footer';

function  App()
{
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About college="Kongu Engineering" clg1="Kongunadu" clg2=" Naturopathy"/> } />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Gallery" element={<Gallery/>} />
      </Routes>
      </BrowserRouter>
   
      <div>
    <footer>
      <Footer/>
    </footer>
   </div>
    </div>

  );

}
export default App;

