import React, { useState, CSSProperties } from 'react';
import AppHeader from '../components/AppHeader';
import AppCard from '../components/AppCard';
import Curiosity from '../components/Curiosity';
import AppModal from '../components/AppModal';
import whatIsAppImage from '../images/img_what_is_app.png';
import whatsappIcon from '../images/icon_whatsapp.png';
import instagramIcon from '../images/icon_instagram.png';
import tiktokIcon from '../images/icon_tiktok.png';
import jogosIcon from '../images/icon_jogos_azar.png';
import bgImage from '../images/bg_img.png';
import '../App.scss';

const Home: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div style={homeStyle}>
      <AppHeader />
      <div style={introStyle}>
        <img src={whatIsAppImage} alt="O que é um App?" style={introButtonStyle} onClick={openModal} />
      </div>
      <div style={cardsContainerStyle}>
        <h3 className='open-sans-500'>Escolha uma trilha de aprendizado abaixo:</h3>
        <div style={cardsStyle}>
          <AppCard icon={instagramIcon} alt="Instagram" route="/instagram/1" />
          <AppCard icon={whatsappIcon} alt="WhatsApp" route="/whatsapp/1" />
          <AppCard icon={tiktokIcon} alt="TikTok" route="/tiktok" />
          <AppCard icon={jogosIcon} alt="Cassinos" route="/jogos" />
        </div>
      </div>
      <Curiosity />
      <AppModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
};

const homeStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  minHeight: '100vh',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '100%',
  boxSizing: 'border-box',
};

const introStyle: CSSProperties = {
  textAlign: 'center',
  margin: '20px 0',
};

const introButtonStyle: CSSProperties = {
  height: '60px',
  cursor: 'pointer',
};

const cardsContainerStyle: CSSProperties = {
  textAlign: 'center',
};

const cardsStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

export default Home;
