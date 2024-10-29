import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export function useFilters() {
    const {filters, setFilters} = useContext(FiltersContext)
  
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
            )
        })
    }
  
    return {filters, filterProducts, setFilters}
  }