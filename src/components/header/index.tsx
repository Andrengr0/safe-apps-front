import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Container from '@/components/container';
import './Header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleStateChange = (state: any) => {
        setIsMenuOpen(state.isOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsMenuOpen(false); // Garante que o menu esteja fechado em telas maiores
            }
        };

        handleResize(); // Verifica o tamanho da tela ao montar o componente
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container>
            <div className='container-header'>
                <header className="header">
                        <div className="logo">
                            <img src="/images/logo_safeApps.png" alt="SafeApps Logo" className="logo-image" />
                        </div>
                        {/* Menu para telas maiores */}
                        <nav className="nav">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/series-de-aprendizado">Séries de Aprendizado</a></li>
                                <li><a href="/sobre">Sobre Nós</a></li>
                            </ul>
                        </nav>
                        {/* Menu para telas menores (só renderiza se for mobile) */}
                        {isMobile && (
                            <Menu right isOpen={isMenuOpen} onStateChange={handleStateChange} className="mobile-menu">
                                <a id="home" className="menu-item" href="/" onClick={closeMenu}>Home</a>
                                <a id="series" className="menu-item" href="/series-de-aprendizado" onClick={closeMenu}>Séries de Aprendizado</a>
                                <a id="contact" className="menu-item" href="/sobre-nos" onClick={closeMenu}>Sobre Nós</a>
                            </Menu>
                        )}
                </header>
            </div>
        </Container>
    );
};

export default Header;
