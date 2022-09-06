function Alert ({imageUrl, title, text, onClose}) {
    return( 
        <div className="alert d-flex flex-column justify-center align-center text-center">
            <div className="alert__content">
                <div className="mb-5">
                    <img src = {imageUrl}/>
                </div>
                <h4 className="mb-10">{title}</h4>
                <div className="alert__text mb-30">{text}</div>
                <button onClick={onClose} className="btn alert__btn"><img src="img/arrow.svg" alt="Arrow"/> Вернуться назад</button>
            </div>
        </div>
     )
}

export default Alert;