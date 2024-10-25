import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    let [cardData, setCardData] = useState([])

    const fetchFlashData = async() => {
        try {
            let fetchData = await axios.get("https://fakestoreapi.in/api/products")
            setCardData(fetchData?.data?.products);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchFlashData()
    }, []);

    return (
        <ProductContext.Provider value={cardData}>
            {children}
        </ProductContext.Provider>
    )
}