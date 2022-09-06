import Card from './Card';
import Alert from './Alert';

function Orders ({setOrdersOpened, ordersItems, onAddToCard, cartItems, setCartItems, onAddToFavorites, onFavoritesRemove, priceAdd, priceReduce, favoritesItems, boughtItems, onCardRemove }){
    return(
            boughtItems.concat(ordersItems).length? 
        <div className="content container">
            <div className="mb-30 mb-20 d-flex align-center">
                <img onClick={()=>{setOrdersOpened(false)}} className="removeBtn cu-p mr-20" src="/img/btn-back.svg" alt="Close"/>
                <h1 className="mr-30 title">Мои покупки</h1>
                </div>
            <div className="d-flex flex-wrap justify-around">
        {boughtItems.concat(ordersItems).map((item, index) => (
          <Card 
            key={index}
            title={item.title} 
            price={item.price} 
            imageUrl={item.imageUrl}
            onPlus={(obj) => onAddToCard(obj)}
            onAddToFavorites={(obj) => {onAddToFavorites(obj)}}
            // onCardRemove={()=>{onCardRemove(item)}} 
            cartItems={cartItems}
            setCartItems={setCartItems}
            favoritesItems={favoritesItems}
            onFavoritesRemove={() => {onFavoritesRemove(item)}}
            priceAdd={()=>{priceAdd(item.price)}}
            priceReduce={()=>{priceReduce(item.price)}}
            onCardRemove={()=>{onCardRemove(item)}} />
        ))}
        </div>
      </div>
      :
      <div className="content container d-flex flex-column justify-center align-center">
          <div className="mb-40 d-flex align-center justify-between flex-wrap">
            <Alert 
                title='У вас нет заказов'
                text='Вы нищеброд? Оформите хотя бы один заказ.'
                imageUrl='img/sad.png'
                onClose={()=>{setOrdersOpened(false)}}
            />
        </div>
    </div>
    );
    
}

export default Orders;