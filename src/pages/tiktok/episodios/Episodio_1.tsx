import React from 'react';
import { Link } from 'react-router-dom';
import './TiktokScreen.css';

const Episodio_1: React.FC = () => {
  return (
    <div className="tiktok-screen">
      <div className="tiktok-container">
        <h1 className="cabecalho">Episódio #01 - TikTok</h1>
        <h2 className="subtitle mt-4">Vamos aos primeiros passos para deixar seu TikTok mais seguro:</h2>

        <div className="box-video">
          <iframe src="https://www.youtube.com/embed/WQ_pOhZPDqA?si=v9JTp9hZd-QZKb4T" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/tiktok/episodio/2">
            <button className="btn btn_amarelo">Proximo Episódio</button>
          </Link>
          <Link to="/">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_1;
