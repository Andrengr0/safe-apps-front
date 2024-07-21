import React from 'react';
import { Link } from 'react-router-dom';
import './WhatsAppScreen.css';

const WhatsAppScreen1: React.FC = () => {
  return (
    <div className="whatsapp-screen">
      <div className="whatsapp-container">
        <h1 className="cabecalho">Episódio #01 - Whatsapp: medidas protetivas</h1>
        <h2 className="subtitle">Vamos aos primeiros passos para deixar seu whatsapp mais seguro:</h2>

        <div className="box-video">
          <iframe src="https://www.youtube.com/embed/U75m_1WCndw" allowFullScreen></iframe>
        </div>

        <p className="box-write">
          A seguir teremos um vídeo contento um tutorial mostrando algumas dicas para tornar seu aplicativo whatsapp mais seguro, a fim de lhe conscientizar sobre a segurança no do seu dispositivo.
        </p>

        <div className="box-video">
          <iframe src="https://www.youtube.com/embed/3g4kfKSSKjc" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/whatsapp/2">
            <button className="btn btn_amarelo">Ir para desafio</button>
          </Link>
          <Link to="/">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppScreen1;
