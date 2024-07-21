import React from 'react';
import { Link } from 'react-router-dom';
import './WhatsAppScreen.css';

const WhatsAppScreen3: React.FC = () => {
  return (
    <div className="whatsapp-screen">
      <div className="whatsapp-container">
        <h1 className="cabecalho">Episódio #01 - Whatsapp: medidas protetivas</h1>
        <div className="card mt-5">
          <h2 className="p-3">PARABÉNS!!!</h2>
          <h4 className="text-center p-3">Você concluiu o primeiro desafio e está no caminho certo, tornando seu aplicativo mais seguro!</h4>
        </div>

        <div className="buttons">
          <Link to="/whatsapp/4">
            <button className="btn btn_amarelo mt-5">Próxima fase</button>
          </Link>
          <Link to="/whatsapp/2">
            <button className="btn btn_cinza mt-4 mb-5">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppScreen3;
