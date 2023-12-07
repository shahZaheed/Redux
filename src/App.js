import logo from './logo.svg';
import './App.css';
import { Counter } from './features/Counter';
import Product from './product/Product';
import productSlice from './product/productSlice';
import { useSelector } from 'react-redux';

function App() {
  const initialState = {
    items: [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
    ],
  };
  const initialBasketItems = useSelector(state => state.product.items)
  const basketItems = useSelector(state => state.basket.items)
  console.log("basketItems" + initialBasketItems);
  console.log("basketItems new ", basketItems);
  return (
    <div className="App">
      <span>Counter</span>
      
      <Counter />
      {
        initialBasketItems?.map((item) => {
          return <Product key={item.id} id={item.id} name={item.name} price={item.price} />
        })
      }
      <h3>Backet Items</h3>
      {
        Object.keys(basketItems)?.map((item) => {
          return <Product key={basketItems[item].id} id={basketItems[item].id} name={basketItems[item].name} price={basketItems[item].price} />
        })
      }

      {/* {
        initialState.items.map((item) => {
         return  <Product id={item.id} name={item.name} price={item.price} />

        })
      } */}
    </div>
  );
}

export default App;
