import React from 'react'
import Header from '../Components/Header'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'

const Product = () => {

  let allProducts = useContext(ProductContext)

  return (
    <>
      <Header />
      <div className="allProducts">
        <h1>All Products</h1>
        <div className="allProdCards">
          {
            allProducts.map((item) => (
              <Cards item={item} key={item.id} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Product