import { useState, useEffect } from "react";
import Cart from '@/assets/icons/CartGray.svg'
import Heart from '@/assets/icons/WhiteHeart.svg'
import CartCounter from "@/components/CartCounter";
import { isInCart, addToCart, changeQty, removeFromCart } from '@/utils/cartStorage';
import './Product.css'

const Product = ({product}) => {
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const cartItem = isInCart(product.id);
    setIsProductInCart(cartItem);
    if (cartItem) {
      const storedItem = JSON.parse(localStorage.getItem('cart')).find(i => i.id === product.id);
      setQty(storedItem.qty);
    }
  }, [product.id]);

  const handleAddToCart = () => {
    addToCart(product);
    setIsProductInCart(true);
    setQty(1);
  };

  const handleIncrease = () => {
    const newQty = qty + 1;
    changeQty(product.id, newQty);
    setQty(newQty);
  };

  const handleDecrease = () => {
    const newQty = qty - 1;
    changeQty(product.id, newQty);
    setQty(newQty);
    if (newQty === 0) setIsProductInCart(false);
  };

  return (
    <div className="product">
      <div className="product__pic">
        <img className="product__img" src={product.thumbnail} alt={product.title}/>
      </div>
      <div className="product__info">
        <h4 className="product__name">{product.title}</h4>
        <div className="product__data">
          <data
            className="product__price"
            value={product.price}
          >
            {product.price} €
          </data>
          {isProductInCart ? (
            <CartCounter
              value={qty}
              increase={handleIncrease}
              decrease={handleDecrease}
            />
          ) : (
            <button
              className="product__button"
              type="button"
              onClick={handleAddToCart}
            >
              <img className="product__button-img" src={Cart} alt="Cart"/>
            </button>
          )}
        </div>
      </div>
      <button
        className="product__favourite"
        type="button"
      >
        <img src={Heart} alt="Add to favourites"/>
      </button>
    </div>
  )
}

export default Product
