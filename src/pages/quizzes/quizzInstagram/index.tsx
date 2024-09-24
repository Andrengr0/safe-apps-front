import React from 'react';
import Quiz from '@/components/quizz';
import '../QuizTema.css';

const QuizzInstagram: React.FC = () => {
  // Questões do quiz
  const questions = [
    {
      id: 1,
      question: 'Qual é o principal benefício de tornar a conta "privada" no Instagram?',
      options: [
        'Perdemos o controle sobre quem pode visualizar e interagir com nosso perfil.',
        'Tornar a conta privada garante descontos em compras no Instagram.',
        'A conta privada oferece mais controle sobre quem pode visualizar suas postagens, aumentando a privacidade e segurança.',
        'Não há utilidade em deixar a conta do Instagram privada.',
        'Tornar a conta privada aumenta a chance de ataques de hackers.'
      ],
      correctAnswer: 'A conta privada oferece mais controle sobre quem pode visualizar suas postagens, aumentando a privacidade e segurança.'
    },
    {
      id: 2,
      question: 'Por que é importante gerenciar quem tem acesso à sua conta no Instagram?',
      options: [
        'As pessoas que acessam sua conta podem iniciar conversas com contatos que você não conhece.',
        'As pessoas que acessam sua conta podem acabar compartilhando seus dados pessoais, o que pode resultar em roubo de identidade ou fraudes.',
        'Compartilhar a conta do Instagram é impossível, então não há risco.',
        'As pessoas podem fazer compras indevidas usando sua conta.',
        'Não há nenhum risco em compartilhar sua conta.'
      ],
      correctAnswer: 'As pessoas que acessam sua conta podem acabar compartilhando seus dados pessoais, o que pode resultar em roubo de identidade ou fraudes.'
    },
    {
      id: 3,
      question: 'José está conversando com um vendedor de celular pelo Instagram. Quais precauções ele deve tomar?',
      options: [
        'Deve realizar o pagamento antecipado para garantir o atendimento rápido.',
        'Compartilhar seus dados pessoais, como endereço e documentos, para agilizar a compra.',
        'Passar seu número de WhatsApp no início da conversa para facilitar a comunicação.',
        'Evitar compartilhar qualquer informação sensível, como número de cartão, senha ou dados bancários.',
        'Não há necessidade de cautela, pois todos os perfis de venda no Instagram são confiáveis.'
      ],
      correctAnswer: 'Evitar compartilhar qualquer informação sensível, como número de cartão, senha ou dados bancários.'
    },
    {
      id: 4,
      question: 'José encontrou um perfil sem foto e poucas informações, que contém um link prometendo muito dinheiro. O que ele deve fazer?',
      options: [
        'Não clicar no link, pois pode ser um golpe ou conter vírus que rouba dados pessoais.',
        'Clicar no link e compartilhar com amigos para que eles também possam ganhar dinheiro.',
        'Entrar no link, pois é uma oportunidade única de ganhar dinheiro facilmente.',
        'Conversar com o dono do perfil e oferecer seus dados pessoais para obter mais detalhes.',
        'Procurar saber qual é a quantia de dinheiro oferecida antes de tomar qualquer decisão.'
      ],
      correctAnswer: 'Não clicar no link, pois pode ser um golpe ou conter vírus que rouba dados pessoais.'
    },
    {
      id: 5,
      question: 'Ao procurar perfis de venda de produtos no Instagram, quais são os cuidados essenciais?',
      options: [
        'Todos os perfis de venda no Instagram são seguros.',
        'Deve-se observar se o perfil tem muitos seguidores e ignorar a qualidade das avaliações.',
        'O mais importante é verificar os comentários e avaliações, além de garantir que o perfil tenha informações de contato confiáveis e legais.',
        'Nenhum perfil no Instagram é seguro para fazer compras.',
        'Basta se concentrar no preço e na disponibilidade do produto, sem se preocupar com a origem do perfil.'
      ],
      correctAnswer: 'O mais importante é verificar os comentários e avaliações, além de garantir que o perfil tenha informações de contato confiáveis e legais.'
    },
    {
      id: 6,
      question: 'Por que é importante ativar a autenticação de dois fatores (2FA) no Instagram?',
      options: [
        'A autenticação de dois fatores (2FA) impede que qualquer pessoa acesse sua conta sem uma segunda verificação, como um código enviado ao seu celular.',
        'Ativar o 2FA reduz a quantidade de notificações que você recebe.',
        'Com 2FA ativado, você pode aumentar o número de seguidores.',
        '2FA melhora a qualidade das fotos postadas no Instagram.',
        'Não há necessidade de ativar 2FA, já que senhas são suficientes.'
      ],
      correctAnswer: 'A autenticação de dois fatores (2FA) impede que qualquer pessoa acesse sua conta sem uma segunda verificação, como um código enviado ao seu celular.'
    },
    {
      id: 7,
      question: 'Quais práticas ajudam a proteger sua conta no Instagram contra invasões?',
      options: [
        'Usar senhas simples e fáceis de lembrar, como "123456".',
        'Ativar a verificação em duas etapas (2FA) e evitar o uso de senhas compartilhadas.',
        'Deixar seu perfil público para aumentar a quantidade de seguidores.',
        'Aceitar qualquer solicitação de amizade sem verificar o perfil.',
        'Desativar todas as notificações de segurança.'
      ],
      correctAnswer: 'Ativar a verificação em duas etapas (2FA) e evitar o uso de senhas compartilhadas.'
    },
    {
      id: 8,
      question: 'Qual é a importância de evitar aceitar seguidores desconhecidos no Instagram?',
      options: [
        'Perfis desconhecidos geralmente trazem mais engajamento e aumentam sua visibilidade.',
        'Aceitar seguidores desconhecidos pode comprometer sua privacidade, pois eles podem acessar suas postagens e informações pessoais sem restrições.',
        'Não há problema em aceitar seguidores desconhecidos, desde que você tenha o perfil privado.',
        'Aceitar qualquer seguidor desconhecido aumenta a segurança do seu perfil.',
        'Seguidores desconhecidos podem ajudar a aumentar o número de curtidas em suas postagens.'
      ],
      correctAnswer: 'Aceitar seguidores desconhecidos pode comprometer sua privacidade, pois eles podem acessar suas postagens e informações pessoais sem restrições.'
    }
  ];

  return (
    <div className='quizz-tema-instagram'>
      <h1 className='tittle-quizz-tema'>Quiz Instagram</h1>
      <Quiz questions={questions} quizTitle="Instagram" />  
    </div>
  );
};

export default QuizzInstagram;
