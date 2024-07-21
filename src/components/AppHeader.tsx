import React from 'react';
import logo from '../images/img_logo_safeApps.png';
import welcomeImage from '../images/img_bem_vindo.png';

const AppHeader: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div className="logo-container" style={logoContainerStyle}>
        <img src={logo} alt="SafeApps Logo" style={logoStyle} />
        <img src={welcomeImage} alt="Bem Vindo" style={welcomeImageStyle} />
      </div>
      <p className="baloo-500" style={headerTextStyle}>
        Aprenda a usar seus <span style={highlightStyle}>apps</span> de forma <span style={highlightStyle}>segura</span> e divertida!
      </p>
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
  marginTop: '10px',
};

const highlightStyle = {
  color: '#1E1E1E',
};

export default AppHeader;
