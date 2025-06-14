import Header from '../components/Header'
import CartContainer from '../components/CartContainer'
import RedirectArrow from '../components/RedirectArrow'

function ShoppingCart() {

  return (
      <div className='main-container'>
        <Header title="Carrinho de compras" />
        <RedirectArrow />
        <CartContainer />
      </div>
  )
}

export default ShoppingCart;
