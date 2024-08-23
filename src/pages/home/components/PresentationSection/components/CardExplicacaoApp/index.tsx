import React from 'react';
import './CardExplicacaoApp.css';
import appImage from '@/assets/images/img_apps_celular.png';

const CardExplicacaoApp: React.FC = () => {
    return (
        <div className="card-explicacao-app">
            
            <div className='text'>
                <h2>Você sabe o que é um APP? 🤔</h2>
                <p><img src={appImage} alt="Imagem de um celular com apps" />
                    Um aplicativo, ou "app", é um programa que você pode usar em seu tablet ou celular. Existem apps para jogos, para aprender coisas novas, para falar com seus amigos e muito mais! Eles são como brinquedos digitais que ajudam você a fazer muitas coisas divertidas e interessantes. Instagram, WhatsApp e TikTok são exemplos de apps famosos...
                </p>
            </div>
        </div>
    );
};

export default CardExplicacaoApp;
