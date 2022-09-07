import React from 'react';
import Card from './Card';

function AdItem ({ imageUrl, index, sliderStep }){
  if(sliderStep===index){
    return(
      <div className="ad__item show" style={{backgroundImage: imageUrl}}>
          <div className='ad__content'>
              <h2>Stan Smith, <br/>Forever!</h2>
              <a href="ad">Купить</a>
          </div>
      </div>
    )
  }
  else{
    return null
  }
}

function Home({ searchValue, onChangeSearchInput, setSearchValue, cartItems, onAddToCard, items, onCardRemove, setCartItems, setFavoriteItems, favoritesItems, onAddToFavorites, onFavoritesRemove, priceAdd, priceReduce, canAddToCart }){
    const [adItems, setAdItems] = React.useState(
        [
          {imageUrl: "url('/img/ad.jpg')"}, 
          {imageUrl: "url('/img/ad.jpg')"}
        ]
      )
    const [sliderStep, setSliderStep] = React.useState(0);

    const next = () => {
      if(sliderStep !== adItems.length-1){
        setSliderStep(sliderStep+1);
      }
    }

    const back = () => {
      if(sliderStep !== 0){
        setSliderStep(sliderStep-1);
      }
    }

    return(
        <div className="content container show">
        <div className="mb-40">
          <div className="ad">
            {
              adItems.map((obj, index) => (
                <AdItem key={index} sliderStep={sliderStep} index={index} imageUrl={obj.imageUrl} />
              ))
            }
            <button onClick={back} className={`ad__btn ad__btn-first ${sliderStep===0 && 'inactive'}`}>
              <div className="arrow"/>
            </button>
            <button onClick={next} className={`ad__btn ${sliderStep===adItems.length-1 && 'inactive'}`}>
              <div className="arrow"/>
            </button>
          </div>
          <div className="d-flex align-center justify-between flex-wrap">
            <h1 className="mr-30 mb-20 title">{searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}</h1>
            <div className="search-block d-flex align-center">
              <img src="/img/search.svg" alt="Search"/>
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
              <img onClick={()=>{setSearchValue('')}} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"/>
            </div>
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
            onFavoritesRemove={() => {onFavoritesRemove(item)}}
            priceAdd={()=>{priceAdd(item.price)}}
            priceReduce={()=>{priceReduce(item.price)}}
            canAddToCart={canAddToCart} />
        ))}
        </div>
      </div>
    );
}

export default Home;