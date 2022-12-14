import React from 'react';
import Alert from './Alert';

function Drawer({ cartItems, onClose, removeCartItem, priceReduce, price, setCartItems, setPrice, concatBoughtItems, setCartOpened }) {
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
          <div className="d-flex flex-column justify-between show" style={{height: "100%"}}>
            <div className="items-wrapper">
              <h2 className="mb-30 d-flex justify-between align-center">
                Basket  <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"/>
              </h2>
              <div className="items">
                {cartItems.map((obj, index) => (
                  <div key={index} className="cartItem d-flex align-center mb-20">
                    <div
                    style={{backgroundImage: `url(${obj.imageUrl})`}}
                    className="cartItemImg"></div>
                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price.toLocaleString("fr")} USD</b>
                    </div>
                    <img onClick={()=>{onCartItemRemove(obj)}} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                  </div>
                ))}
                </div>
              </div>
              <div className="cartTotalBlock pt-50">
                <ul>
                  <li>
                    <span>Total:</span>
                    <div></div>
                    <b>{price.toLocaleString("fr")} USD</b>
                  </li>
                  <li className="d-flex">
                    <span>Tax 5%:</span>
                    <div></div>
                    <b>{(price * 0.05).toFixed(2).toLocaleString("fr")} USD</b>
                  </li>
                </ul>
                <button onClick={buyCartItems} className="btn">Checkout <img src="img/arrow.svg" alt="Arrow"/></button>
            </div>
          </div>
        </div>
        </div> : isBought ? 
        <div className="overlay">
        <div className="drawer d-flex">
          <div className="d-flex flex-column justify-between show" style={{height: "100%"}}>
            <h2 className="mb-30 d-flex justify-between align-center">
            Basket  <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"/>
            </h2>
            <Alert onClose={onClose} imageUrl={'img/bought.png'} title={'Order is processed!'} text={'Your order #18 will be delivered to courier soon'}/>
          </div>
        </div>
      </div> :
        <div className="overlay">
          <div className="drawer d-flex">
            <div className="d-flex flex-column justify-between show" style={{height: "100%"}}>
              <h2 className="mb-30 d-flex justify-between align-center">
              Basket  <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"/>
              </h2>
              <Alert isLink={false} onClose={()=>{onClose(); setIsBought(false)}} imageUrl={'img/empty.png'} title={'Cart is empty'} text={'Add at least one pair of sneakers to place an order.'}/>
            </div>
          </div>
        </div>
    )
}

export default Drawer;