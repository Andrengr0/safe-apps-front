import React from 'react';
import { Link } from 'react-router-dom';
import './InstagramScreen.css';

const Episodio_7: React.FC = () => {
  return (
    <div className="instagram-screen">
      <div className="instagram-container">
        <h1 className="cabecalho">Episódio #02 - Instagram: medidas protetivas</h1>
        <p className="box-write">
          Já verificou se seu aplicativo está atualizado? observe como fazer:
        </p>
        <div className="box-video">
          <iframe src="https://www.youtube.com/embed/xK4a03lRrwY?si=O6jfUWHuXD0zlaur" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/instagram/episodio/8">
            <button className="btn btn_amarelo">Ver +dicas</button>
          </Link>
          <Link to="/instagram/episodio/6">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_7;
