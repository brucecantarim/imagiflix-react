import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faYoutube} />
      <div>
        <a href='#'>Idiomas e legendas</a>
        <a href='#'>Audiodescrição</a>
        <a href='#'>Centro de ajuda</a>
        <a href='#'>Cartão pré-pago</a>
        <a href='#'>Imprensa</a>
        <a href='#'>Relação com investidores</a>
        <a href='#'>Carreiras</a>
        <a href='#'>Termos de uso</a>
        <a href='#'>Privacidade</a>
        <a href='#'>Avisos legais</a>
        <a href='#'>Preferências de cookies</a>
        <a href='#'>Informações corporativas</a>
        <a href='#'>Entre em contato</a>
      </div>
      <p>© 1997 - {today.getFullYear()} Imagiflix, Inc.</p>
    </footer>
  );
};

export default Footer;
