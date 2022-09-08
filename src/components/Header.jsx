import { Link } from 'react-router-dom';

function Header({ onClickCart, setFavoritesOpened, price, setOrdersOpened }) {
    return(
        <header className="d-flex justify-between align-center container flex-wrap">
            <Link to="/">
                <div className="d-flex align-center mb-15 cu-p">
                    <div>
                        <img className="mr-15" width={40} height={40} src="/img/logo.svg" alt="Logo"/>
                    </div>
                    <div className="logo__text">
                        <h3 className="logo__title text-uppercase">React Sneakers</h3>
                        <p className="logo__subtitle">Shop the best sneakers</p>
                    </div>
                </div>
            </Link>
            <ul className="cart-and-profile d-flex">
                <li onClick={onClickCart} className="mr-30 cu-p">
                    <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="Cart"/>
                    <span>{price.toLocaleString("fr")} USD</span>
                </li>
                <div className="d-flex align-center">
                    <Link to="/favorites">
                        <li className="cu-p mr-15">
                            <img width={18} height={18} src="/img/favorites.svg" alt="Favorites"/>
                        </li>
                    </Link>
                    <Link to="/orders">
                        <li className="cu-p">
                            <img width={18} height={18} src="/img/user.svg" alt="Profile"/>
                        </li>
                    </Link>
                </div>
            </ul>
      </header>
    );
}

export default Header;