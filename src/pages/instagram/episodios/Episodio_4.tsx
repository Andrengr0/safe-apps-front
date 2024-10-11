import React from 'react';
import { Link } from 'react-router-dom';
import './InstagramScreen.css';

const Episodio_4: React.FC = () => {
  return (
    <div className="instagram-screen">
      <div className="instagram-container">
        <h1 className="cabecalho">Episódio #04 - Instagram</h1>
        <p className="box-write">
          Você sabe o que é uma senha forte e como criá-la? Assista ao vídeo abaixo para entender.
        </p>

        <div className="box-video mt-4">
          <iframe src="https://www.youtube.com/embed/V3iiQc531vA?si=AmaEKqD2fDgeDQ11" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/instagram/episodio/5">
            <button className="btn btn_amarelo mt-5">Próximo vídeo</button>
          </Link>
          <Link to="/instagram/episodio/3">
            <button className="btn btn_cinza mt-4 mb-5">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_4;
