import React from 'react'
import Slider1 from "../assets/images/slider1.webp"
import Slider2 from "../assets/images/slider2.webp"
import Slider3 from "../assets/images/slider3.webp"

const Sliders = () => {
    return (
        <>
            <div className="SliderDiv">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Slider1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Slider2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Slider3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

        </>
    )
}

export default Sliders