import React from 'react';
import './CardApresentacaoSite.css';
import hackerImg from '@/assets/images/img_adolescente_hacker.png';

const CardApresentacaoSite: React.FC = () => {
    return (
        <div className="card-apresentacao-site">

            <img src={hackerImg} alt="Imagem de um hacker em furia por não conseguir algo" />
            <p>Pronto para dominar a arte da segurança digital? No SafeApps, você vai descobrir como proteger suas contas e se manter longe dos riscos online, tudo de um jeito simples e divertido.</p>
            <br/>
            <p>Explore, aprenda e compartilhe com os amigos. Porque estar seguro online é mais do que importante – é essencial!</p>

                
        </div>
    );
};

export default CardApresentacaoSite;
