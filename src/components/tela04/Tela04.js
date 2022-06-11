import "./style.css";

import React, { useEffect } from "react";
import seta_baixo from "../images/seta_baixo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function Tela04() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="tela-04" className="grid background4">
      <div className="shapePreto">
        <div className="container-04">
          <span className="titulos">
            Apenas monitoramento não basta!<br></br>
          </span>
          <span className="textoBranco">
            Por muitos anos, as equipes de TI mediam a disponibilidade e
            performance de suas aplicações através da coleta de métricas. O
            monitoramento gira em torno de alertas e interrupções.
            <br />
            <br />
            <br />
            Depende de falhas conhecidas do passado de acordo com limites
            previsíveis que foram julgados como anomalias.
            <br />
            <br />
            <br />A abordagem de monitoramento funcionou muito bem em sistemas
            monolíticos e ainda pode funcionar em alguns pouquíssimos serviços
            de infraestrutura.
          </span>
          <div>
            <Link to="tela-05" smooth={true} duration={500}>
              <button className="btnSeta" type="button">
                <img src={seta_baixo} alt="Seta Avançar" />
                Rola para baixo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tela04;
