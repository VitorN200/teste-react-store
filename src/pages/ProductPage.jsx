import Header from '../components/Header'
import RedirectArrow from '../components/RedirectArrow'
import ProductDetails from '../components/ProductDetails'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api from '../api'

function ProductPage() {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  async function loadProduct(id) {
    setLoading(true);
    try {
      const response = await api.get('/products/' + encodeURIComponent(id));
      setProduct(response.data);
    } catch (error) {
      console.error('Erro ao carregar produto:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {

    loadProduct(id);
  }, []); 

  return (
      <div className='main-container'>
        <Header title="Pagina de Produto" />
        <RedirectArrow />
        <ProductDetails product={product} loading={loading}/>
      </div>
  )
}

export default ProductPage;
   