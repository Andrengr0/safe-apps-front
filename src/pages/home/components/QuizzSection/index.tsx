import React from 'react';
import './QuizzSection.css';

const QuizzSection: React.FC = () => {
    return (
       <div className='quizz-container'>
            <h4>Que tal realizar um quizz para testar seus conhecimentos?</h4>

            <div className='box-buttons'>
                <div className='btn-single'>
                    <button className="btn-12 btn-whatsapp"><span>Quizz Whatsapp</span></button>
                </div>

                <div className='btn-single'>
                    <button className="btn-12 btn-instagram"><span>Quizz Instagram</span></button>
                </div>

                <div className='btn-single'>
                    <button className="btn-12 btn-tiktok"><span>Quizz TikTok</span></button>
                </div>

                <div className='btn-single'>
                    <button className="btn-12 btn-cassino"><span>Quizz Cassino</span></button>
                </div>
            </div>
       </div>
    );
};

export default QuizzSection;