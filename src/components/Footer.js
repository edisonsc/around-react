function Footer () {
    return (
        <div> 
        <footer className="footer">
            <p className="footer__text">&#169; 2021 Around The U.S.</p>
        </footer>
     
        <template id="cardTemplate" className = "card-template">
            <li className="photo-grid__card">
                <button aria-label="delete" type="button" className="photo-grid__delete-icon"></button>
                <img className="photo-grid__image" alt=""/>
                <div className="photo-grid__content">
                    <h2 className="photo-grid__title"></h2>
                    <div className="photo-grid__likes">
                    <button aria-label="like" type="button" id="like" className="photo-grid__heart-icon opacity"></button>
                    <p className="photo-grid__text"></p>
                </div>
                </div>
            </li>
        </template> 
    
    </div>
    )
}

export default Footer