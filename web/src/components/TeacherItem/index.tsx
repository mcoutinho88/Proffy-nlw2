import React from "react";

import whatsIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/42629335?s=460&u=54da0cb312f2d7d153fa97094be16c08857dec2d&v=4"
          alt=""
        />
        <div>
          <strong>Matheus Coutinho</strong>
          <span>Fisica</span>
        </div>
      </header>

      <p>
        Sou bom em fisica.
        <br /> <br />
        Sou bom em fisica pq sou bom em fisica e foda-se. Ja falei que sou bom
        em fisica hoje?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 500,00</strong>
        </p>
        <button type="button">
          <img src={whatsIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
