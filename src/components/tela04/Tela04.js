import './style.css';

import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";

function Tela04 () {
    useEffect(() => { 
        AOS.init(); 
        AOS.refresh(); 
      }, []);

    return (
        <div className='grid background4'>
            <div className='shapePreto'>
                    <span className='titulos'>Apenas monitoramento não basta!<br></br></span>
                    <span className='textoBranco'>Por muitos anos, as equipes de TI mediam a disponibilidade e performance de suas aplicações através da coleta de métricas. O monitoramento gira em torno de alertas e interrupções.<br></br><br></br>
                                                  Depende de falhas conhecidas do passado de acordo com limites previsíveis que foram julgados como anomalias.<br></br><br></br>
                                                  A abordagem de monitoramento funcionou muito bem em sistemas monolíticos e ainda pode funcionar em alguns pouquíssimos serviços de infraestrutura.</span>
            </div>
        </div>
    )
}

export default Tela04;