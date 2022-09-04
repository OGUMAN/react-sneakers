import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './components/Home';
import Favorites from './components/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('jsons/sneakers.json').then(res => {
      setItems(res.data);
    })
}, []);

  const onAddToCard = (obj) => {
    setCartItems((prev) => [...cartItems, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const removeCartItem = (obj) => {
    setCartItems(cartItems.filter(arg => arg.title !== obj.title));
  }

  const onCardRemove = (obj) => {
    setCartItems(cartItems.filter(arg => arg.title !== obj.title));
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer removeCartItem={removeCartItem} items={cartItems} onClose={() => {setCartOpened(false)}} />}
      <Header onClickCart={() => {setCartOpened(true)}} />

      <Home 
        searchValue={searchValue}
        onChangeSearchInput={onChangeSearchInput}
        setSearchValue={setSearchValue}
        cartItems={cartItems}
        onAddToCard={onAddToCard}
        items={items}
        onCardRemove={onCardRemove}
        setCartItems={setCartItems}
      />
    </div>
  );
}

export default App;
