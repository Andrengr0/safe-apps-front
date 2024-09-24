import React from 'react';
import { Link } from 'react-router-dom';
import './TiktokScreen.css';

const Episodio_2: React.FC = () => {
  return (
    <div className="tiktok-screen">
      <div className="tiktok-container">
        <h1 className="cabecalho">Episódio #02 - TikTok</h1>
        <h2 className="subtitle">Configuração da verificação em duas etapas:</h2>

        <div className="box-video">
          <iframe src="https://www.youtube.com/embed/s6mrdv5J_nc?si=K9ljpFG7lt8Z_JGj" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/tiktok/episodio/3">
            <button className="btn btn_amarelo">Proximo Episódio</button>
          </Link>
          <Link to="/tiktok/episodio/1">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_2;
