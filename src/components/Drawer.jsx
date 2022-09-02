function Drawer(props) {
    return(
        <div className="overlay">
          <div className="drawer d-flex">
            <div className="d-flex flex-column justify-between" style={{height: "100%"}}>
              <div className="items-wrapper">
                <h2 className="mb-30 d-flex justify-between align-center">
                  Корзина  <img onClick={props.onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close"/>
                </h2>
                <div className="items">
                  {props.items.map((obj) => (
                    <div className="cartItem d-flex align-center mb-20">
                      <div
                      style={{backgroundImage: `url(${obj.imageUrl})`}}
                      className="cartItemImg"></div>
                      <div className="mr-20 flex">
                        <p className="mb-5">{obj.title}</p>
                        <b>{obj.price} руб.</b>
                      </div>
                      <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                  ))}
                  </div>
                </div>
                <div className="cartTotalBlock pt-50">
                  <ul>
                    <li>
                      <span>Итого:</span>
                      <div></div>
                      <b>21 498 руб.</b>
                    </li>
                    <li className="d-flex">
                      <span>Налог 5%:</span>
                      <div></div>
                      <b>1074 руб.</b>
                    </li>
                  </ul>
                  <button className="btn">Оформить заказ <img src="img/arrow.svg" alt="Arrow"/></button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Drawer;