function PokeItem(props){
    return (
            <div className="card">
                <img className="card__img" src={props.image} alt=""></img>
                <div >
                    <span className="card__footer">
                        <span>{props.name}</span>
                        <span><button href="">find out more</button></span>
                    </span>
                </div>
            </div>
        
    );
}

export default PokeItem;