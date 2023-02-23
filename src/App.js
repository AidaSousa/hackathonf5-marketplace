import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";
import Home from "./components/views/Home";
import ViewDescription1 from "./components/views/ViewDescription1";
import ViewDescription2 from "./components/views/ViewDescription2";
import ViewDescription3 from "./components/views/ViewDescription3";
import ViewDescription4 from "./components/views/ViewDescription4";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ViewDescription1' element={<ViewDescription1/>}/>
          <Route path='/ViewDescription2' element={<ViewDescription2/>}/>
          <Route path='/ViewDescription3' element={<ViewDescription3/>}/>
          <Route path='/ViewDescription4' element={<ViewDescription4/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>      
    </div>
  );
}

export default App;

