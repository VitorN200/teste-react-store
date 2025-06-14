import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import ProductsContainer from "../components/ProductsContainer"
import { useState, useEffect } from "react";
import api from "../api";

function ProductList() {

  const [products, setProducts] = useState([]);

  async function loadProducts(query = "") {
    try {
      const response = await api.get('/products?q=' + encodeURIComponent(query));;
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  }

  useEffect(() => {
      loadProducts();
  }, []);

  return (
      <div className='main-container'>
        <Header title="Lista de Produtos" />
        <SearchBar loadProducts={loadProducts}/>
        <ProductsContainer products={products}/> 
      </div>
  )
}

export default ProductList
