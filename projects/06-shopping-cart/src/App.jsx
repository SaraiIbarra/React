import {products as initialProducts} from './mocks/products.json'
import { Products } from "./components/Products.jsx"
import { useState } from 'react'
import { Header } from './components/Header.jsx'

function App() {
  const [products] = useState(initialProducts)
  //filtrar por categoria y precio
  const[filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  //filtrar los productos segun los filtros que se tienen
  const filterProducts = (products) => {
    return products.filter(product => {
      return(
        //el precio del producto sea mayor o igual al precio minimo que se tiene en los filtros, por defecto es cero
        product.price >= filters.minPrice &&
        (
          //el filtro categoria es all
          //cuando la categoria del producto sea igual al filtro, se van a mostrar esos productos
          filters.category === 'all' ||
          product.category === filters.category
      )
    )})
  }

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header/>
      <Products products={filteredProducts}/>
    </>    
  )
}

export default App
