import React from 'react';
import { Link } from 'react-router-dom';
import './InstagramScreen.css';

const Episodio_5: React.FC = () => {
  return (
    <div className="instagram-screen">
      <div className="instagram-container">
        <h1 className="cabecalho">Episódio #02 - Instagram: medidas protetivas</h1>
        <p className="box-write">
          Que tal agora colocar mais privacidade no seu Instagram e ter maior controle sobre ele? Assista ao vídeo e entenda como:
        </p>
        <div className="box-video mt-4">
          <iframe src="https://www.youtube.com/embed/x-Sn1yvzUCc?si=z4DNOqMWj4BGfZUe" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/instagram/episodio/6">
            <button className="btn btn_amarelo">Próximo vídeo</button>
          </Link>
          <Link to="/instagram/episodio/4">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_5;
