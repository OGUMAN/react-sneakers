import React from 'react';
import styles from './Card.module.scss';

function Card({ title, imageUrl, price, onFavorite, onPlus, onCardRemove, cartItems }) {
  // const [isAdded, setIsAdded] = React.useState(cartItems.some((obj) => obj.title === title));
  const [isFavorite, setIsFavorite] = React.useState(false);


  const onClickCard = () => {
    if(!cartItems.some((obj) => obj.title === title)){
      onPlus({title, imageUrl, price});
    }
    else{
      onCardRemove();
    }
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  }

    return(
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img src={`/img/${isFavorite ? 'liked' : 'unliked'}.svg`} alt="Unliked"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Product"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
                <img className={styles.plus + " cu-p"} onClick={onClickCard} src={`/img/${cartItems.some((obj) => obj.title === title) ? 'btn-checked' : 'plus'}.svg`} alt="Add"/>
            </div>
        </div>
    );
}

export default Card;