import React from 'react';
import Alert from './Alert';

function Drawer({ cartItems, onClose, removeCartItem, priceReduce, price, setCartItems, setPrice, concatBoughtItems }) {
  const [isBought, setIsBought] = React.useState(false);

  const onCartItemRemove = (obj) => {
    removeCartItem(obj); 
    priceReduce(obj.price);
  }

  const buyCartItems = () => {
    concatBoughtItems();
    setCartItems([]);
    setIsBought(true);
    setPrice(0);
  }

    return(
      cartItems.length>0 ? 
        <div className="overlay">
        <div className="drawer d-flex">
          <div className="d-flex flex-column justify-between" style={{height: "100%"}}>
            <div className="items-wrapper">
              <h2 className="mb-30 d-flex justify-between align-center">
                Корзина  <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"/>
              </h2>
              <div className="items">
                {cartItems.map((obj) => (
                  <div className="cartItem d-flex align-center mb-20">
                    <div
                    style={{backgroundImage: `url(${obj.imageUrl})`}}
                    className="cartItemImg"></div>
                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img onClick={()=>{onCartItemRemove(obj)}} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                  </div>
                ))}
                </div>
              </div>
              <div className="cartTotalBlock pt-50">
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>{price} руб.</b>
                  </li>
                  <li className="d-flex">
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>{(price * 0.05).toFixed(2)} руб.</b>
                  </li>
                </ul>
                <button onClick={buyCartItems} className="btn">Оформить заказ <img src="img/arrow.svg" alt="Arrow"/></button>
            </div>
          </div>
        </div>
        </div> : isBought ? 
        <div className="overlay">
        <div className="drawer d-flex">
          <div className="d-flex flex-column justify-between" style={{height: "100%"}}>
            <h2 className="mb-30 d-flex justify-between align-center">
              Корзина  <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"/>
            </h2>
            <Alert onClose={onClose} imageUrl={'img/bought.png'} title={'Заказ оформлен!'} text={'Ваш заказ #18 скоро будет передан курьерской доставке'}/>
          </div>
        </div>
      </div> :
        <div className="overlay">
          <div className="drawer d-flex">
            <div className="d-flex flex-column justify-between" style={{height: "100%"}}>
              <h2 className="mb-30 d-flex justify-between align-center">
                Корзина  <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"/>
              </h2>
              <Alert onClose={()=>{onClose(); setIsBought(false)}} imageUrl={'img/empty.png'} title={'Корзина пустая'} text={'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}/>
            </div>
          </div>
        </div>
    )
}

export default Drawer;