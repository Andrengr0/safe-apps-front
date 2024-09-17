import React from 'react';
import { Link } from 'react-router-dom';
import './WhatsAppScreen.css';

const Episodio_6: React.FC = () => {
  return (
    <div className="whatsapp-screen">
      <div className="whatsapp-container">
        <h1 className="cabecalho">Episódio #01 - Whatsapp: medidas protetivas</h1>
        <p className="box-write">
          Já verificou se seu aplicativo está atualizado? observe como fazer:
        </p>
        <div className="box-video mt-4">
          <iframe src="https://www.youtube.com/embed/O4udI1E9GDg" allowFullScreen></iframe>
        </div>

        <div className="buttons">
          <Link to="/whatsapp/episodio/7">
            <button className="btn btn_amarelo mt-5">Ver +dicas</button>
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
