import './style.css';

import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";

function Tela06 () {
    useEffect(() => { 
        AOS.init(); 
        AOS.refresh(); 
      }, []);

    return (
        <div className='grid background2'>
            <div className='div800'>
                <div>
                    <span className='textoVerde'>Podemos destacar os motivos pelos quais as abordagens de monitoramento não funcionam para os sistemas modernos atuais:</span>
                </div>
                <div className='grid tresColunas'>
                    <div className='shapeVerde'>
                        <span className='textoVerde'>Não podemos mais acreditar em limites estabelecidos como bom ou ruim, ok ou falha, up ou down etc. Isso é pura suposição.</span>
                    </div>
                    <div className='shapeVerde'>
                        <span className='textoVerde'>Não podemos mobilizar equipes apenas quando alertas baseados nesses limites são emitidos.</span>
                    </div>
                    <div className='shapeVerde'>
                        <span className='textoVerde'>A abordagem reativa através de alertas gera mais problemas: ajuste de thresholds com intuito de diminuir o ruído.</span>
                    </div>
                </div>
                <div>
                    <span className='textoVerde'><b>Os exemplos citados são ineficazes para compreender como os sistemas modernos funcionam. Isso não é observabilidade.</b></span>
                </div>
            </div>    
        </div>
    )
}

export default Tela06;