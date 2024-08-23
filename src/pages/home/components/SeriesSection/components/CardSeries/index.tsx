import React from 'react';
import './CardSeries.css';
import ModalTriggerButton from '../ModalTriggerButton';

interface CardSeriesProps {
    title: string;
    description: string;
    imageUrl: string;
    episodes: Array<{ title: string; description: string }>;
    platform: string;  // Adicionando a propriedade platform
}

const CardSeries: React.FC<CardSeriesProps> = ({ title, description, imageUrl, episodes, platform }) => {
    return (
        <div className="card-series">
            <img src={imageUrl} alt={title} className="card-series-image" />
            <h3 className="card-series-title">{title}</h3>
            <p className="card-series-description">{description}</p>
            <div className="card-series-actions">
                <ModalTriggerButton
                    title={title}
                    description={description}
                    imageUrl={imageUrl}
                    episodes={episodes}
                    platform={platform}  // Passando a plataforma para o ModalTriggerButton
                />
            </div>
        </div>
    );
};

export default CardSeries;
