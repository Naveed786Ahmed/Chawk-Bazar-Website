import React, { useContext } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'

const DetailPage = () => {

  let { id } = useParams()
  let detailProducts = useContext(ProductContext)

  let SingleData = detailProducts.find((item) => (
    item.id == id
  ))


  return (
    <>
      <Header />
      {
        SingleData ?
          <>
            <div className="DetailCont">
              <div className="DetailContImg">
                <img src={SingleData.image} alt="" width={"70%"} height={"90%"} />
              </div>
              <div className="DetailContCont">
                <h1>
                  {SingleData.title.slice(0, 20)}...
                </h1>
                <p className='desPara'>
                  {SingleData.description.slice(0, 180)}...
                </p>
                <p>
                  Price: <span className='desPara'>{SingleData.price}</span>
                </p>
                <p>
                  Model: <span className='desPara'>{SingleData.model}</span>
                </p>
              </div>
            </div>
          </>
          :
          <p>Loading...</p>
      }

    </>
  )
}

export default DetailPage