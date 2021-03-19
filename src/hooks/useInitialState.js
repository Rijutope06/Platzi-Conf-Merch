import { useState } from 'react'

//  IMPORTAMOS LA DATA
import initialStatre from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialStatre);

  const addToCart = payload => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  }

  const removeFromCard = payload => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id != payload.id)
    })
  }

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const addNewOrder = payload => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }
  return {
    addToCart,
    removeFromCard,
    state,
    addToBuyer,
    addNewOrder,
  };
}

export default useInitialState
