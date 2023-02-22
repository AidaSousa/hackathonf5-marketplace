/* eslint-disable jsx-a11y/alt-text */
import CarouselItem from "../atoms/carouselItem";
import Carousel from "../molecules/carousel";
import slider1 from "../Img/Slider1.jpg"
import slider2 from "../Img/Slider2.jpg"
import slider3 from "../Img/Slider3.jpg";


function View() {
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

export default View;