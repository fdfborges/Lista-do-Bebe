import React from "react";
import './HomeGrid.scss';
import Card from "../Card/Card";

const HomeGrid = () => {
    return(
        <>
        <div className="ContainerPrincipal">
            <div className="Titles">
                <h1>Conheça A Ferramenta</h1>
                <p>Simples e organizado, seu bebê merece!</p>
            </div>
                <div className="GridCard-LINE1">
                    <Card />
                    <Card isReserved={true}/>
                    <Card />
                    <Card />
                    <Card isReserved={true}/>
                    <Card />
                </div>  
                <div className="GridCard-LINE2">
                    <Card />
                    <Card isReserved={true}/>
                    <Card />
                    <Card />
                    <Card isReserved={true}/>
                    <Card />
                </div>  
                <button className="Btn-CTA">TESTAR</button>
        </div>
        </>
    )
}

export default HomeGrid;