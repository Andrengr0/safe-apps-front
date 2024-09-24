import React from 'react';
import { Link } from 'react-router-dom';
import './WhatsAppScreen.css';

const Episodio_6: React.FC = () => {
  return (
    <div className="whatsapp-screen">
      <div className="whatsapp-container">
        <h1 className="cabecalho">Episódio #01 - Whatsapp: medidas protetivas</h1>
        <p className="box-write">
          Sabia que existe uma forma mais simples de entrar no whatsapp com uma senha? com esse recurso você vai se aproveitar dos métodos de entrada do seu dispositivo como a impressão digital do celular, seu pin e outras senhas, confira no vídeo:
        </p>
        <div className="box-video mt-4">
          <iframe src="https://www.youtube.com/embed/7zLtnstg5m8" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/whatsapp/episodio/7">
            <button className="btn btn_amarelo mt-5">Próximo vídeo</button>
          </Link>
          <Link to="/whatsapp/episodio/5">
            <button className="btn btn_cinza mt-4 mb-5">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_6;