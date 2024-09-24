import React from 'react';
import { Link } from 'react-router-dom';
import './TiktokScreen.css';

const Episodio_5: React.FC = () => {
  return (
    <div className="tiktok-screen">
      <div className="tiktok-container">
        <h1 className="cabecalho">Episódio #05 - TikTok</h1>
        <h2 className="subtitle">Utilize senhas fortes:</h2>

        <div className="box-video">
          <iframe src="https://www.youtube.com/embed/V3iiQc531vA?si=qC2DCCla7zxJz3NM" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/quizzes/tiktok">
            <button className="btn btn_amarelo">Ir para Quiz</button>
          </Link>
          <Link to="/tiktok/episodio/4">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_5;
