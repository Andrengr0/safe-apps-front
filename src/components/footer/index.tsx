import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="university-logo">
                <a href='https://www.ufpb.br/'><img src="/images/logo_ufpb.png" alt="UFPB Logo" className="ufpb-logo" /></a>
            </div>
            <div className="developers">
                <h4>Desenvolvido por:</h4>
                <br/>
                <p>André Negreiros</p>
                <a href="https://github.com/Andrengr0">Perfil GitHub</a>
            </div>
        </footer>
    );
};

export default Footer;
