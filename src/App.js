import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/molecules/navbar/Navbar";
import Footer from "./components/molecules/footer/Footer";
import Home from "./components/views/home/Home";
import ViewDescription1 from "./components/views/viewDescription/ViewDescription1";
import ViewDescription2 from "./components/views/viewDescription/ViewDescription1";
import ViewDescription3 from "./components/views/viewDescription/ViewDescription1";
import ViewDescription4 from "./components/views/viewDescription/ViewDescription1";

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

