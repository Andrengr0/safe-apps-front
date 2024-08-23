import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    imageUrl: string;
    platform: string;  // Adicionando a plataforma como propriedade
    episodes: Array<{ title: string; description: string }>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, imageUrl, platform, episodes }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <button className="modal-close-button" onClick={onClose}>X</button>
                <img src={imageUrl} alt={title} className="modal-image" />
                <h2 className="modal-title">{title}</h2>
                <p className="modal-description">{description}</p>
                <div className="episodes-list">
                    {episodes.map((episode, index) => (
                        <EpisodeCard 
                            key={index} 
                            title={episode.title} 
                            description={episode.description} 
                            platform={platform} 
                            episodeNumber={index + 1} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface EpisodeCardProps {
    title: string;
    description: string;
    platform: string;
    episodeNumber: number;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ title, description, platform, episodeNumber }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        if (contentRef.current) {
            if (isExpanded) {
                contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
                contentRef.current.style.opacity = '1';
            } else {
                contentRef.current.style.maxHeight = '0px';
                contentRef.current.style.opacity = '0';
            }
        }
    }, [isExpanded]);

    const episodeRoute = `${platform}/episodio/${episodeNumber}`;

    return (
        <div className="episode-card">
            <div className="episode-header">
                <div className="episode-title">{title}</div>
                <button className="toggle-button" onClick={toggleExpand}>
                    {isExpanded ? 'Ocultar' : 'Exibir'}
                </button>
            </div>
            <div
                className="episode-content"
                ref={contentRef}
                style={{ maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : '0px', opacity: isExpanded ? '1' : '0' }}
            >
                <div className="episode-description">{description}</div>
                <Link to={episodeRoute} className="button-action">
                    Ver Episódio
                </Link>
            </div>
        </div>
    );
};

export default Modal;
