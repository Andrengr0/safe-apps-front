import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './Quizz.css';
import QuizService from '@/services/api/QuizService';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizProps {
  questions: Question[];
  quizTitle: string;
}

const Quiz: React.FC<QuizProps> = ({ questions, quizTitle }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [name, setName] = useState<string>('');  // Nome do usuário
  const [isNameSubmitted, setIsNameSubmitted] = useState(false); // Verifica se o nome foi submetido
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIncompleteModalOpen, setIsIncompleteModalOpen] = useState(false);

  const question = questions[currentQuestion];
  const totalQuestions = questions.length;
  const pointsPerQuestion = 100 / totalQuestions;

  // Função para enviar o nome e começar o quiz
  const handleNameSubmit = () => {
    if (!name.trim()) {
      alert('Por favor, insira o seu nome antes de começar o quiz.');
      return;
    }
    setIsNameSubmitted(true);  // Nome válido, inicia o quiz
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const onSubmitQuiz: SubmitHandler<any> = async (data) => {
    const unansweredQuestions = questions.filter(
      (question) => !data[question.id]
    );

    if (unansweredQuestions.length > 0) {
      alert('Por favor, responda todas as questões antes de enviar o quiz.');
      setIsIncompleteModalOpen(true);
      return;
    }

    let totalScore = 0;

    questions.forEach((question) => {
      if (data[question.id] === question.correctAnswer) {
        totalScore += pointsPerQuestion;
      }
    });

    let feedbackMessage = '';
    if (totalScore === 100) {
      feedbackMessage = 'Excelente! Você acertou tudo!';
    } else if (totalScore >= 70) {
      feedbackMessage = 'Muito bom! Você acertou a maioria!';
    } else if (totalScore >= 50) {
      feedbackMessage = 'Boa tentativa! Mas você pode melhorar.';
    } else {
      feedbackMessage = 'Parece que você teve dificuldades. Tente novamente!';
    }

    setScore(totalScore);
    setFeedback(feedbackMessage);
    setIsModalOpen(true);

    // Preparar as respostas para o envio ao backend
    const quizData = {
      name,
      quizId: quizTitle,
      answers: questions.map((q) => ({
        questionId: q.id.toString(),
        correct: data[q.id] === q.correctAnswer,
      })),
    };

    try {
      // Chamar o serviço para enviar as respostas ao backend
      await QuizService.submitAnswers(quizData);
      console.log('Respostas enviadas com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar respostas:', error);
    }
  };

  const saveAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setValue(questionId.toString(), value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeIncompleteModal = () => {
    setIsIncompleteModalOpen(false);
  };

  return (
    <div>
      {!isNameSubmitted ? (
        // Página inicial para o nome do usuário
        <div className="name-form quiz-form">
          <h2>Digite seu nome para começar o quiz:</h2>
          <input
            className='input-name'
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite aqui..."
            required
          />
          <button className="start-quiz-btn prev-btn" onClick={handleNameSubmit}>
            Começar Quiz
          </button>
        </div>
      ) : score === null ? (
        <form className="quiz-form" onSubmit={handleSubmit(onSubmitQuiz)}>
          {/* Exibe a questão atual */}
          <div className="quiz-question">
            <h4 className="question-title">{question.question}</h4>
            <div className="options-group">
              {question.options.map((option) => (
                <label className="option-label" key={option}>
                  <input
                    className="option-input"
                    type="radio"
                    {...register(question.id.toString(), { required: true })}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => saveAnswer(question.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <div className="navigation-buttons">
            <button
              type="button"
              className={`prev-btn ${currentQuestion === 0 ? 'invisible' : ''}`}
              onClick={handlePrev}
              disabled={currentQuestion === 0}
            >
              Anterior
            </button>

            {currentQuestion < totalQuestions - 1 ? (
              <button type="button" className="next-btn" onClick={handleNext}>
                Próxima
              </button>
            ) : (
              <button type="submit" className="submit-btn">
                Enviar Quiz
              </button>
            )}
          </div>
        </form>
      ) : (
        // Mostrar feedback após envio
        <div className="quiz-form">
          <div className="quiz-question">
            <h4 className="question-title">{question.question}</h4>
            <div className="options-group">
              {question.options.map((option) => {
                const isCorrect = option === question.correctAnswer;
                const isSelected = answers[question.id] === option;

                const backgroundColor =
                  isSelected && isCorrect
                    ? '#a0c5a2'
                    : isSelected && !isCorrect
                    ? '#e08282'
                    : 'transparent';

                return (
                  <label
                    className="option-label"
                    key={option}
                    style={{ backgroundColor }}
                  >
                    <input
                      className="option-input"
                      type="radio"
                      value={option}
                      checked={isSelected}
                      readOnly
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className="navigation-buttons">
            <button
              type="button"
              className={`prev-btn ${currentQuestion === 0 ? 'invisible' : ''}`}
              onClick={handlePrev}
              disabled={currentQuestion === 0}
            >
              Anterior
            </button>

            {currentQuestion < totalQuestions - 1 ? (
              <button type="button" className="next-btn" onClick={handleNext}>
                Próxima
              </button>
            ) : score === null ? (
              <button type="submit" className="submit-btn">
                Enviar Quiz
              </button>
            ) : (
              <button
                type="button"
                className="retry-btn"
                onClick={() => window.location.reload()}
              >
                Refazer Quiz
              </button>
            )}
          </div>
        </div>
      )}

      {/* Modal de feedback */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Seu resultado: {score} pontos</h2>
            <p>{feedback}</p>
            <button className="close-btn" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Modal de alerta de questões não respondidas */}
      {isIncompleteModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Atenção!</h2>
            <p>Por favor, responda todas as questões antes de enviar o quiz.</p>
            <button className="close-btn" onClick={closeIncompleteModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
