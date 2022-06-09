import './style.css';
import homem_apontando from './images/homem_apontando.png'

import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";

function Tela03 () {
    useEffect(() => { 
        AOS.init(); 
        AOS.refresh(); 
      }, []);

    return (
        <div className='grid background3'>
            <div>
                <section className='grid texto-imagem'>
                    <div>
                        <div className='titulos'>
                            O que é observabilidade?
                        </div>
                        <div>
                            <span className='textoVerde'>Observabilidade é a habilidade de entender o que está acontecendo dentro do seu sistema com base em suas saídas. Isso significa que você deve saber explicar qualquer estado em que seu sistema possa entrar. Por exemplo: estado de falha, estado de lentidão etc.<br></br><br></br>
                                                              A Observabilidade em sistemas de Engenharia de Software busca alcançar uma melhor compreensão de como o software está operando. Portanto, a Observabilidade é um desafio técnico e cultural.<br></br><br></br>
                                                              Clique nos botões abaixo para saber a diferença entre eles.</span>
                        </div>
                        <div>
                            <button className='botao' type="button">TÉCNICO</button>
                            <button className='botao' type="button">CULTURAL</button>
                        </div>
                    </div>
                    <div>
                        <img className='imagemTela2' src={homem_apontando} alt="Foto de Homem com notebook"/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Tela03;