import React from 'react';
import './CuriositySection.css';
import img_adolescente_apontando from '@/assets/images/img_curiosidade.png';

const CuriositySection: React.FC = () => {
    return (
        <div className="curiosity-section">
            <div className="curiosity-content">
                <div className="curiosity-text">
                    <h2>Curiosidade:</h2>
                    <p> <img className='curiosity-image' src={img_adolescente_apontando} alt="Curiosidade" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CuriositySection;
