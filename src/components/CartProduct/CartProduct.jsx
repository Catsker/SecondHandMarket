import CartCounter from '@/components/CartCounter'
import './CartProduct.css'

const CartProduct = ({ productData, increase, decrease }) => (
  <div className="cart-product">
    <div className="cart-product__pic">
      <img
        className="cart-product__img"
        src={productData.thumbnail}
        alt={productData.title}
      />
    </div>
    <div className="cart-product__info">
      <h4 className="cart-product__name">{productData.title}</h4>
      <div className="cart-product__price">
        <span className="cart-product__light-text">Price: </span>
        <data className="cart-product__dark-text" value={productData.price}>{productData.price} €</data>
      </div>
      <div className="cart-product__return-policy">
        <span className="cart-product__light-text">Return Policy: </span>
        <span className="cart-product__dark-text">{productData.returnPolicy}</span>
      </div>
      <div className="cart-product__stock">
        <span className="cart-product__light-text">Stock: </span>
        <span className="cart-product__dark-text">{productData.stock}</span>
      </div>
      <div className="cart-product__delivery">
        <span className="cart-product__dark-text">Delivery</span>
        <span className="cart-product__light-text cart-product__light-text--thin">{productData.shippingInformation}</span>
      </div>
      <div className="cart-product__count">
        <span className="cart-product__dark-text">Quantity: </span>
        <CartCounter
          value={productData.qty}
          increase={increase}
          decrease={decrease}
        />
      </div>
    </div>
  </div>
)

export default CartProduct
