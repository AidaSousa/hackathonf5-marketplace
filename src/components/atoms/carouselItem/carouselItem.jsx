import React from "react";
import "../carouselItem/carouselItem.css"

const CarouselItem = ({children, width}) => {

    return (
        <div className="carouselItem" style={{width: width}}>
            {children}
        </div>
    )
}

export default CarouselItem