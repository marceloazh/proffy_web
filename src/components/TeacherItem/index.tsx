import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent.fbfh3-2.fna.fbcdn.net/v/t1.0-1/p160x160/70408840_1618733508257043_6810011440578035712_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=8wpyGBlTAssAX-CU9Xt&_nc_ht=scontent.fbfh3-2.fna&tp=-6&oh=654e3b47bdea3147b1f91e7996365654&oe=5F54453E" alt="Marcelo Porto" />
                <div>
                    <strong>Marcelo Porto</strong>
                    <span>História</span>
                </div>
            </header>

            <p>
                Entusiasta de história mundial e medieval.
                    <br /><br />
                    Apaixonado por todos os detalhes mais sórdidos da história, incluíndo aqueles que ninguém se importa. A história do Brasil é estranha e me confunde...
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em Contato
                        </button>
            </footer>
        </article>
    );
};

export default TeacherItem;