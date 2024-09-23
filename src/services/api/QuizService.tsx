import api from './api'; // Aqui importamos a instância Axios configurada

interface QuizData {
  name: string;
  quizId: string;
  answers: { questionId: string; correct: boolean }[];
}

const QuizService = {
  submitAnswers: async (quizData: QuizData) => {
    try {
        console.log('Respostas recebidas:', quizData);
      const response = await api.post('/submit-answer', quizData);
      return response.data;
    } catch (error) {
      console.error('Erro ao enviar as respostas:', error);
      throw error;
    }
  },
};

export default QuizService;
