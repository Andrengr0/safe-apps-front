import React from 'react';
import Quiz from '@/components/quizz';
import '../QuizTema.css'; // Verifique se o caminho está correto

const QuizzWhatsapp: React.FC = () => {
  // Questões do quiz
  const questions = [
    {
      id: 1,
      question: 'Suponha que meu nome seja Roberto. Qual das seguintes senhas é a mais forte e recomendada para proteger minhas contas digitais?',
      options: [
        'roberto123', 
        'Robertinho', 
        '@R0berto32!#', 
        'Roberto54321', 
        'robertosilva'
      ],
      correctAnswer: '@R0berto32!#'
    },
    {
      id: 2,
      question: 'Qual é o principal benefício de utilizar o recurso de bloqueio de conversa no WhatsApp?',
      options: [
        'Realizar uma verificação de duas etapas', 
        'Garantir mais privacidade e segurança para uma conversa específica', 
        'Impedir que o celular seja roubado', 
        'Servir como uma função estética para personalizar conversas', 
        'Nenhum benefício específico'
      ],
      correctAnswer: 'Garantir mais privacidade e segurança para uma conversa específica'
    },
    {
      id: 3,
      question: 'Por que não se deve conectar o aparelho a redes Wi-Fi públicas, especialmente ao usar aplicativos como o WhatsApp?',
      options: [
        'As redes Wi-Fi públicas garantem um sinal melhor, mas são menos seguras.', 
        'Essas redes apenas tornam a conexão mais lenta.', 
        'Elas podem fazer a bateria do celular acabar mais rápido.', 
        'Em redes Wi-Fi públicas, criminosos podem se conectar e roubar dados pessoais, como mensagens e informações bancárias.', 
        'Não há risco em se conectar a redes Wi-Fi públicas.'
      ],
      correctAnswer: 'Em redes Wi-Fi públicas, criminosos podem se conectar e roubar dados pessoais, como mensagens e informações bancárias.'
    },
    {
      id: 4,
      question: 'Qual é a importância de manter seus aplicativos, como o WhatsApp, sempre atualizados?',
      options: [
        'Atualizações podem incluir melhorias de segurança, ajudando a proteger seus dados e privacidade.', 
        'Atualizações não têm impacto na segurança, apenas na estética do aplicativo.', 
        'Apps atualizados gastam menos bateria.', 
        'Deixar o aplicativo mais bonito e fácil de usar.', 
        'Atualizações de aplicativos não influenciam na segurança.'
      ],
      correctAnswer: 'Atualizações podem incluir melhorias de segurança, ajudando a proteger seus dados e privacidade.'
    },
    {
      id: 5,
      question: 'Roberto recebe uma mensagem de um número desconhecido no WhatsApp oferecendo um prêmio se ele clicar em um link. Qual deve ser a atitude de Roberto?',
      options: [
        'Ignorar a mensagem e seguir sua vida normalmente.', 
        'Clicar no link e tentar compartilhar a promoção com familiares.', 
        'Bloquear o número e denunciar o incidente como um possível golpe.', 
        'Responder a mensagem para obter mais detalhes sobre o prêmio.', 
        'Compartilhar o número com amigos para ver se mais alguém recebe o prêmio.'
      ],
      correctAnswer: 'Bloquear o número e denunciar o incidente como um possível golpe.'
    },
    {
      id: 6,
      question: 'Qual medida de segurança adicional pode ser ativada no WhatsApp para proteger sua conta contra invasões?',
      options: [
        'Verificação em duas etapas, que adiciona uma camada extra de segurança ao solicitar um PIN periodicamente.', 
        'Usar uma senha curta e fácil de lembrar.', 
        'Manter o WhatsApp desconectado de redes Wi-Fi.', 
        'Utilizar sempre o mesmo PIN para facilitar o acesso.', 
        'Não compartilhar seu número de telefone com ninguém.'
      ],
      correctAnswer: 'Verificação em duas etapas, que adiciona uma camada extra de segurança ao solicitar um PIN periodicamente.'
    },
    {
      id: 7,
      question: 'O que pode acontecer se Roberto compartilhar seus dados pessoais com um número desconhecido no WhatsApp?',
      options: [
        'Nada, desde que ele confie no número.', 
        'Ele pode ganhar prêmios e promoções.', 
        'Seus dados podem ser usados para roubo de identidade e fraudes financeiras.', 
        'O desconhecido pode se tornar um amigo confiável.', 
        'Ele receberá mais promoções semelhantes.'
      ],
      correctAnswer: 'Seus dados podem ser usados para roubo de identidade e fraudes financeiras.'
    },
    {
      id: 8,
      question: 'Qual das práticas a seguir aumenta a segurança ao usar o WhatsApp Web em um computador público?',
      options: [
        'Deslogar da sessão de WhatsApp Web imediatamente após o uso.', 
        'Manter a sessão aberta para evitar ter que fazer login novamente.', 
        'Desativar o Wi-Fi após usar o WhatsApp Web.', 
        'Confiar que o computador público tem segurança suficiente.', 
        'Utilizar a mesma senha do computador para proteger o WhatsApp Web.'
      ],
      correctAnswer: 'Deslogar da sessão de WhatsApp Web imediatamente após o uso.'
    }
  ];

  return (
    <div className='quizz-tema-whatsapp'>
      <h1 className='tittle-quizz-tema'>Quiz WhatsApp</h1>
      <Quiz questions={questions} quizTitle="Whatsapp" />  
    </div>
  );
};

export default QuizzWhatsapp;
