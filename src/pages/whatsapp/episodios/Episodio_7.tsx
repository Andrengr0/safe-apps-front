import React from 'react';
import { Link } from 'react-router-dom';
import './WhatsAppScreen.css';
import hackerImg from './images/hacker_roubando_informacoes_celular.jpg';
import jovensImg from './images/jovens_no_celular.jpg';
import wifiImg from './images/simbolo_wifi_free2.png';

const Episodio_7: React.FC = () => {
  return (
    <div className="whatsapp-screen">
      <div className="whatsapp-container">
        <h1 className="cabecalho">Episódio #01 - Whatsapp: medidas protetivas</h1>
        <h4 className="description text-center">Agora vamos observar dicas adicionais para fortalecer a segurança do seu aplicativo:</h4>

        <div className="box-write">
          <img className='left-img' src={hackerImg} alt="Hacker"/>
          <p>1. Não clique em links suspeitos: Não clique em links suspeitos ou desconhecidos que você recebe no WhatsApp, pois isso pode levar a sites maliciosos que podem infectar o seu aparelho com malware, um tipo de programa malicioso que infecta seu dispositivo com intenção de roubar dados.</p>
        </div>

        <div className="box-write">
          <p>2. Não compartilhe informações pessoais: Não compartilhe informações pessoais, como senhas, números de telefone, endereços e outras informações confidenciais no WhatsApp.</p>
          <img src={jovensImg} alt="Jovens" className="full-img"/>
        </div>

        <div className="box-write">
          <p>3. Evite utilizar seu aparelho em redes WI-FI públicas, pois elas têm livre acesso a qualquer pessoa, e pessoas mal-intencionadas podem se aproveitar disso.</p>
          <img src={wifiImg} alt="Wi-Fi" className="left-img"/>
        </div>

        <div className="buttons">
          <Link to="/whatsapp/8">
            <button className="btn btn_amarelo mt-5">Avançar</button>
          </Link>
          <Link to="/whatsapp/6">
            <button className="btn btn_cinza mt-4 mb-5">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_7;
