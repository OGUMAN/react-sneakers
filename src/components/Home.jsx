import Card from './Card';

function Home({ searchValue, onChangeSearchInput, setSearchValue, cartItems, onAddToCard, items, onCardRemove, setCartItems, setFavoriteItems, favoritesItems, onAddToFavorites, onFavoritesRemove }){
    return(
        <div className="content container">
        <div className="mb-40 d-flex align-center justify-between flex-wrap">
          <h1 className="mr-30 mb-20 title">{searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search"/>
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
            <img onClick={()=>{setSearchValue('')}} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"/>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-around">
        {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
          <Card 
            key={index}
            title={item.title} 
            price={item.price} 
            imageUrl={item.imageUrl}
            onPlus={(obj) => onAddToCard(obj)}
            onAddToFavorites={(obj) => {onAddToFavorites(obj)}}
            onCardRemove={()=>{onCardRemove(item)}} 
            cartItems={cartItems}
            setCartItems={setCartItems}
            favoritesItems={favoritesItems}
            onFavoritesRemove={() => {onFavoritesRemove(item)}} />
        ))}
        </div>
      </div>
    );
}

export default Home;