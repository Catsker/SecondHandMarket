const CART_KEY = 'cart';

export const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
};

export const setCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const isInCart = (id) => {
  return getCart().some(item => item.id === id);
};

export const addToCart = (product) => {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    const newCart = cart.map(item =>
      item.id === product.id
        ? { ...item, qty: item.qty + 1 }
        : item
    );
    setCart(newCart);
    return newCart;
  } else {
    const newCart = [...cart, { ...product, qty: 1 }];
    setCart(newCart);
    return newCart;
  }
};

export const removeFromCart = (id) => {
  const cart = getCart();
  const newCart = cart.filter(item => item.id !== id);
  setCart(newCart);
  return newCart;
};

export const changeQty = (id, qty) => {
  const cart = getCart();
  const newCart = cart
    .map(item => item.id === id ? { ...item, qty } : item)
    .filter(item => item.qty > 0);
  setCart(newCart);
  return newCart;
};
