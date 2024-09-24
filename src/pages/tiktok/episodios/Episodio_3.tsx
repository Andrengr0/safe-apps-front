import React from 'react';
import { Link } from 'react-router-dom';
import './TiktokScreen.css';

const Episodio_3: React.FC = () => {
  return (
    <div className="tiktok-screen">
      <div className="tiktok-container">
        <h1 className="cabecalho">Episódio #03 - TikTok</h1>
        <h2 className="subtitle">Alertas de segurança:</h2>

        <div className="box-video">
          <iframe src="https://www.youtube.com/embed/xesSWDNPwZM?si=FSdNr7-TBKrS7IE6" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/tiktok/episodio/4">
            <button className="btn btn_amarelo">Proximo Episódio</button>
          </Link>
          <Link to="/tiktok/episodio/2">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_3;
