import React from 'react';
import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    imageUrl: string;
    episodes: Array<{ title: string; description: string }>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, imageUrl, episodes }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <button className="modal-close-button" onClick={onClose}>X</button>
                <img src={imageUrl} alt={title} className="modal-image" />
                <h2 className="modal-title">{title}</h2>
                <p className="modal-description">{description}</p>
                <button className="button-action">I am a button</button>
                <div className="episodes-list">
                    {episodes.map((episode, index) => (
                        <EpisodeCard key={index} title={episode.title} description={episode.description} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const EpisodeCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
        <div className="episode-card">
            <div className="episode-title">{title}</div>
            <div className="episode-description">{description}</div>
            <button className="button-action">I am a button</button>
        </div>
    );
};

export default Modal;
