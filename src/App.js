/* eslint-disable jsx-a11y/alt-text */
import CarouselItem from "./components/atoms/carousel-item/carouselItem";
import Carousel from "./components/molecules/carousel/carousel";
import slider1 from "./Imagenes/Slider1.jpg"
import slider2 from "./Imagenes/Slider2.jpg"
import slider3 from "./Imagenes/Slider3.jpg"


function App() {
  return (
    <div>
      <Carousel>
        <CarouselItem><img src={slider1} style={{width: "100%"}}/></CarouselItem>
        <CarouselItem><img src={slider2} style={{width: "100%"} }/></CarouselItem>
        <CarouselItem><img src={slider3} style={{width: "100%"} }/></CarouselItem>
      </Carousel>
    </div>
  );  
}

export default App;
