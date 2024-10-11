import React from 'react';
import { Link } from 'react-router-dom';
import './WhatsAppScreen.css';

const Episodio_5: React.FC = () => {
  return (
    <div className="whatsapp-screen">
      <div className="whatsapp-container">
        <h1 className="cabecalho">Episódio #05 - Whatsapp</h1>
        <p className="box-write">
          Sabia que existe um recurso para impedir acesso a uma determinada conversa no whatsapp? Onde sempre que desejar entrar naquela conversa o app vai pedir a senha ou biometria. Confira no vídeo:
        </p>
        <div className="box-video mt-4">
          <iframe src="https://www.youtube.com/embed/M7iX0jVbkU8?si=ATzQ3N6NS-xMiVBt" allowFullScreen></iframe>
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
