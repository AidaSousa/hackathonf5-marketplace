/* eslint-disable jsx-a11y/alt-text */
import CarouselItem from "./components/atoms/carouselItem";
import Carousel from "./components/molecules/carousel";
import slider1 from "./Img/Slider1.jpg"
import slider2 from "./Img/Slider2.jpg"
import slider3 from "./Img/Slider3.jpg"


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
