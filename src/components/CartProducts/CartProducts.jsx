import CartProduct from '@/components/CartProduct'
import './CartProducts.css'
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '@/store/cart.slice';
import {useDebounce} from "@/hooks/useDebounce";

const CartProducts = () => {
  const [searchParams] = useSearchParams();
  const ratingSort = searchParams.get('ratingsort') || '';
  const search = searchParams.get('query') || '';

  const debouncedSearch = useDebounce(search, 1500);

  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.items);

  return (
    <main className="cart-products">
      {products.length === 0 ? (
        <span className="cart-products__empty">Cart is empty</span>
      ) : (
        <ul className="cart-products__content">
          {products
            .slice()
            .filter((product) => (product.title.toLowerCase().includes(debouncedSearch.toLowerCase())))
            .sort((a, b) => {
              if (ratingSort === 'Low rating first') return a.rating - b.rating
              if (ratingSort === 'High rating first') return b.rating - a.rating
              return b.title - a.title
            })
            .map((product) => (
              <li key={product.id} className="cart-products__item">
                <CartProduct
                  productData={product}
                  increase={() => dispatch(increment(product.id))}
                  decrease={() => dispatch(decrement(product.id))}
                />
              </li>
            ))}
        </ul>
      )}
    </main>
  )
}

export default CartProducts
