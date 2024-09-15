import React from 'react';
import './QuizzSection.css';
import { useNavigate } from 'react-router-dom';

const QuizzSection: React.FC = () => {

    const navigate = useNavigate();

    function redirecionaQuizWhatsapp(){
        navigate('/quizzes/whatsapp')
    }

    function redirecionaQuizInstagram(){
        navigate('/quizzes/whatsapp')
    }

    function redirecionaQuizTiktok(){
        navigate('/quizzes/whatsapp')
    }

    function redirecionaQuizCassino(){
        navigate('/quizzes/whatsapp')
    }

    
    return (
       <div className='quizz-container'>
            <h4>Que tal realizar um quizz para testar seus conhecimentos?</h4>

            <div className='box-buttons'>
                <div className='btn-single' onClick={redirecionaQuizWhatsapp}>
                    <button className="btn-12 btn-whatsapp"><span>Quizz Whatsapp</span></button>
                </div>

                <div className='btn-single' onClick={redirecionaQuizInstagram}>
                    <button className="btn-12 btn-instagram"><span>Quizz Instagram</span></button>
                </div>

                <div className='btn-single' onClick={redirecionaQuizTiktok}>
                    <button className="btn-12 btn-tiktok"><span>Quizz TikTok</span></button>
                </div>

                <div className='btn-single' onClick={redirecionaQuizCassino}>
                    <button className="btn-12 btn-cassino"><span>Quizz Cassino</span></button>
                </div>
            </div>
       </div>
    );
};

export default QuizzSection;