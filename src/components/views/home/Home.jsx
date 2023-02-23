import React from 'react'
import Card1 from "../../../assets/img/piso1.avif";
import Card2 from "../../../assets/img/piso2.png";
import Card3 from "../../../assets/img/Carousel3.jpg";
import Card4 from "../../../assets/img/Carousel4.jpg";
import ActionCard from "../../molecules/actionCards/ActionCard";
import Carousel from '../../molecules/carousel/carousel';
import CarouselItem from '../../atoms/carouselItem/carouselItem';
import slider1 from "../../../assets/img/Slider1.jpg"
import slider2 from "../../../assets/img/Slider2.jpg"
import slider3 from "../../../assets/img/Slider3.jpg";
import "../home/home.css"
import { Link } from 'react-router-dom';

function Home() {
    
  return (
    
    <div className='containerHome'>
        <div className='containerCarousel'>
            <Carousel>
                <CarouselItem><img src={slider1} style={{width: "100%", height: "100%"} } alt="#"/></CarouselItem>
                <CarouselItem><img src={slider2} style={{width: "100%", height: "100%"} } alt="#"/></CarouselItem>
                <CarouselItem><img src={slider3} style={{width: "100%", height: "100%"} } alt="#"/></CarouselItem>
            </Carousel>
        </div>
        <div className='containerCards'>
            <Link to="/ViewDescription1">
                <ActionCard
                    img={Card1} 
                    price="200.000€" 
                    direc="Promoción en C. Londres" 
                    m="100m²" 
                    hab="1 dorm." 
                    bath="1 baño"
                /> 
            </Link>
            <Link to="/ViewDescription2">
                <ActionCard
                    img={Card2} 
                    price="200.000€" 
                    direc="Promoción en C. Londres" 
                    m="100m²" 
                    hab="1 dorm." 
                    bath="1 baño"
                />
            </Link>
            <Link to="/ViewDescription3">
                <ActionCard
                    img={Card3} 
                    price="200.000€" 
                    direc="Promoción en C. Londres" 
                    m="100m²" 
                    hab="1 dorm." 
                    bath="1 baño"
                /> 
            </Link>
            <Link to="/ViewDescription4">  
                <ActionCard
                    img={Card4} 
                    price="200.000€" 
                    direc="Promoción en C. Londres" 
                    m="100m²" 
                    hab="1 dorm." 
                    bath="1 baño"
                />
            </Link>
        </div>
    </div>

  )
}

export default Home;