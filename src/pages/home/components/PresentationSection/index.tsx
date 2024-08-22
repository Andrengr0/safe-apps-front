import React from 'react';
import Container from '@/components/container';
import CardExplicacaoApp from '../CardExplicacaoApp';
import CardApresentacaoSite from '../CardApresentacaoSite';
import './PresentationSection.css';
import backgroundImage from '@/assets/images/bg_image.jpg';

const PresentationSection: React.FC = () => {
    return (
        <div className="presentation-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Container>
                <div className="card-wrapper-explicacao-app">
                    <CardExplicacaoApp />
                </div>
                <div className="card-wrapper-apresentacao">
                    <CardApresentacaoSite />
                </div>
                    <div className='clear-float'></div>
            </Container>
        </div>
    );
};

export default PresentationSection;
