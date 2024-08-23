import React from 'react';
import './CardSeries.css';
import ModalTriggerButton from '../ModalTriggerButton';

interface CardSeriesProps {
    title: string;
    description: string;
    imageUrl: string;
    episodes: Array<{ title: string; description: string }>;
}

const CardSeries: React.FC<CardSeriesProps> = ({ title, description, imageUrl, episodes }) => {
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
                />
            </div>
        </div>
    );
};

export default CardSeries;
