import "./style.css";
import homem_apontando from "./images/homem_apontando.png";
import seta_baixo from "../images/seta_baixo.png";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import MyModal from "../shared/MyModal";

function Tela03() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="tela-03" className="grid background3">
      <div className="container-03 scale-08">
        <section className="grid texto-imagem">
          <div className="container-text-buttons">
            <div className="titulos">O que é observabilidade?</div>
            <div className="text-container">
              <span className="textoVerde">
                Observabilidade é a habilidade de entender o que está
                acontecendo dentro do seu sistema com base em suas saídas. Isso
                significa que você deve saber explicar qualquer estado em que
                seu sistema possa entrar. Por exemplo: estado de falha, estado
                de lentidão etc.
              </span>
              <br />
              <br />
              <span className="textoVerde text2">
                A Observabilidade em sistemas de Engenharia de Software busca
                alcançar uma melhor compreensão de como o software está
                operando. Portanto, a Observabilidade é um desafio técnico e
                cultural.
              </span>
              <br />
              <br />
              <span className="textoVerde">
                Clique nos botões abaixo para saber a diferença entre eles.
              </span>
            </div>

            <div className="buttons-container">
              <MyModal
                name="TÉCNICO"
                title="TÉCNICO"
                content="Quando você precisa conhecer ferramentas que vão possibilitar criar insumos para sinais de Observabilidade."
              />
              <MyModal
                name="CULTURAL"
                title="CULTURAL"
                content="Quando você precisa compreender e adotar novas práticas que vão possibilitar um desenvolvimento contínuo, buscando entender como seus sistemas estão funcionando em um ambiente de produção."
              />
            </div>
          </div>

          <div className="img">
            <img
              className="imagemTela2"
              src={homem_apontando}
              alt="Foto de Homem com notebook"
            />
          </div>
          <div className="alinhano-button">
            <Link to="tela-04" smooth={true} duration={500}>
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

export default Tela03;
