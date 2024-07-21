import React from 'react';
import Modal from 'react-modal';
import appsImage from '../images/img_apps_celular.jpg';
import './AppModal.css';  // Adicionar arquivo CSS para o modal

Modal.setAppElement('#root');

interface AppModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const AppModal: React.FC<AppModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="O que é um App?"
      style={customStyles}
    >
      <div className="header-style">
        <h2 className="title-style">O que é um App?</h2>
        <button onClick={onRequestClose} className="close-button">&times;</button>
      </div>
      <div className="content-style">
        <img src={appsImage} alt="Apps no celular" className="image-style" />
        <p className="text-style">
          Um aplicativo, ou "app", é um programa que você pode usar em seu tablet ou celular. Existem apps para jogos, para aprender coisas novas, para falar com seus amigos e muito mais! Eles são como brinquedos digitais que ajudam você a fazer muitas coisas divertidas e interessantes. Instagram, whatsapp e tiktok são exemplos de apps famosos...
        </p>
      </div>
    </Modal>
  );
};


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px',
    width: '80%',
    maxWidth: '500px',
  },
};

export default AppModal;
