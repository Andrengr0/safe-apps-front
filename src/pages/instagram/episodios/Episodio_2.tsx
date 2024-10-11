import React from 'react';
import { Link } from 'react-router-dom';
import './InstagramScreen.css';

const Episodio_2: React.FC = () => {
  return (
    <div className="instagram-screen">
      <div className="instagram-container">
        <h1 className="cabecalho">Episódio #02 - Instagram</h1>
        <p className="box-write">
          Está lançado o seguinte desafio: Repita o processo do vídeo sobre "verificação em duas etapas", quando terminado clique no botão “Desafio concluído” para avançar a próxima fase do conteúdo. Você pode também escolher voltar a página anterior para assistir ao vídeo novamente.
        </p>
        <div className="buttons">
          <Link to="/instagram/episodio/1">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
          <Link to="/instagram/episodio/3">
            <button className="btn btn_verde">Desafio concluído</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_2;
