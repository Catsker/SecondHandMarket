import Header from "@/components/Header";
import './CartPage.css'
import CartProducts from "@/components/CartProducts";
import StockFilter from "@/components/StockFilter";

const CartPage = () => (
  <div>
    <Header/>
    <StockFilter />
    <CartProducts />
  </div>
)

export default CartPage
