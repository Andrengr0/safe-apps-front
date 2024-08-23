import React, { useState } from 'react';
import Modal from '../Modal';

interface ModalTriggerButtonProps {
    title: string;
    description: string;
    imageUrl: string;
    episodes: Array<{ title: string; description: string }>;
}

const ModalTriggerButton: React.FC<ModalTriggerButtonProps> = ({ title, description, imageUrl, episodes }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <button className="button-action" onClick={openModal}>I am a button</button>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={title}
                description={description}
                imageUrl={imageUrl}
                episodes={episodes}
            />
        </>
    );
};

export default ModalTriggerButton;
