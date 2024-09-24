import React, { useState, useEffect } from 'react';
import './CuriositySection.css';
import img_adolescente_apontando from '@/assets/images/img_curiosidade.png';

// Array de curiosidades
const curiosities = [
    'Engenharia social: A engenharia social é uma tática comum usada por hackers para obter acesso a informações confidenciais. Ela envolve a manipulação psicológica das pessoas, geralmente por meio de técnicas de persuasão ou falsa identidade.',
    'Senhas comuns: Apesar dos riscos conhecidos, muitas pessoas ainda usam senhas comuns e previsíveis, como "123456" e "password". Essas senhas fáceis de adivinhar são responsáveis por muitas violações de segurança.',
    'Ataques de força bruta: Os ataques de força bruta são uma técnica usada para quebrar senhas por meio de tentativa e erro. Os hackers usam programas automatizados para testar combinações de senhas até encontrarem a correta.',
    'Ransomware: O ransomware é um tipo de malware que criptografa os arquivos de um computador e exige um resgate para descriptografá-los. É uma ameaça crescente e muitas vezes é distribuído por meio de e-mails de phishing.',
    'VPN: Uma VPN (Virtual Private Network) é uma tecnologia usada para aumentar a segurança e privacidade online. Ela cria uma conexão criptografada entre o dispositivo do usuário e o servidor VPN, ocultando o tráfego da internet e protegendo os dados pessoais.',
    'Biometria: A autenticação biométrica, como impressões digitais e reconhecimento facial, é cada vez mais utilizada para proteger dispositivos e contas online. No entanto, os dados biométricos também podem ser comprometidos e não podem ser alterados, ao contrário de senhas.',
    'Hackers éticos: Existem hackers éticos, conhecidos como "white-hat hackers", que são especialistas em segurança digital contratados por empresas para encontrar vulnerabilidades em seus sistemas. Eles ajudam a identificar e corrigir falhas de segurança antes que sejam exploradas por hackers mal-intencionados.'
];

const CuriositySection: React.FC = () => {
    // Estado para armazenar a curiosidade atual
    const [curiosity, setCuriosity] = useState<string>('');

    // Seleciona uma curiosidade aleatória ao carregar o componente
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * curiosities.length);
        setCuriosity(curiosities[randomIndex]);
    }, []); // Executa uma vez ao montar o componente

    return (
        <div className="curiosity-section">
            <div className="curiosity-content">
                <div className="curiosity-text">
                    <h2>Curiosidade:</h2>
                    <p> 
                        <img className='curiosity-image' src={img_adolescente_apontando} alt="Curiosidade" />
                        {curiosity}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CuriositySection;
