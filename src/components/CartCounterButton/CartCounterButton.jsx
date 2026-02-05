import './CartCounterButton.css'

const CartCounterButton = ({onClick, children}) => (
  <button
    className="cart-counter__button"
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
)

export default CartCounterButton
