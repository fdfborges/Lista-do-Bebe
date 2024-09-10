import React from "react";
import AVATAR from './assets/IMAGE-AVATAR-BABY.png';
import GIFTIMAGE from './assets/GIFTIMAGE.png';
import ARROWDOWN from './assets/ARROWDOWN.png';
import './Home.scss';

const Home = () => {
    return(
        <>  
            <div className="ContainerBody">
            <div className="Container-Principal">
                <div className="Container-Right">
                    <h1>Lista <br />do Bebê</h1>
                    <p>Facilitando o <br />carinho em <br />cada <br />presente!</p>
                    <button>CONHEÇA</button>
                    <div className="ContainerGiftImage"><img src={GIFTIMAGE} alt="" /></div>
                </div>    
                <div className="Container-Left">
                    <img src={AVATAR} alt="" />
                </div>
            </div>
            <div className="ArrowDown"><img src={ARROWDOWN} alt="" /></div>
            </div>
                
            
        </>
    )
}

export default Home;