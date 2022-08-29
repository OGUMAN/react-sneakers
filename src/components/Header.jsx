function Card() {
    return(
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
            <div>
                <img className="mr-15" width={40} height={40} src="/img/logo.svg" alt=""/>
            </div>
            <div className="logo__text">
                <h3 className="logo__title text-uppercase">React Sneakers</h3>
                <p className="logo__subtitle">Магазин лучших кроссовок</p>
            </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt=""/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt=""/>
                </li>
            </ul>
      </header>
    );
}

export default Card;