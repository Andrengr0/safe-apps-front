import React from 'react';
import { motion } from 'framer-motion';
import logo from '../images/img_logo_safeApps.png';
import welcomeImage from '../images/img_bem_vindo.png';

const AppHeader: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div className="logo-container" style={logoContainerStyle}>
        <img src={logo} alt="SafeApps Logo" style={logoStyle} />
        <img src={welcomeImage} alt="Bem Vindo" style={welcomeImageStyle} />
      </div>
      <div style={marqueeContainerStyle}>
        <motion.div
          style={marqueeStyle}
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <p className="baloo-500" style={headerTextStyle}>
            Aprenda a usar seus <span style={highlightStyle}>apps</span> de forma <span style={highlightStyle}>segura</span> e divertida!
          </p>
        </motion.div>
      </div>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  padding: '20px',
};

const logoContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '30px',
  flexWrap: 'wrap' as 'wrap',
};

const logoStyle = {
  height: '80px',
};

const welcomeImageStyle = {
  height: '40px',
};

const headerTextStyle = {
  color: '#54618F',
  fontSize: '1.5rem',
  textAlign: 'center' as 'center',
  whiteSpace: 'nowrap' as 'nowrap', // Evita quebra de linha
};

const highlightStyle = {
  color: '#1E1E1E',
};

const marqueeContainerStyle: React.CSSProperties = {
  overflow: 'hidden',
  width: '100%', // Largura do contêiner do marquee
};

const marqueeStyle: React.CSSProperties = {
  display: 'inline-block',
  whiteSpace: 'nowrap',
};

export default AppHeader;
