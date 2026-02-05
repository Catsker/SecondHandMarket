import {useState, useEffect} from "react";
import Cart from '@/assets/icons/CartGray.svg'
import Heart from '@/assets/icons/WhiteHeart.svg'
import CartCounter from "@/components/CartCounter";
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, increment, decrement} from '@/store/cart.slice';
import './Product.css'

const Product = ({product}) => {
  const dispatch = useDispatch();

  const cartItem = useSelector(
    state => state.cart.items.find(i => i.id === product.id)
  );

  const add = () => dispatch(addToCart(product));
  const inc = () => dispatch(increment(product.id));
  const dec = () => dispatch(decrement(product.id));

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
          {cartItem ? (
            <CartCounter
              value={cartItem.quantity}
              increase={inc}
              decrease={dec}
            />
          ) : (
            <button
              className="product__button"
              type="button"
              onClick={add}
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
