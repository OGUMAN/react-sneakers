import { Routes, Route } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Orders from './components/Orders';
import Alert from './components/Alert';

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  const [favoritesItems, setFavoriteItems] = React.useState([]);

  const [boughtItems, setBoughtItems] = React.useState([]);
  const [ordersItems, setOrdersItems] = React.useState([]);

  const [didLoad, setDidLoad] = React.useState(false);

  const [price, setPrice] = React.useState(0);

  React.useEffect(() => {
    axios.get('jsons/sneakers.json').then(res => {
      setItems(res.data);
      setDidLoad(true);
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

  const concatBoughtItems = () => {
    setBoughtItems(cartItems);

    setOrdersItems(
      boughtItems.concat(ordersItems)
    );
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
        concatBoughtItems={concatBoughtItems}
        setCartOpened={setCartOpened} />
      }
      <Header 
        price={price} 
        onClickCart={() => {setCartOpened(true)}}
       />

      <Routes>
        <Route path="/favorites" element={
          <Favorites 
            favoritesItems={favoritesItems}
            searchValue={searchValue}
            onAddToCard={onAddToCard}
            cartItems={cartItems}
            setCartItems={setCartItems}
            onAddToFavorites={onAddToFavorites}
            onFavoritesRemove={onFavoritesRemove}
            priceAdd={priceAdd}
            priceReduce={priceReduce}
            onCardRemove={onCardRemove}
            canAddToCart={true}
          />
        }/>
        <Route path="/orders" element={
          <Orders 
            ordersItems={ordersItems}
            onAddToCard={onAddToCard}
            cartItems={cartItems}
            setCartItems={setCartItems}
            onAddToFavorites={onAddToFavorites}
            onFavoritesRemove={onFavoritesRemove}
            priceAdd={priceAdd}
            priceReduce={priceReduce}
            favoritesItems={favoritesItems}
            ordersItem={ordersItems}
            boughtItems={boughtItems}
            onCardRemove={onCardRemove}
            canAddToCart={false}
        />
        }/>
      <Route path="/" element={
        <Home 
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
          canAddToCart={true}
          didLoad={didLoad}
        />
      }/>
      <Route path="*" element={
         <div className="content container show d-flex flex-column justify-center">
            <Alert
              isLink={true}
              imageUrl={'img/page-not-found.svg'} 
              title={'Page not found!'} 
              text={''}
            />
        </div>
      }/>
      </Routes>
    </div>
  );
}

export default App;
