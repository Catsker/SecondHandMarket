import {useState} from "react";
import Cart from '@/assets/icons/CartGray.svg'
import Heart from '@/assets/icons/WhiteHeart.svg'
import './Product.css'

const Product = ({product}) => {
  const [isProductInCart, setIsProductInCart] = useState(false)

  return (
    <div className="product">
      <div className="product__pic">
        <img className="product__img" src={product.thumbnail} alt={product.title}/>
      </div>
      <div className="product__info">
        <h4 className="product__name">{product.title}</h4>
        <div className="product__data">
          <data className="product__price" value={product.price}>{product.price} €</data>
          <button
            className={isProductInCart ? "product__button--added" : "product__button"}
            type="button"
            onClick={() => setIsProductInCart(prevState => !prevState)}
          >
            {isProductInCart ? 'Added' : (
              <img className="product__button-img" src={Cart} alt="Cart"/>
            )}
          </button>
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
