import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryCaards = (item) => {

    const {name, image, id} = item.item
    let navigate = useNavigate()
    
    function DetailCatFunx(id){
        navigate(`/CategoryDetail/${id}`)
    }
    
  return (
    <>
        <div className="CatCards" onClick={() => DetailCatFunx(id)}>
            <div className="catCardsImg">
                <img src={image} alt="" width={"100%"} height={"100%"}/>
            </div>
            <div className="catCardsTitle">
                {name}
            </div>
        </div>
    </>
  )
}

export default CategoryCaards