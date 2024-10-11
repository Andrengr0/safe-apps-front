import React from 'react';
import { Link } from 'react-router-dom';
import './TiktokScreen.css';

const Episodio_4: React.FC = () => {
  return (
    <div className="tiktok-screen">
      <div className="tiktok-container">
        <h1 className="cabecalho">Episódio #04 - TikTok</h1>
        <h2 className="subtitle mt-4">Atualize seus aplicativos:</h2>

        <div className="box-video">
          <iframe src="https://www.youtube.com/embed/xK4a03lRrwY?si=_dYIUln7eXe34J4z" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/tiktok/episodio/5">
            <button className="btn btn_amarelo">Proximo Episódio</button>
          </Link>
          <Link to="/tiktok/episodio/3">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_4;
