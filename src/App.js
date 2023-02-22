import ActionCard from "./components/molecules/ActionCard";
import home from "./assets/img/home..jpg"

function App() {
  return (
    <>
      <div>Hola</div>
      <ActionCard
        img={home} 
        price="200.000€" 
        direc="Promoción en C. Londres" 
        m="100m" 
        hab="1 dorm." 
        bath="1 baño"
      />
    </>
  );
}

export default App;
