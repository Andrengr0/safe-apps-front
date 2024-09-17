import React from 'react';
import { Link } from 'react-router-dom';
import './InstagramScreen.css';

const Episodio_6: React.FC = () => {
  return (
    <div className="instagram-screen">
      <div className="instagram-container">
        <h1 className="cabecalho">Episódio #02 - Instagram: medidas protetivas</h1>
        <p className="box-write">
          Já verificou se seu aplicativo está atualizado? observe como fazer:
        </p>
        <div className="box-video">
          <iframe src="https://www.youtube.com/embed/O4udI1E9GDg" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/instagram/episodio/7">
            <button className="btn btn_amarelo">Ver +dicas</button>
          </Link>
          <Link to="/instagram/episodio/5">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_6;
