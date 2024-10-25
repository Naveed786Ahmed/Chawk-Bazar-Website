import React from 'react'

const HomeCards = (item) => {

  const { title, items, collection, links, img } = item.item

  return (
    <div className="HomeCards">
      <div className="leftCont">
        <h2>{title}</h2>
        <h6>{items}</h6>
        <p>{collection}</p>
        <p>{links}</p>
      </div>
      <div className="rightCont">
        <img src={img} alt="" width={"90%"} height={"90%"}/>
      </div>
    </div>
  )
}

export default HomeCards