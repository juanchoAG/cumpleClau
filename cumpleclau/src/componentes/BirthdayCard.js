import React, { useState } from 'react';
import '../styles/BirthdayCard.css'; // Tu CSS que has compartido
import cumpleImg from '../imagenes/imagenClau.jpeg'; // Ajusta la ruta de tu imagen

const BirthdayCard = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSorpresa = () => {
    setShowMessage(true);
    // Redirigir después de 2 segundos
    setTimeout(() => {
      window.location.href = 'https://nicciamalaga.com/';
    }, 2000);
  };

  return (
    <div className="card">
      <h1>🎉Hola de nuevo, esto va mejorando...🎉</h1>
      <h2>😍Te quiero mucho maaas😍</h2>
      <img className="imagen-clau" src={cumpleImg} alt="Cumpleaños Claudia" />

      <button className="button-sorpresa" onClick={handleSorpresa}>
        Sorpresa
      </button>

      {showMessage && (
      <div className="mensaje-sorpresa">
        <p>😍 La mejor sorpresaaa! 😍</p>
        <p>Quedas invitada a cenar en....</p>
      </div>
      )}
    </div>
  );
};

export default BirthdayCard;
