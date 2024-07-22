import React from 'react';
import { Link } from 'react-router-dom';
import './InstagramScreen.css';

const InstagramScreen5: React.FC = () => {
  return (
    <div className="instagram-screen">
      <div className="instagram-container">
        <h1 className="cabecalho">Episódio #02 - Instagram: medidas protetivas</h1>
        <p className="box-write">
          Que tal agora colocar mais privacidade no seu Instagram e ter maior controle sobre ele? Assista ao vídeo e entenda como:
        </p>
        <div className="box-video mt-4">
          <iframe src="https://www.youtube.com/embed/ZPGFyFpdLXc" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/instagram/6">
            <button className="btn btn_amarelo">Próximo vídeo</button>
          </Link>
          <Link to="/instagram/4">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstagramScreen5;
