import React, { useEffect, useState } from 'react'
import CategoryCaards from './CategoryCaards'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const CategorySlider = () => {

    let [cat, setCat] = useState([])

    const fetchCategory = async () => {
        try {
            let data = await axios.get("https://api.escuelajs.co/api/v1/categories")
            setCat(data?.data);
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        fetchCategory()
    }, []);


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                {
                    cat.map((item, index) => (
                        <CategoryCaards key={index} item={item} />
                    ))
                }
            </Slider>
        </>
    )
}

export default CategorySlider