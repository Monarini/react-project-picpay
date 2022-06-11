import "./style.css";
import caixa_imagem from "./images/pop.png";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import MyModal from "../shared/MyModal";

function Tela05() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="tela-05" className="grid background5">
      <div className="div800 container-05">
        <div className="caixa">
          <span className="textoBranco text-align-center container-text p-20">
            Mas, no atual cenário que vivemos, com sistemas complexos,
            distribuídos em microsserviços, não é mais a técnica ideal para
            entender e resolver problemas críticos em sistemas de Engenharia de
            Software.
          </span>
        </div>
        <div className="caixa">
          <img
            className="imagemTela5 "
            src={caixa_imagem}
            alt="Caixa de texto com imagem"
          />
        </div>
        <div className="caixa">
          <MyModal
            name="SAIBA MAIS"
            content="Apesar de ser considerado um dos sinais para praticar a Observabilidade, as métricas são muito limitantes para servir como um bloco de construção fundamental da Observabilidade. Por esse motivo, você não deve acreditar que métricas são um dos pilares da Observabilidade (assim como logs também não são e você vai saber o motivo mais adiante)."
          />
        </div>
        <Link to="tela-06" smooth={true} duration={500}>
          <button className="btnSeta p-20" type="button">
            <img src={seta_baixo} alt="Seta Avançar" />
            Rola para baixo
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Tela05;
