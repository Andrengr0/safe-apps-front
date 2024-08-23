import React from 'react';
import { Link } from 'react-router-dom';
import './InstagramScreen.css';
import hackerImg from './images/vista-frontal-do-hacker.jpg';
import wifiImg from './images/wifi-publico.png';

const Episodio_7: React.FC = () => {
  return (
    <div className="instagram-screen">
      <div className="instagram-container">
        <h1 className="cabecalho">Episódio #02 - Instagram: medidas protetivas</h1>
        <h4 className="description text-center">Agora vamos observar dicas adicionais para fortalecer a segurança do seu aplicativo:</h4>

        <div className="box-write">
          <p>1. Limite o acesso de terceiros: Gerencie o acesso de terceiros à sua conta do Instagram e retire o acesso a aplicativos que você não usa mais. Quanto mais cuidado com esse acesso, menos chance de ter dados vazados.</p>
        </div>

        <div className="box-write">
          <p>2. Não compartilhe informações pessoais: Não compartilhe informações pessoais, como senhas, números de telefone, endereços e outras informações confidenciais no Instagram.</p>
          <img src={hackerImg} alt="Hacker" className="full-img"/>
        </div>

        <div className="box-write">
          <p>3. Evite utilizar seu aparelho em redes WI-FI públicas, pois elas têm livre acesso a qualquer pessoa, e pessoas mal-intencionadas podem se aproveitar disso.</p>
          <img src={wifiImg} alt="Wi-Fi" style={{ maxWidth: '100%', height: 'auto' }} className="left-img"/>
        </div>

        <div className="box-write">
          <p>4. Tenha cuidado ao clicar em links: Não clique em links suspeitos ou desconhecidos que você recebe no Instagram, pois isso pode levar a sites maliciosos que podem infectar seu dispositivo com malware.</p>
        </div>

        <div className="buttons">
          <Link to="/instagram/8">
            <button className="btn btn_amarelo">Avançar</button>
          </Link>
          <Link to="/instagram/6">
            <button className="btn btn_cinza">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Episodio_7;
