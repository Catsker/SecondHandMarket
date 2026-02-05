import './CartCounter.css'
import CartCounterButton from "@/components/CartCounterButton";

const CartCounter = ({increase, decrease, value}) => {

  return (
    <div className="cart-counter">
      <CartCounterButton onClick={decrease}>-</CartCounterButton>
      <span className="cart-counter__number">{value}</span>
      <CartCounterButton onClick={increase}>+</CartCounterButton>
    </div>
  )
}

export default CartCounter
