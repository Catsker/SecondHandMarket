import { useEffect, useState } from 'react'
import CartProduct from '@/components/CartProduct'
import {Link} from 'react-router-dom'
import './CartProducts.css'

const CartProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      setProducts(JSON.parse(cart))
    }
  }, [])

  const updateCart = (updatedProducts) => {
    setProducts(updatedProducts)
    localStorage.setItem('cart', JSON.stringify(updatedProducts))
  }

  const increaseQty = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.qty < product.stock
        ? { ...product, qty: product.qty + 1 }
        : product
    )

    updateCart(updatedProducts)
  }

  const decreaseQty = (id) => {
    const updatedProducts = products
      .map((product) =>
        product.id === id
          ? { ...product, qty: product.qty - 1 }
          : product
      )
      .filter((product) => product.qty > 0) // удаляем если qty = 0

    updateCart(updatedProducts)
  }

  return (
    <main className="cart-products">
      {products.length === 0 ? (
        <span className="cart-products__empty">Cart is empty <Link to='/catalog'/>Go to catalog</span>

      ) : (
        <ul className="cart-products__content">
          {products.map((product) => (
            <li key={product.id} className="cart-products__item">
              <CartProduct
                productData={product}
                increase={() => increaseQty(product.id)}
                decrease={() => decreaseQty(product.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default CartProducts
