import React from 'react';
import { Link } from 'react-router-dom';
import './InstagramScreen.css';

const Episodio_1: React.FC = () => {
  return (
    <div className="instagram-screen">
      <div className="instagram-container">
        <h1 className="cabecalho">Episódio #01 - Instagram</h1>
        <h2 className="subtitle">Vamos aos primeiros passos para deixar seu Instagram mais seguro:</h2>

        <div className="box-video">
          <iframe src="https://www.youtube.com/embed/Za8O9Rr567o?si=QrF0BUEUmY4tbhR1" allowFullScreen></iframe>
        </div>

        <p className="box-write">
          A seguir teremos um vídeo contento um tutorial mostrando algumas dicas para tornar seu aplicativo do Instagram mais seguro, a fim de lhe conscientizar sobre a segurança no do seu dispositivo.
        </p>

        <div className="box-video">
          <iframe src="https://www.youtube.com/embed/psd9Pcc1J90?si=PIMBbPm4UskLFNKv" allowFullScreen></iframe>
        </div>

        <h6 className='description mt-4' style={{textAlign: 'center'}}>Está pronto para um desafio?</h6>

        <div className="buttons">
          <Link to="/instagram/episodio/2">
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

export default Episodio_1;
