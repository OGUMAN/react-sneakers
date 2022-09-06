import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Orders from './components/Orders';

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  const [favoritesItems, setFavoriteItems] = React.useState([]);
  const [favoritesOpened, setFavoritesOpened] = React.useState(false);

  const [boughtItems, setBoughtItems] = React.useState([]);
  const [ordersItems, setOrdersItems] = React.useState([]);
  const [ordersOpened, setOrdersOpened] = React.useState(false);

  const [price, setPrice] = React.useState(0);

  React.useEffect(() => {
    axios.get('jsons/sneakers.json').then(res => {
      setItems(res.data);
    })
}, []);

  // React.useEffect(() => {
  //   setPrice(0);
  //   cartItems.map((obj) => {
  //     return setPrice(price + 1);
  //   })
  // }, [cartItems]);

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

  const concatBoughtItems = () => {
    setBoughtItems(cartItems);
    setOrdersItems(boughtItems.concat(ordersItems));
    console.log(ordersItems)
  }

  const priceAdd = (itemPrice) => {
    setPrice(price + itemPrice)
  }

  const priceReduce = (itemPrice) => {
    setPrice(price - itemPrice)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && 
      <Drawer 
        removeCartItem={removeCartItem} 
        cartItems={cartItems} 
        onClose={() => {setCartOpened(false)}}
        priceReduce={priceReduce}
        price={price}
        setBoughtItems={setBoughtItems}
        setCartItems={setCartItems}
        setPrice={setPrice}
        concatBoughtItems={concatBoughtItems} />
      }
      <Header 
        price={price} 
        setFavoritesOpened={setFavoritesOpened} 
        onClickCart={() => {setCartOpened(true)}}
        setOrdersOpened={setOrdersOpened} />

      {favoritesOpened ? 
      <Favorites 
        setFavoritesOpened={setFavoritesOpened}
        favoritesItems={favoritesItems}
        searchValue={searchValue}
        onAddToCard={onAddToCard}
        cartItems={cartItems}
        setCartItems={setCartItems}
        onAddToFavorites={onAddToFavorites}
        onFavoritesRemove={onFavoritesRemove}
        onClose={() => {setFavoritesOpened(false)}}
        priceAdd={priceAdd}
        priceReduce={priceReduce}
        onCardRemove={onCardRemove}
      /> : ordersOpened ? 
      <Orders 
        setOrdersOpened={setOrdersOpened}
        ordersItems={ordersItems}
        onAddToCard={onAddToCard}
        cartItems={cartItems}
        setCartItems={setCartItems}
        onAddToFavorites={onAddToFavorites}
        onFavoritesRemove={onFavoritesRemove}
        onClose={() => {setOrdersOpened(false)}}
        priceAdd={priceAdd}
        priceReduce={priceReduce}
        favoritesItems={favoritesItems}
        ordersOpened={ordersOpened}
        ordersItem={ordersItems}
        boughtItems={boughtItems}
        onCardRemove={onCardRemove}
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
        priceAdd={priceAdd}
        priceReduce={priceReduce}
      />)}
    </div>
  );
}

export default App;
