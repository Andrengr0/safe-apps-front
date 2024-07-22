import React, { useState } from 'react';
import './InstagramScreen.css';

const InstagramScreen9: React.FC = () => {
  const [responses, setResponses] = useState({ pg1: '', pg2: '', pg3: '', pg4: '', pg5: '' });
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState<number | null>(null);

  const handleResponseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResponses({
      ...responses,
      [name]: value
    });
  };

  const handleSubmit = () => {
    let acertos = 0;
    const correctAnswers = {
      pg1: '3',
      pg2: '2',
      pg3: '4',
      pg4: '1',
      pg5: '5'
    };

    Object.keys(correctAnswers).forEach((key) => {
      const question = key as keyof typeof correctAnswers;
      if (responses[question] === correctAnswers[question]) {
        acertos += 1;
        document.querySelector(`.c${correctAnswers[question]}`)?.classList.add('correct');
      } else {
        document.querySelector(`.c${responses[question]}`)?.classList.add('incorrect');
        document.querySelector(`.c${correctAnswers[question]}`)?.classList.add('correct');
      }
    });

    const porc_acertos = (acertos / 5) * 100;
    setScore(porc_acertos);

    let feedbackMessage = '';
    if (porc_acertos <= 30) {
      feedbackMessage = 'Foi um mal desempenho, tente rever e prestar mais atenção nas informações, e pesquise mais sobre o assunto.';
    } else if (porc_acertos <= 50) {
      feedbackMessage = 'Não foi um desempenho legal, mas você pode melhorar mais, se atente melhor as informações e procure pesquisar mais sobre o assunto.';
    } else if (porc_acertos <= 70) {
      feedbackMessage = 'Desempenho regular! Se puder rever as informações e puder entender melhor, será ótimo!';
    } else if (porc_acertos <= 95) {
      feedbackMessage = 'Ótimo desempenho!!! Você demonstra boa compreensão sobre segurança digital, continue com seu estudo para se tornar fera no assunto.';
    } else if (porc_acertos <= 100) {
      feedbackMessage = 'Você está CRAQUE na segurança digital, compreende muito bem os conceitos e informações, não deixe de estudar e assim sempre se atualize no assunto.';
    }

    setFeedback(feedbackMessage);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="instagram-screen">
      <div className="instagram-container">
        <h1 className="cabecalho">Episódio #02 - Instagram: medidas protetivas</h1>
        <div className="content-quizz">
          <h5>Sobre o recurso para deixar a conta "privada" no Instagram, qual sua serventia?</h5>
          <div className="radio-group">
            <input id="c1_01" className="radio-input" type="radio" name="pg1" value="1" onChange={handleResponseChange} />
            <label htmlFor="c1_01" className="radio-label c1_1">Deixando a conta privada perdemos todo o controle sobre quem visita e interage com nosso perfil.</label>
          </div>
          <div className="radio-group">
            <input id="c1_02" className="radio-input" type="radio" name="pg1" value="2" onChange={handleResponseChange} />
            <label htmlFor="c1_02" className="radio-label c1_2">Com a conta em modo privado, ganhamos mais descontos ao realizar compras pelo Instagram, economizando muito dinheiro.</label>
          </div>
          <div className="radio-group">
            <input id="c1_03" className="radio-input" type="radio" name="pg1" value="3" onChange={handleResponseChange} />
            <label htmlFor="c1_03" className="radio-label c1_3">Serve para o usuário ter mais controle sobre quem entra no seu perfil, e assim obtendo mais segurança.</label>
          </div>
          <div className="radio-group">
            <input id="c1_04" className="radio-input" type="radio" name="pg1" value="4" onChange={handleResponseChange} />
            <label htmlFor="c1_04" className="radio-label c1_4">Não possui nenhuma utilidade em deixar a conta do Instagram privada.</label>
          </div>
          <div className="radio-group">
            <input id="c1_05" className="radio-input" type="radio" name="pg1" value="5" onChange={handleResponseChange} />
            <label htmlFor="c1_05" className="radio-label c1_5">Esse recurso não serve pois deixa a conta mais vulnerável a ataques de hackers, o que não é benefício algum.</label>
          </div>
        </div>

        <div className="content-quizz">
          <h5>Por que se deve gerenciar o acesso de outras pessoas na nossa conta?</h5>
          <div className="radio-group">
            <input id="c2_01" className="radio-input" type="radio" name="pg2" value="1" onChange={handleResponseChange} />
            <label htmlFor="c2_01" className="radio-label c2_1">As outras pessoas que acessam a conta podem iniciar conversas aleatórias com alguém que não gosto.</label>
          </div>
          <div className="radio-group">
            <input id="c2_02" className="radio-input" type="radio" name="pg2" value="2" onChange={handleResponseChange} />
            <label htmlFor="c2_02" className="radio-label c2_2">As outras pessoas que acessam a conta podem acabar fornecendo meus dados a terceiros, o que pode acontecer de roubarem os dados dessa conta.</label>
          </div>
          <div className="radio-group">
            <input id="c2_03" className="radio-input" type="radio" name="pg2" value="3" onChange={handleResponseChange} />
            <label htmlFor="c2_03" className="radio-label c2_3">É impossível compartilhar a mesma conta no Instagram, outras pessoas não possuem acesso de jeito nenhum.</label>
          </div>
          <div className="radio-group">
            <input id="c2_04" className="radio-input" type="radio" name="pg2" value="4" onChange={handleResponseChange} />
            <label htmlFor="c2_04" className="radio-label c2_4">As outras pessoas que acessam podem fazer uma compra indesejada utilizando meu perfil.</label>
          </div>
          <div className="radio-group">
            <input id="c2_05" className="radio-input" type="radio" name="pg2" value="5" onChange={handleResponseChange} />
            <label htmlFor="c2_05" className="radio-label c2_5">Não existe nenhuma preocupação nisso.</label>
          </div>
        </div>

        <div className="content-quizz">
          <h5>Suponha a seguinte situação: José está conversando com um vendedor de celular que encontrou por acaso no Instagram e está conversando com ele no bate-papo, quais os cuidados que José deve tomar?</h5>
          <div className="radio-group">
            <input id="c3_01" className="radio-input" type="radio" name="pg3" value="1" onChange={handleResponseChange} />
            <label htmlFor="c3_01" className="radio-label c3_1">Ele deve antes de tudo fazer o pagamento antecipado do produto, para que aquele perfil possa lhe atender melhor.</label>
          </div>
          <div className="radio-group">
            <input id="c3_02" className="radio-input" type="radio" name="pg3" value="2" onChange={handleResponseChange} />
            <label htmlFor="c3_02" className="radio-label c3_2">José deve compartilhar com o vendedor todos os dados pessoais sem se importar se o perfil é de confiança ou não.</label>
          </div>
          <div className="radio-group">
            <input id="c3_03" className="radio-input" type="radio" name="pg3" value="3" onChange={handleResponseChange} />
            <label htmlFor="c3_03" className="radio-label c3_3">José pode passar seu número de WhatsApp no início da conversa, para ter uma melhor comunicação.</label>
          </div>
          <div className="radio-group">
            <input id="c3_04" className="radio-input" type="radio" name="pg3" value="4" onChange={handleResponseChange} />
            <label htmlFor="c3_04" className="radio-label c3_4">Ele não deve compartilhar com o vendedor nenhum dado pessoal como: número de cartão e senha do mesmo, senha de conta bancária, etc.</label>
          </div>
          <div className="radio-group">
            <input id="c3_05" className="radio-input" type="radio" name="pg3" value="5" onChange={handleResponseChange} />
            <label htmlFor="c3_05" className="radio-label c3_5">José não deve se preocupar com nada pois todos os perfis do Instagram são seguros.</label>
          </div>
        </div>

        <div className="content-quizz">
          <h5>José agora visitou um perfil sem foto alguma e poucas informações sobre ele, mas nesse perfil tem um link, onde o usuário diz que há uma oportunidade de ganhar muito dinheiro ao clicar nele, o que José deve fazer?</h5>
          <div className="radio-group">
            <input id="c4_01" className="radio-input" type="radio" name="pg4" value="1" onChange={handleResponseChange} />
            <label htmlFor="c4_01" className="radio-label c4_1">Não entrar no link pois provavelmente será algum golpe ou vírus que pode infectar seu celular e roubar seus dados.</label>
          </div>
          <div className="radio-group">
            <input id="c4_02" className="radio-input" type="radio" name="pg4" value="2" onChange={handleResponseChange} />
            <label htmlFor="c4_02" className="radio-label c4_2">José deve além de clicar no link, também compartilhar para outras pessoas conhecidas, para que elas também ganhem dinheiro.</label>
          </div>
          <div className="radio-group">
            <input id="c4_03" className="radio-input" type="radio" name="pg4" value="3" onChange={handleResponseChange} />
            <label htmlFor="c4_03" className="radio-label c4_3">Ele deve clicar no link pois com certeza há muito dinheiro para ganhar e usar para fazer compras.</label>
          </div>
          <div className="radio-group">
            <input id="c4_04" className="radio-input" type="radio" name="pg4" value="4" onChange={handleResponseChange} />
            <label htmlFor="c4_04" className="radio-label c4_4">José pode conversar com aquele usuário e tentar oferecer seus dados de documentos pessoais.</label>
          </div>
          <div className="radio-group">
            <input id="c4_05" className="radio-input" type="radio" name="pg4" value="5" onChange={handleResponseChange} />
            <label htmlFor="c4_05" className="radio-label c4_5">José deve procurar saber com aquele usuário qual a quantia de dinheiro a ganhar.</label>
          </div>
        </div>

        <div className="content-quizz">
          <h5>Quando procura-se por algum perfil que venda certo produto, que cuidados eu devo ter?</h5>
          <div className="radio-group">
            <input id="c5_01" className="radio-input" type="radio" name="pg5" value="1" onChange={handleResponseChange} />
            <label htmlFor="c5_01" className="radio-label c5_1">Todos os perfis de venda no Instagram são seguros.</label>
          </div>
          <div className="radio-group">
            <input id="c5_02" className="radio-input" type="radio" name="pg5" value="2" onChange={handleResponseChange} />
            <label htmlFor="c5_02" className="radio-label c5_2">Tenho que observar se o perfil o qual estou interessado possui boa conversa de venda, caso contrário não entro mais em contato.</label>
          </div>
          <div className="radio-group">
            <input id="c5_03" className="radio-input" type="radio" name="pg5" value="3" onChange={handleResponseChange} />
            <label htmlFor="c5_03" className="radio-label c5_3">Me atento apenas se o perfil tem muitos seguidores, sem me importar se tem boas avaliações ou não.</label>
          </div>
          <div className="radio-group">
            <input id="c5_04" className="radio-input" type="radio" name="pg5" value="4" onChange={handleResponseChange} />
            <label htmlFor="c5_04" className="radio-label c5_4">Nenhum perfil do Instagram é confiável para fazer negócio.</label>
          </div>
          <div className="radio-group">
            <input id="c5_05" className="radio-input" type="radio" name="pg5" value="5" onChange={handleResponseChange} />
            <label htmlFor="c5_05" className="radio-label c5_5">Devo observar principalmente se o perfil tem muitos seguidores, e analisar os comentários sobre este, se são positivos ou negativos, tentar observar também informações que comprovem que a atividade daquele perfil é legalizada.</label>
          </div>
        </div>

        <button id="btn-responder" className="btn-responder mt-4 mb-4" onClick={handleSubmit}>Concluir</button>

        {score !== null && (
          <div className="box-resultado">
            <h3>Seu acerto foi de {score}%</h3>
            <h6>{feedback}</h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstagramScreen9;
