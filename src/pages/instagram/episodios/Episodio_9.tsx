import React from 'react';
import { Link } from 'react-router-dom';
import './InstagramScreen.css';

const Episodio_9: React.FC = () => {
  return (
    <div className="instagram-screen">
      <div className="instagram-container">
        <h1 className="cabecalho">Episódio #02 - Instagram: medidas protetivas</h1>
        <h4 className="description">Que tal agora testar seus conhecimentos adquiridos ao longo dessa jornada?</h4>
        <h6 className="description">Temos um QUIZZ divertido para analisar seu aprendizado e ao final terá sua pontuação!</h6>

        <div className="buttons">
          <Link to="/quizzes/instagram">
            <button className="btn btn_verde">Iniciar QUIZZ</button>
          </Link>
          <Link to="/instagram/episodio/8">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_9;
