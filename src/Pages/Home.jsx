import React, { useContext } from 'react'
import "../App.css"
import Header from '../Components/Header'
import Sliders from '../Components/Slider'
import HomeCards from '../Components/HomeCards'
import CategorySlider from '../Components/CategorySlider'
import Cards from '../Components/Cards'
import { ProductContext } from '../context/ProductContext'
import Footer from '../Components/Footer'

const Home = () => {
    let TopCardsObj = [
        {
            title: "Get 25% OFF",
            items: "ON SELECTED ITEMS",
            collection: "BACKPACK COLLECTION",
            links: "Go To Collection ->",
            img: "https://png.pngtree.com/png-clipart/20240510/original/pngtree-cute-cartoon-girl-png-image_15063088.png"
        },
        {
            title: "Get 30% OFF",
            items: "ON KIDS COLLECTION",
            collection: "GRAB IT NOW",
            links: "Go To Collection ->",
            img: "https://r2.erweima.ai/stablediffusion/7f2e3f8ae5c24ae0a36325c758f6d75e_ComfyUI_09330_.png"
        },
    ]

    const products = useContext(ProductContext);    

    return (
        <>
            <Header />
            <Sliders />
            <div className="TopCards">
                {
                    TopCardsObj.map((item, index) => (
                        <HomeCards item={item} key={index} />
                    ))
                }
            </div>
            <div className="featuredCatCont">
                <h2>Featured Categories</h2>
                <CategorySlider />
            </div>
            <div className="flashSale">
                <h2>Flash Sale</h2>
                <div className="flashCards">
                    {
                        products.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home