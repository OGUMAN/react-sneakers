import Card from './Card';
import Alert from './Alert';
import { Link } from 'react-router-dom';

function Orders ({setOrdersOpened, ordersItems, onAddToCard, cartItems, setCartItems, onAddToFavorites, onFavoritesRemove, priceAdd, priceReduce, favoritesItems, boughtItems, onCardRemove, canAddToCart }){
    return(
        boughtItems.concat(ordersItems).length? 
        <div className="content container show">
            <div className="mb-30 mb-15 d-flex">
                <Link to="/">
                    <img className="removeBtn cu-p mr-20" src="/img/btn-back.svg" alt="Close"/>
                </Link>
                <h1 className="mr-30 title">My purchases</h1>
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
            onCardRemove={()=>{onCardRemove(item)}}
            canAddToCart={canAddToCart} />
        ))}
        </div>
      </div>
      :
      <div className="content container d-flex flex-column justify-center align-center">
          <div className="mb-40 d-flex align-center justify-between flex-wrap">
            <Alert 
                title='You have no orders'
                text='Are you a rogue? Place at least one order.'
                imageUrl='img/sad.png'
                isLink={true}
            />
        </div>
    </div>
    );
    
}

export default Orders;