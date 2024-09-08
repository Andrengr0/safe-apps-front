import React from 'react';
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
  onSubmit: (score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onSubmit }) => {
  const { register, handleSubmit } = useForm();
  
  const onSubmitQuiz: SubmitHandler<any> = (data) => {
    let score = 0;

    questions.forEach((question) => {
      if (data[question.id] === question.correctAnswer) {
        score++;
      }
    });

    onSubmit(score);
  };

  return (
    <form className="quiz-form" onSubmit={handleSubmit(onSubmitQuiz)}>
      {questions.map((question) => (
        <div className="quiz-question" key={question.id}>
          <h4 className="question-title">{question.question}</h4>
          <div className="options-group">
            {question.options.map((option) => (
              <label className="option-label" key={option}>
                <input
                  className="option-input"
                  type="radio"
                  {...register(question.id.toString(), { required: true })}
                  value={option}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button className="submit-btn" type="submit">Enviar Quiz</button>
    </form>
  );
};

export default Quiz;
