import { Link } from 'react-router-dom';

function Alert ({ imageUrl, title, text, onClose, isLink }) {
    return( 
        <div className="alert d-flex flex-column justify-center align-center text-center show">
            <div className="alert__content">
                <div className="mb-10">
                    <img width={80} src = {imageUrl}/>
                </div>
                <h4 className="mb-10">{title}</h4>
                <div className="alert__text mb-30">{text}</div>
                {isLink ? 
                <Link to="/">
                    <button className="btn alert__btn"><img src="img/arrow.svg" alt="Arrow"/>Come back</button>
                </Link> 
                :
                <button onClick={onClose} className="btn alert__btn"><img src="img/arrow.svg" alt="Arrow"/>Come back</button>
                }
            </div>
        </div>
     )
}

export default Alert;