import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CategoryDetail = () => {

    let [detailCat, setdetailCat] = useState([])
    let { id } = useParams()
    

    const fetchDetailCategory = async () => {
        try {
            let data = await axios.get("https://api.escuelajs.co/api/v1/categories")
            setdetailCat(data?.data);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetchDetailCategory()
    }, []);

    let singleDetail = detailCat?.find((item) => (
        item.id = id
    ))


    return (
        <>
            <Header />
            {singleDetail ?
                <>
                    <div className="detailCatDiv">
                        <div className="DetailCatCont">#{singleDetail.name}</div>
                        <div className="detailCatImg">
                            <img src={singleDetail.image} alt="" width={"60%"} height={"90%"} />
                        </div>
                    </div>
                </>
                :
                <p>Loading...</p>

            }
        </>
    )
}

export default CategoryDetail