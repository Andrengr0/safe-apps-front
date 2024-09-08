import React from 'react';
import Quiz from '@/components/quizz';

const QuizzWhatsapp: React.FC = () => {
  // Questões do quiz antigo adaptadas para o formato do componente Quiz
  const questions = [
    {
      id: 1,
      question: 'Suponha que meu nome seja Roberto, indique qual modelo de senha mais forte e mais adequado para minha segurança:',
      options: ['roberto123', 'Robertinho', '@R0berto32!#', 'Roberto54321', 'robertosilva'],
      correctAnswer: '@R0berto32!#'
    },
    {
      id: 2,
      question: 'Marque uma boa funcionalidade do recurso de bloqueio de conversa no WhatsApp:',
      options: [
        'Fazer uma verificação de duas etapas',
        'Mais privacidade e segurança para determinada conversa',
        'Evitar que o celular seja roubado',
        'Apenas uma maneira legal de personalizar a conversa',
        'Não há funcionalidade nenhuma'
      ],
      correctAnswer: 'Mais privacidade e segurança para determinada conversa'
    },
    {
      id: 3,
      question: 'Por que não se deve conectar o aparelho em redes Wi-Fi públicas?',
      options: [
        'Devemos sim conectar o celular nas redes Wi-Fi públicas pois elas têm melhores sinais.',
        'Esses tipos de rede apenas deixam nossa navegação na internet mais lenta.',
        'Nessas redes a bateria do celular cai rapidamente.',
        'Nas redes Wi-Fi públicas muitos usuários podem se conectar livremente, e entre elas pessoas mal-intencionadas que podem querer roubar dados de outros usuários da rede.',
        'Não há nenhum problema em se conectar nas redes Wi-Fi públicas.'
      ],
      correctAnswer: 'Nas redes Wi-Fi públicas muitos usuários podem se conectar livremente, e entre elas pessoas mal-intencionadas que podem querer roubar dados de outros usuários da rede.'
    },
    {
      id: 4,
      question: 'Marque a opção que indica a utilidade de manter nossos aplicativos atualizados:',
      options: [
        'Atualizando os aplicativos estes podem vir com algum recurso a mais de segurança, o que é interessante para manter a privacidade dos dados.',
        'Não possui nenhuma utilidade.',
        'Os aplicativos ficam somente mais bonitos.',
        'Serve para deixar os aplicativos mais simples de usar.',
        'Atualizações de aplicativos não trazem segurança.'
      ],
      correctAnswer: 'Atualizando os aplicativos estes podem vir com algum recurso a mais de segurança, o que é interessante para manter a privacidade dos dados.'
    },
    {
      id: 5,
      question: 'Roberto recebe uma mensagem de um número desconhecido no WhatsApp, este número lhe propõe entrar em um link, alegando que ao clicar Roberto ganhará um carro. Que ação Roberto deve tomar?',
      options: [
        'Roberto deve compartilhar o número para que outras pessoas conversem com ele.',
        'Roberto deve conversar mais com o desconhecido e passar seus documentos.',
        'Roberto deve entrar no link e compartilhar números de outros familiares a este número para que eles também ganhem um carro.',
        'Roberto deve entrar no link pois com certeza irá ganhar um carro.',
        'Roberto deve procurar bloquear o número pois este deve tratar de algum golpe ou link com vírus que pode comprometer a segurança de seu celular.'
      ],
      correctAnswer: 'Roberto deve procurar bloquear o número pois este deve tratar de algum golpe ou link com vírus que pode comprometer a segurança de seu celular.'
    }
  ];

  // Função para tratar o envio do quiz
  const handleQuizSubmit = (score: number) => {
    alert(`Você acertou ${score} de ${questions.length} questões!`);
  };

  return (
    <div>
      <h1>Episódio #01 - Whatsapp: Medidas Protetivas</h1>
      <Quiz questions={questions} onSubmit={handleQuizSubmit} />
    </div>
  );
};

export default QuizzWhatsapp;
