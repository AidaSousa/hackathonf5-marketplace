import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";
import Home from "./components/views/Home";
import ViewCard1 from "./components/views/ViewCard1";
import ViewCard2 from "./components/views/ViewCard2";
import ViewCard3 from "./components/views/ViewCard3";
import ViewCard4 from "./components/views/ViewCard4";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ViewCard1' element={<ViewCard1/>}/>
          <Route path='/ViewCard2' element={<ViewCard2/>}/>
          <Route path='/ViewCard3' element={<ViewCard3/>}/>
          <Route path='/ViewCard4' element={<ViewCard4/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>      
    </div>
  );
}

export default App;

