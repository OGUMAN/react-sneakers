import React from 'react';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://63024bccc6dda4f287b73c90.mockapi.io/sneakers')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
}, []);

  const onAddToCard = (obj) => {
    setCartItems([...cartItems, obj]);
    console.log(cartItems)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => {setCartOpened(false)}} />}
      <Header onClickCart={() => {setCartOpened(true)}} />

      <div className="content container">
        <div className="mb-40 d-flex align-center justify-between flex-wrap">
          <h1 className="mr-30 mb-20 title">Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-around">
        {items.map((item) => (
          <Card 
            title={item.title} 
            price={item.price} 
            imageUrl={item.imageUrl}
            onFavorite={() => {}}
            onPlus={(obj) => onAddToCard(obj)} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
