import React from 'react';
import { Link } from 'react-router-dom';
import './WhatsAppScreen.css';

const Episodio_8: React.FC = () => {
  return (
    <div className="whatsapp-screen">
      <div className="whatsapp-container">
        <h1 className="cabecalho">Episódio #01 - Whatsapp: medidas protetivas</h1>
        <h4 className="description text-center">Que tal agora testar seus conhecimentos adquiridos ao longo dessa jornada?</h4>
        <h6 className="description text-center mt-4">Temos um QUIZZ divertido para analisar seu aprendizado e ao final terá sua pontuação!</h6>

        <div className="buttons">
          <Link to="/quizzes/whatsapp">
            <button className="btn btn_verde mt-5">Iniciar QUIZZ</button>
          </Link>
          <Link to="/whatsapp/episodio/7">
            <button className="btn btn_cinza mt-4 mb-5">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_8;
