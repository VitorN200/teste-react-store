import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import ProductContainer from "../components/ProductContainer"

function ProductList() {

  return (
      <div className='main-container'>
        <Header title="Lista de Produtos" />
        <SearchBar />
        <ProductContainer /> 
      </div>
  )
}

export default ProductList
