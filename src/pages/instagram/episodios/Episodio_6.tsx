import React from 'react';
import { Link } from 'react-router-dom';
import './InstagramScreen.css';

const Episodio_6: React.FC = () => {
  return (
    <div className="instagram-screen">
      <div className="instagram-container">
        <h1 className="cabecalho">Episódio #06 - Instagram</h1>
        <p className="box-write">
          Como receber alertas sempre que tentarem entrar no seu Instagram e ter maior controle sobre ele? Assista ao vídeo e entenda como:
        </p>
        <div className="box-video mt-4">
          <iframe src="https://www.youtube.com/embed/e4A4PY1Vt_Q?si=OAhLdJmQQQkfc8UV" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/instagram/episodio/7">
            <button className="btn btn_amarelo">Próximo vídeo</button>
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