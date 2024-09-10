import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './Quizz.css'; // Importa o arquivo de estilo

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [currentQuestion, setCurrentQuestion] = useState(0); // Controla a questão atual
  const [answers, setAnswers] = useState<Record<number, string>>({}); // Armazena as respostas
  const [score, setScore] = useState<number | null>(null); // Armazena a pontuação
  const [feedback, setFeedback] = useState<string | null>(null); // Armazena o feedback
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla o estado do modal de feedback

  const question = questions[currentQuestion];
  const totalQuestions = questions.length;
  const pointsPerQuestion = 100 / totalQuestions;

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

  const onSubmitQuiz: SubmitHandler<any> = (data) => {
    let totalScore = 0;

    questions.forEach((question) => {
      if (data[question.id] === question.correctAnswer) {
        totalScore += pointsPerQuestion; // Pontuação proporcional
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
    setIsModalOpen(true); // Abre o modal ao enviar o quiz
  };

  const saveAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setValue(questionId.toString(), value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {score === null ? (
        <form className="quiz-form" onSubmit={handleSubmit(onSubmitQuiz)}>
          {/* Exibe o formulário antes do envio */}
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
        // Mantém o mesmo layout após o envio
        <div className="quiz-form">
          <div className="quiz-question">
            <h4 className="question-title">{question.question}</h4>
            <div className="options-group">
              {question.options.map((option) => {
                const isCorrect = option === question.correctAnswer;
                const isSelected = answers[question.id] === option;

                // Definindo a cor de fundo com base na resposta correta/incorreta
                const backgroundColor =
                  isSelected && isCorrect
                    ? '#a0c5a2' // Resposta correta
                    : isSelected && !isCorrect
                    ? '#e08282' // Resposta incorreta
                    : 'transparent'; // Opções não selecionadas ou não relevantes

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
            {currentQuestion > 0 && (
              <button type="button" className="prev-btn" onClick={handlePrev}>
                Anterior
              </button>
            )}

            {currentQuestion < totalQuestions - 1 && (
              <button type="button" className="next-btn" onClick={handleNext}>
                Próxima
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
    </div>
  );
};

export default Quiz;
