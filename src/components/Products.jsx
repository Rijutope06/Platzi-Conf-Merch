import React, { useContext } from 'react'

// IMPORTAMOS COMPONENTES
import Product from './Product';
import AppContext from '../context/AppContext';

// IMPORTAMOS LOS ESTILOS
import '../styles/components/Products.css';

const Products = () => {

  const {state, addToCart} = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default Products
