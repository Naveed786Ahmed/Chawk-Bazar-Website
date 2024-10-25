import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cards = (item) => {

  const { title, image, id } = item.item
  let navigate = useNavigate()

  function detailFetch(id) {
    navigate(`/ProdDetail/${id}`)
  }  

  return (
    <>
      <div className="flashCard" onClick={() => detailFetch(id)}>
        <div className="flashCardsImg">
          <img src={image} alt="" width={"100%"} height={"100%"} />
        </div>
        <div className="flashCardstitle">
          {title.slice(0, 15)}...
        </div>
      </div>
    </>
  )
}

export default Cards