import './Card.scss';

const Card = ({ isReserved }) => {
    return(
        <>
            <div className="ContainerCard">
             <div className="ContainerImg"><img src="" alt="" /></div>
             <p className="TitleProduct">Jogo de Panelas</p>
             <button className={isReserved ? 'reserved' : ''}>
                {isReserved ? 'RESERVADO' : 'RESERVAR'}
             </button>
            </div>
        </>
    )
}

export default Card;