import React from 'react';
import { Link } from 'react-router-dom';
import './WhatsAppScreen.css';

const Episodio_5: React.FC = () => {
  return (
    <div className="whatsapp-screen">
      <div className="whatsapp-container">
        <h1 className="cabecalho">Episódio #01 - Whatsapp: medidas protetivas</h1>
        <p className="box-write">
          Sabia que existe um recurso para bloquear determinada conversa no whatsapp? Onde sempre que quiser entrar naquela conversa o app vai pedir a senha ou biometria, confira no vídeo:
        </p>
        <div className="box-video mt-4">
          <iframe src="https://www.youtube.com/embed/0gTOJIdXykg" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/whatsapp/episodio/6">
            <button className="btn btn_amarelo mt-5">Próximo vídeo</button>
          </Link>
          <Link to="/whatsapp/episodio/4">
            <button className="btn btn_cinza mt-4 mb-5">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_5;
