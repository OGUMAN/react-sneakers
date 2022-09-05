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

  const [favoritesItems, setFavoriteItems] = React.useState([]);
  const [favoritesOpened, setFavoritesOpened] = React.useState(false);

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

  const onAddToFavorites = (obj) => {
    setFavoriteItems(
      (prev) => [...favoritesItems, obj]
    )
  }

  const onFavoritesRemove = (obj) => {
    setFavoriteItems(
      favoritesItems.filter(arg => arg.title !== obj.title)
    )
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer removeCartItem={removeCartItem} items={cartItems} onClose={() => {setCartOpened(false)}} />}
      <Header setFavoritesOpened={setFavoritesOpened} onClickCart={() => {setCartOpened(true)}} />

      {favoritesOpened ? 
      <Favorites 
        setFavoritesOpened={setFavoritesOpened}
        favoritesItems={favoritesItems}
        searchValue={searchValue}
        onAddToCard={onAddToCard}
        onCardRemove={onCardRemove}
        cartItems={cartItems}
        setCartItems={setCartItems}
        onAddToFavorites={onAddToFavorites}
        onFavoritesRemove={onFavoritesRemove}
        onClose={() => {setFavoritesOpened(false)}}
      /> :
      (<Home 
        searchValue={searchValue}
        onChangeSearchInput={onChangeSearchInput}
        setSearchValue={setSearchValue}
        cartItems={cartItems}
        onAddToCard={onAddToCard}
        items={items}
        onCardRemove={onCardRemove}
        setCartItems={setCartItems}
        setFavoriteItems={setFavoriteItems}
        favoritesItems={favoritesItems}
        onAddToFavorites={onAddToFavorites}
        onFavoritesRemove={onFavoritesRemove}
      />)}
    </div>
  );
}

export default App;
