import ActionCard from "./components/molecules/ActionCard";
import home from "./assets/img/home..jpg"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter></BrowserRouter>      
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