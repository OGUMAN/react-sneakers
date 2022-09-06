import Card from './Card';
import Alert from './Alert';

function Favorites({setFavoritesOpened, favoritesItems, searchValue, onAddToCard, onCardRemove, cartItems, setCartItems, onFavoritesRemove, onClose, priceAdd, priceReduce }){
    return(
        <div>
        {favoritesItems.length>0 ? 
        (<div className="content container">
          <div className="d-flex flex-column justify-center">
            <div className="mb-30 mb-20 d-flex align-center">
              <img onClick={()=>{setFavoritesOpened(false)}} className="removeBtn cu-p mr-20" src="/img/btn-back.svg" alt="Close"/>
              <h1 className="mr-30 title">Мои закладки</h1>
            </div>
          <div className="d-flex flex-wrap justify-around">
        {favoritesItems.map
          ((item, index) => 
            (
              <Card 
              key={index}
              title={item.title} 
              price={item.price} 
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCard(obj)}
              onCardRemove={()=>{onCardRemove(item)}} 
              cartItems={cartItems}
              setCartItems={setCartItems}
              favoritesItems={favoritesItems}
              onFavoritesRemove={() => {onFavoritesRemove(item)}}
              priceAdd={()=>{priceAdd(item.price)}}
              priceReduce={()=>{priceReduce(item.price)}} />
            )
          )
        }</div>
        </div></div>) : (
          <div className="content container d-flex flex-column justify-center align-center">
          <div className="mb-40 d-flex align-center justify-between flex-wrap">
        <Alert 
          onClose={onClose} 
          imageUrl={'img/crying.png'} 
          title={'Закладок нет :('} 
          text={'Вы ничего не добавляли в закладки'}/>
        </div></div>)}
        </div>
    )
}

export default Favorites;