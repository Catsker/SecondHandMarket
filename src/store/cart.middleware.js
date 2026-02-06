export const cartLocalStorageMiddleware = store => next => action => {
  const result = next(action);

  if (action.type.startsWith('cart/')) {
    const cartState = store.getState().cart.items;
    localStorage.setItem('cart', JSON.stringify(cartState));
  }

  return result;
};
