import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Container from '@/components/container';
import './Header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleStateChange = (state: any) => {
        setIsMenuOpen(state.isOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
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
                        <a href="/"><img src="/images/logo_safeApps.png" alt="SafeApps Logo" className="logo-image" /></a>
                    </div>
                    {/* Menu para telas maiores */}
                    <nav className="nav">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li 
                                className="dropdown menu-item" 
                                onMouseEnter={() => setIsDropdownOpen(true)} 
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <a className="menu-item" onClick={(e) => e.preventDefault()}>
                                    Séries de Aprendizado
                                </a>
                                {isDropdownOpen && (
                                    <ul className="dropdown-menu">
                                        <li><a href="/whatsapp/episodio/1">Whatsapp</a></li>
                                        <li><a href="/instagram/episodio/1">Instagram</a></li>
                                        <li><a href="/tiktok/episodio/1">Tiktok</a></li>
                                    </ul>
                                )}
                            </li>
                            <li><a href="/sobre">Sobre Nós</a></li>
                        </ul>
                    </nav>

                    {/* Menu para telas menores (só renderiza se for mobile) */}
                    {isMobile && (
                        <Menu right isOpen={isMenuOpen} onStateChange={handleStateChange} className="mobile-menu">
                            <a id="home" className="menu-item" href="/" onClick={closeMenu}>Home</a>
                            <div className="menu-item dropdown-mobile">
                                <a id="series" className="menu-item" onClick={() => {toggleDropdown(); }}>
                                    Séries de Aprendizado
                                </a>
                                {isDropdownOpen && (
                                    <div className="dropdown-mobile-menu">
                                        <a className="menu-item" href="/whatsapp/episodio/1" onClick={closeMenu}>Whatsapp</a>
                                        <a className="menu-item" href="/instagram/episodio/1" onClick={closeMenu}>Instagram</a>
                                        <a className="menu-item" href="/tiktok/episodio/1" onClick={closeMenu}>Tiktok</a>
                                    </div>
                                )}
                            </div>
                            <a id="contact" className="menu-item" href="/sobre" onClick={closeMenu}>Sobre Nós</a>
                        </Menu>
                    )}
                </header>
            </div>
        </Container>
    );
};

export default Header;
