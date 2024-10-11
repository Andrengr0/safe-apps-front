import React from 'react';
import { Link } from 'react-router-dom';
import './InstagramScreen.css';

const Episodio_3: React.FC = () => {
  return (
    <div className="instagram-screen">
      <div className="instagram-container">
        <h1 className="cabecalho">Episódio #03 - Instagram</h1>
        <div className="card">
          <h2>PARABÉNS!!!</h2>
          <h4>Você concluiu o primeiro desafio e está no caminho certo, tornando seu aplicativo mais seguro!</h4>
        </div>

        <div className="buttons">
          <Link to="/instagram/episodio/4">
            <button className="btn btn_amarelo">Próxima fase</button>
          </Link>
          <Link to="/instagram/episodio/2">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_3;
