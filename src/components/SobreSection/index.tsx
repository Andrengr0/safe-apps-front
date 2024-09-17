import React from 'react';
import './SobreSection.css';
import img_aula_burity from '@/assets/images/img_aula_burity.png';

const SobreSection: React.FC = () => {
    return (
        <div className="sobre-bg">
            <div className="sobre-section">
                <h2>Sobre Nós: 🫡</h2>
                <p>
                O SafeAPPs é uma iniciativa educacional voltada para promover a segurança digital de forma acessível e interativa, especialmente para jovens estudantes. Criado com o objetivo de conscientizar e capacitar os usuários sobre os riscos e boas práticas no uso de aplicativos populares, como WhatsApp e Instagram, o SafeAPPs oferece conteúdo dinâmico e envolvente, incluindo vídeos tutoriais, dicas práticas e desafios interativos.
                <br/>
                <br/>
                Desenvolvido por André de Negreiros Guedes Barros e Pedro Lucas da Silva Rodrigues em 2023, como parte de um projeto acadêmico da Universidade Federal da Paraíba (UFPB) e da Universidade Federal de Campina Grande (UFCG), o SafeAPPs busca contribuir para a formação de usuários mais informados e preparados para enfrentar as ameaças digitais do cotidiano.
                <br/>
                <br/>
                Nosso objetivo é proporcionar uma experiência de aprendizado intuitiva e prática, incentivando o uso seguro e consciente das redes sociais e aplicativos de comunicação. Confiamos que, ao utilizar nosso material, os usuários estarão mais equipados para proteger suas informações e navegar no ambiente digital com mais segurança.
                <br/>
                <br/>
                Seja bem-vindo(a) ao SafeAPPs e explore nossos conteúdos para aprender como tornar sua experiência online mais segura!
                </p>
                <img className='sobre-image' src={img_aula_burity} alt="Aula no Colégio Burity" />
            </div>
        </div>
    );
};

export default SobreSection;