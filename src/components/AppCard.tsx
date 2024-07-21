import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

interface AppCardProps {
  icon: string;
  alt: string;
  route: string;
}

const AppCard: React.FC<AppCardProps> = ({ icon, alt, route }) => {
  return (
    <Link to={route} style={linkStyle}>
      <div style={cardStyle}>
        <img src={icon} alt={alt} style={iconStyle} />
        <p className='open-sans-500' style={textStyle}>{alt}</p>
      </div>
    </Link>
  );
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  margin: '10px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  textDecoration: 'none',
  color: '#000',
  width: '100px',
  height: '120px',
  boxSizing: 'border-box' as 'border-box',
  backgroundColor: '#E7FDFA',
};

const iconStyle = {
  width: '50px',
  height: '50px',
  marginBottom: '10px',
};

const textStyle = {
  textAlign: 'center' as 'center',
  marginTop: '10px',
  marginBottom: '0',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

export default AppCard;
