import "./style.css";
import foto_homem from "./images/foto_homem.png";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function Tela02() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="tela-02" className="grid background2">
      <div className="container-02 scale-08">
        <section className="grid imagem-texto">
          <div className="container-img">
            <img
              className="imagemTela2"
              src={foto_homem}
              alt="Foto de Homem com notebook"
            />
          </div>
          <div className="container-text">
            <span className="textoVerde">
              Sejam muito bem-vindos ao curso básico de <b>Observabilidade</b>.
              <br></br>
              <br></br>
              Neste treinamento vamos abordar os conceitos de observabilidade,
              um pouco sobre métricas, logs e rastreamento distribuído.<br></br>
              <br></br>
              Ao final desse treinamento você será capaz de compreender a
              importância da observabilidade aqui no PicPay e terá uma base para
              aplicar esses conceitos em seus projetos.
            </span>
          </div>
          <div className="alinhamento-button-02">
            <Link to="tela-03" smooth={true} duration={500}>
              <button className="btnSeta" type="button">
                <img src={seta_baixo} alt="Seta Avançar" />
                Rola para baixo
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tela02;
