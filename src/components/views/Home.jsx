import React from 'react'
import Card1 from "../../assets/img/Carousel1.jpg";
import Card2 from "../../assets/img/Carousel2.jpg";
import Card3 from "../../assets/img/Carousel3.jpg";
import Card4 from "../../assets/img/Carousel4.jpg";
import ActionCard from "../molecules/ActionCard";
import Carousel from '../molecules/carousel';
import CarouselItem from '../atoms/carouselItem';
import slider1 from "../../assets/img/Slider1.jpg"
import slider2 from "../../assets/img/Slider2.jpg"
import slider3 from "../../assets/img/Slider3.jpg";
import "../views/home.css"
import { Link } from 'react-router-dom';

function Home() {
    
  return (
    
    <div className='containerHome'>
        <div className='containerCarousel'>
            <Carousel>
                <CarouselItem><img src={slider1} style={{width: "100%"}} alt="#"/></CarouselItem>
                <CarouselItem><img src={slider2} style={{width: "100%"} } alt="#"/></CarouselItem>
                <CarouselItem><img src={slider3} style={{width: "100%"} } alt="#"/></CarouselItem>
            </Carousel>
        </div>
        <div className='containerCards'>
            <Link to="/ViewCard1">
                <ActionCard
                    img={Card1} 
                    price="200.000€" 
                    direc="Promoción en C. Londres" 
                    m="100m²" 
                    hab="1 dorm." 
                    bath="1 baño"
                /> 
            </Link>
            <Link to="/viewCard2">
                <ActionCard
                    img={Card2} 
                    price="200.000€" 
                    direc="Promoción en C. Londres" 
                    m="100m²" 
                    hab="1 dorm." 
                    bath="1 baño"
                />
            </Link>
            <Link to="/viewCard3">
                <ActionCard
                    img={Card3} 
                    price="200.000€" 
                    direc="Promoción en C. Londres" 
                    m="100m²" 
                    hab="1 dorm." 
                    bath="1 baño"
                /> 
            </Link>
            <Link to="/viewCard4">  
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