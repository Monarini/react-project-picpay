import './style.css';
import logo from './images/PicPay.png';
import logoPrograma from './images/logo_observatorio.png';

import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";

function Tela01 () {
    useEffect(() => { 
        AOS.init(); 
        AOS.refresh(); 
      }, []);

    return (
        <div className='grid background'>
            <div>
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <img src={logo} alt="logo"/>
                </div>
                <div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1000'>
                    <div>
                        <span className='titulos'>Seja bem vindo ao curso de</span>
                    </div>
                    <div>
                        <img src={logoPrograma} alt="logo"/>
                    </div>
                </div>
                <div>
                    <div>
                    <button className='botaoAvancar' type="button">AVANÇAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tela01;