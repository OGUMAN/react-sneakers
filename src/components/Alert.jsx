function Alert (props) {
    return( 
        <div className="alert d-flex flex-column justify-center align-center text-center">
            <div className="alert__content">
                <div className="mb-5">
                    <img src = {props.imageUrl}/>
                </div>
                <h4 className="mb-10">{props.title}</h4>
                <div className="alert__text mb-30">{props.text}</div>
                <button onClick={props.onClose} className="btn alert__btn"><img src="img/arrow.svg" alt="Arrow"/> Вернуться назад</button>
            </div>
        </div>
     )
}

export default Alert;