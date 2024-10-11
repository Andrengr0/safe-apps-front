import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="university-logo">
                <a href='https://www.ufpb.br/'><img src="/images/logo_ufpb.png" alt="UFPB Logo" className="ufpb-logo" /></a>
            </div>
            {/* <div className='links_footer'>
                <a href='https://forms.gle/gPmYHYTFzqc1Vxiy6' target='_blank'>Avaliação simples</a>
                <a href='https://forms.gle/ZRexvD7bMsDRMSQg7' target='_blank'>Avaliação detalhada</a>
                <a href='https://forms.gle/HT5EpibyDCPFyaxLA' target='_blank'>Entrevista</a>
            </div> */}
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
