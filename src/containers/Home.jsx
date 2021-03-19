import React from 'react';

//  IMPORTAMOS LOS COMPONENTES
import Products from '../components/Products';

// IMPORTAMOS LA DATA; EN ESTE CASO UN ARCHVIVO JS
import initialSate from '../initialState';

const Home = () => {
  return (
    <Products products={initialSate.products}/>
  );
}

export default Home;