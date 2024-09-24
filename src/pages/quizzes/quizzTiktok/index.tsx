import React from 'react';
import Quiz from '@/components/quizz';
import '../QuizTema.css';

const QuizzTikTok: React.FC = () => {
  // Questões do quiz
  const questions = [
    {
      id: 1,
      question: 'Por que é fundamental proteger suas informações no TikTok?',
      options: [
        'Para garantir que seus vídeos tenham mais visualizações.',
        'Para evitar que suas informações pessoais sejam usadas para fraudes ou roubos de identidade.',
        'Porque o TikTok exige isso para liberar novos filtros.',
        'Proteger informações ajuda a aumentar o número de curtidas nos vídeos.',
        'Não é necessário proteger suas informações, pois o TikTok já faz isso por você.'
      ],
      correctAnswer: 'Para evitar que suas informações pessoais sejam usadas para fraudes ou roubos de identidade.'
    },
    {
      id: 2,
      question: 'Qual é a vantagem de ativar a verificação em duas etapas no TikTok?',
      options: [
        'A verificação em duas etapas impede que outras pessoas acessem sua conta mesmo que saibam sua senha.',
        'Ativar essa verificação permite acessar filtros exclusivos.',
        'A verificação em duas etapas faz com que seus vídeos sejam recomendados com mais frequência.',
        'Isso ajuda a aumentar o número de seguidores.',
        'Com essa verificação, você pode acessar vídeos que não estão disponíveis publicamente.'
      ],
      correctAnswer: 'A verificação em duas etapas impede que outras pessoas acessem sua conta mesmo que saibam sua senha.'
    },
    {
      id: 3,
      question: 'O que são os alertas de segurança no TikTok e por que você deve prestar atenção neles?',
      options: [
        'São alertas que indicam quando novos vídeos estão disponíveis.',
        'Esses alertas avisam sobre possíveis tentativas de invasão ou comportamento suspeito na sua conta.',
        'Alertas de segurança são apenas notificações sobre mudanças de design no aplicativo.',
        'Eles servem para avisar quando alguém curtiu seus vídeos.',
        'Esses alertas não têm importância e podem ser ignorados.'
      ],
      correctAnswer: 'Esses alertas avisam sobre possíveis tentativas de invasão ou comportamento suspeito na sua conta.'
    },
    {
      id: 4,
      question: 'Por que é importante manter o TikTok atualizado?',
      options: [
        'Manter o TikTok atualizado garante acesso aos desafios mais recentes.',
        'Atualizações trazem novos filtros, músicas e aumentam a segurança do aplicativo.',
        'Atualizar o TikTok garante mais visualizações nos seus vídeos.',
        'A atualização do aplicativo melhora apenas a velocidade de carregamento dos vídeos.',
        'Não é necessário atualizar o TikTok com frequência.'
      ],
      correctAnswer: 'Atualizações trazem novos filtros, músicas e aumentam a segurança do aplicativo.'
    },
    {
      id: 5,
      question: 'Por que é importante usar senhas fortes no TikTok?',
      options: [
        'Senhas fortes garantem que sua conta do TikTok esteja segura contra invasores.',
        'Senhas fortes ajudam a melhorar a qualidade dos seus vídeos.',
        'Com uma senha forte, seus vídeos serão mais recomendados.',
        'Senhas fortes garantem mais seguidores.',
        'Senhas fortes aumentam o número de curtidas que você recebe.'
      ],
      correctAnswer: 'Senhas fortes garantem que sua conta do TikTok esteja segura contra invasores.'
    }
  ];

  return (
    <div className='quizz-tema-tiktok'>
      <h1 className='tittle-quizz-tema'>Quiz TikTok</h1>
      <Quiz questions={questions} quizTitle="TikTok" />  
    </div>
  );
};

export default QuizzTikTok;
