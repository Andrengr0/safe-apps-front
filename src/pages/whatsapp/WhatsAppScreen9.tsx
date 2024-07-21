import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WhatsAppScreen.css';

const WhatsAppScreen9: React.FC = () => {
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
    <div className="whatsapp-screen">
      <div className="whatsapp-container">
        <h1 className="cabecalho">Episódio #01 - Whatsapp: medidas protetivas</h1>
        <div className="content-quizz">
          <h5>Suponha que meu nome seja Roberto, indique qual modelo de senha mais forte e mais adequado para minha segurança:</h5>
          <div className="radio-group">
            <input id="c1_01" className="radio-input" type="radio" name="pg1" value="1" onChange={handleResponseChange} />
            <label htmlFor="c1_01" className="radio-label c1_1">roberto123</label>
          </div>
          <div className="radio-group">
            <input id="c1_02" className="radio-input" type="radio" name="pg1" value="2" onChange={handleResponseChange} />
            <label htmlFor="c1_02" className="radio-label c1_2">Robertinho</label>
          </div>
          <div className="radio-group">
            <input id="c1_03" className="radio-input" type="radio" name="pg1" value="3" onChange={handleResponseChange} />
            <label htmlFor="c1_03" className="radio-label c1_3">@R0berto32!#</label>
          </div>
          <div className="radio-group">
            <input id="c1_04" className="radio-input" type="radio" name="pg1" value="4" onChange={handleResponseChange} />
            <label htmlFor="c1_04" className="radio-label c1_4">Roberto54321</label>
          </div>
          <div className="radio-group">
            <input id="c1_05" className="radio-input" type="radio" name="pg1" value="5" onChange={handleResponseChange} />
            <label htmlFor="c1_05" className="radio-label c1_5">robertosilva</label>
          </div>
        </div>

        <div className="content-quizz">
          <h5>Marque uma boa funcionalidade do recurso de bloqueio de conversa no whatsapp:</h5>
          <div className="radio-group">
            <input id="c2_01" className="radio-input" type="radio" name="pg2" value="1" onChange={handleResponseChange} />
            <label htmlFor="c2_01" className="radio-label c2_1">Fazer uma verificação de duas etapas</label>
          </div>
          <div className="radio-group">
            <input id="c2_02" className="radio-input" type="radio" name="pg2" value="2" onChange={handleResponseChange} />
            <label htmlFor="c2_02" className="radio-label c2_2">Mais privacidade e segurança para determinada conversa</label>
          </div>
          <div className="radio-group">
            <input id="c2_03" className="radio-input" type="radio" name="pg2" value="3" onChange={handleResponseChange} />
            <label htmlFor="c2_03" className="radio-label c2_3">Evitar que o celular seja roubado</label>
          </div>
          <div className="radio-group">
            <input id="c2_04" className="radio-input" type="radio" name="pg2" value="4" onChange={handleResponseChange} />
            <label htmlFor="c2_04" className="radio-label c2_4">Apenas uma maneira legal de personalizar a conversa</label>
          </div>
          <div className="radio-group">
            <input id="c2_05" className="radio-input" type="radio" name="pg2" value="5" onChange={handleResponseChange} />
            <label htmlFor="c2_05" className="radio-label c2_5">Não há funcionalidade nenhuma</label>
          </div>
        </div>

        <div className="content-quizz">
          <h5>Por que não se deve conectar o aparelho em redes WI-FI públicas?</h5>
          <div className="radio-group">
            <input id="c3_01" className="radio-input" type="radio" name="pg3" value="1" onChange={handleResponseChange} />
            <label htmlFor="c3_01" className="radio-label c3_1">Devemos sim conectar o celular nas redes WI-Fi públicas pois elas têm melhores sinais.</label>
          </div>
          <div className="radio-group">
            <input id="c3_02" className="radio-input" type="radio" name="pg3" value="2" onChange={handleResponseChange} />
            <label htmlFor="c3_02" className="radio-label c3_2">Esses tipos de rede apenas deixam nossa navegação na internet mais lenta.</label>
          </div>
          <div className="radio-group">
            <input id="c3_03" className="radio-input" type="radio" name="pg3" value="3" onChange={handleResponseChange} />
            <label htmlFor="c3_03" className="radio-label c3_3">Nessas redes a bateria do celular cai rapidamente.</label>
          </div>
          <div className="radio-group">
            <input id="c3_04" className="radio-input" type="radio" name="pg3" value="4" onChange={handleResponseChange} />
            <label htmlFor="c3_04" className="radio-label c3_4">Nas redes WI-FI públicas muitos usuários podem se conectar livremente, e entre elas pessoas mal-intencionadas que podem querer roubar dados de outros usuários da rede.</label>
          </div>
          <div className="radio-group">
            <input id="c3_05" className="radio-input" type="radio" name="pg3" value="5" onChange={handleResponseChange} />
            <label htmlFor="c3_05" className="radio-label c3_5">Não há nenhum problema em se conectar nas redes WI-FI públicas.</label>
          </div>
        </div>

        <div className="content-quizz">
          <h5>Marque a opção que indica a utilidade de manter nossos aplicativos atualizados:</h5>
          <div className="radio-group">
            <input id="c4_01" className="radio-input" type="radio" name="pg4" value="1" onChange={handleResponseChange} />
            <label htmlFor="c4_01" className="radio-label c4_1">Atualizando os aplicativos estes podem vir com algum recurso á mais de segurança, o que é interessante para manter a privacidade dos dados.</label>
          </div>
          <div className="radio-group">
            <input id="c4_02" className="radio-input" type="radio" name="pg4" value="2" onChange={handleResponseChange} />
            <label htmlFor="c4_02" className="radio-label c4_2">Não possui nenhuma utilidade.</label>
          </div>
          <div className="radio-group">
            <input id="c4_03" className="radio-input" type="radio" name="pg4" value="3" onChange={handleResponseChange} />
            <label htmlFor="c4_03" className="radio-label c4_3">Os aplicativos ficam somente mais bonitos.</label>
          </div>
          <div className="radio-group">
            <input id="c4_04" className="radio-input" type="radio" name="pg4" value="4" onChange={handleResponseChange} />
            <label htmlFor="c4_04" className="radio-label c4_4">Serve para deixar os aplicativos mais simples de usar.</label>
          </div>
          <div className="radio-group">
            <input id="c4_05" className="radio-input" type="radio" name="pg4" value="5" onChange={handleResponseChange} />
            <label htmlFor="c4_05" className="radio-label c4_5">Atualizações de aplicativos não trazem segurança.</label>
          </div>
        </div>

        <div className="content-quizz">
          <h5>Roberto recebe uma mensagem de um número desconhecido no whatsapp, este número lhe propõe entrar em um link, alegando que ao clicar Roberto ganhará um carro. Que ação Roberto deve tomar?</h5>
          <div className="radio-group">
            <input id="c5_01" className="radio-input" type="radio" name="pg5" value="1" onChange={handleResponseChange} />
            <label htmlFor="c5_01" className="radio-label c5_1">Roberto deve compartilhar o número para que outras pessoas conversem com ele.</label>
          </div>
          <div className="radio-group">
            <input id="c5_02" className="radio-input" type="radio" name="pg5" value="2" onChange={handleResponseChange} />
            <label htmlFor="c5_02" className="radio-label c5_2">Roberto deve conversar mais com o desconhecido e passar seus documentos.</label>
          </div>
          <div className="radio-group">
            <input id="c5_03" className="radio-input" type="radio" name="pg5" value="3" onChange={handleResponseChange} />
            <label htmlFor="c5_03" className="radio-label c5_3">Roberto deve entrar no link e compartilhar números de outros familiares a este número para que eles também ganhem um carro.</label>
          </div>
          <div className="radio-group">
            <input id="c5_04" className="radio-input" type="radio" name="pg5" value="4" onChange={handleResponseChange} />
            <label htmlFor="c5_04" className="radio-label c5_4">Roberto deve entrar no link pois com certeza irá ganhar um carro.</label>
          </div>
          <div className="radio-group">
            <input id="c5_05" className="radio-input" type="radio" name="pg5" value="5" onChange={handleResponseChange} />
            <label htmlFor="c5_05" className="radio-label c5_5">Roberto deve procurar bloquear o número pois este deve tratar de algum golpe ou link com vírus que pode comprometer a segurança de seu celular.</label>
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

export default WhatsAppScreen9;
