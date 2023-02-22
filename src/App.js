import ActionCard from "./components/molecules/ActionCard";
import home from "./assets/img/home..jpg"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "src/components/molecules/Navbar.jsx";
import Footer from "src/components/molecules/Footer.jsx";
import Home from "src/components/views/Home.jsx";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>      
    </div>
  );
}

export default App;

{/* <ActionCard
        img={home} 
        price="200.000€" 
        direc="Promoción en C. Londres" 
        m="100m" 
        hab="1 dorm." 
        bath="1 baño"
      /> */}