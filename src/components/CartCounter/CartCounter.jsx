import './CartCounter.css'

const CartCounter = ({increase, decrease, value}) => {

  return (
    <div className="cart-counter">
      <button
        className="cart-counter__button"
        type="button"
        onClick={decrease}
      >
        -
      </button>
      <span className="cart-counter__number">{value}</span>
      <button
        className="cart-counter__button"
        type="button"
        onClick={increase}
      >
        +
      </button>
    </div>
  )
}

export default CartCounter
