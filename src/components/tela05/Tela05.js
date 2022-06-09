import './style.css';
import caixa_imagem from './images/pop.png'

import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";

function Tela05 () {
    useEffect(() => { 
        AOS.init(); 
        AOS.refresh(); 
      }, []);

    return (
        <div className='grid background5'>
            <div className='div800'>
                <div>
                    <span className='textoBranco'>Mas, no atual cenário que vivemos, com sistemas complexos, distribuídos em microsserviços, não é mais a técnica ideal para entender e resolver problemas críticos em sistemas de Engenharia de Software.</span>
                </div>
                <div>
                    <img className='imagemTela5' src={caixa_imagem} alt="Caixa de texto com imagem"/>
                </div>
                <div>
                    <button className='botao' type="button">SAIBA MAIS</button>
                </div>
            </div>    
        </div>
    )
}

export default Tela05;