import React, { useState } from 'react';
import Modal from '../Modal';

interface ModalTriggerButtonProps {
    title: string;
    description: string;
    imageUrl: string;
    episodes: Array<{ title: string; description: string }>;
    platform: string;  // Adicionando a propriedade platform
}

const ModalTriggerButton: React.FC<ModalTriggerButtonProps> = ({ title, description, imageUrl, episodes, platform }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <button className="button-action" onClick={openModal}>Ver Série</button> {/* Alterando o texto do botão */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={title}
                description={description}
                imageUrl={imageUrl}
                episodes={episodes}
                platform={platform}  // Passando a plataforma para o Modal
            />
        </>
    );
};

export default ModalTriggerButton;
