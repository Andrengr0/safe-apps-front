import React from 'react';
import './SobreSection.css';
import img_aula_burity from '@/assets/images/img_aula_burity.png';

const SobreSection: React.FC = () => {
    return (
        <div className="sobre-bg">
            <div className="sobre-section">
                <h2>Sobre Nós: 🫡</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <img className='sobre-image' src={img_aula_burity} alt="Aula no Colégio Burity" />
            </div>
        </div>
    );
};

export default SobreSection;