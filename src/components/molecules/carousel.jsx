import React, { useState } from "react";
import "./carousel.css"

const Carousel = ({ children }) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex)
    }

    return (
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" })
                })}
            </div>
            <div className="indicators">
                {React.Children.map(children, (child, index) => {
                    return (
                        <button className={`${index === activeIndex ? "active" : ""}`}  onClick={() => {
                            updateIndex(index);
                        }}></button>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel