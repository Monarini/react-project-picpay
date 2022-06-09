import './style.css';
import foto_homem from './images/foto_homem.png'

import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";

function Tela02 () {
    useEffect(() => { 
        AOS.init(); 
        AOS.refresh(); 
      }, []);

    return (
        <div className='grid background2'>
            <div>
                <section className='grid imagem-texto'>
                    <div>
                        <img className='imagemTela2' src={foto_homem} alt="Foto de Homem com notebook"/>
                    </div>
                    <div>
                        <span className='textoVerde'>Sejam muito bem-vindos ao curso básico de <b>Observabilidade</b>.<br></br><br></br>
                                                      Neste treinamento vamos abordar os conceitos de observabilidade, um pouco sobre métricas, logs e rastreamento distribuído.<br></br><br></br>
                                                      Ao final desse treinamento você será capaz de compreender a importância da observabilidade aqui no PicPay e terá uma base para aplicar esses conceitos em seus projetos.</span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Tela02;