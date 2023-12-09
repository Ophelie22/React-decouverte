import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// déclaration d'un composant qui génère le titre en HTML
// convention : le nom d'un composant commence par une majuscule
function Sondage() {
    return <div className="sondage">
        <h1>React, c'est comment ?</h1>
        <CustomButton label="Super!" />
        <CustomButton label="Super génial!" />
        <CustomButton label="Bof, je préfère le PHP" />
    </div>;
}

// composant React qui affiche un bouton
// props = paramètres du composant
function CustomButton({ label }) {
    // stockage du nombre de clics dans le composant
    const [nbClicks, setNbClicks] = useState(0);

    // traitement de l'événement clic sur le bouton
    function handleClick() {
        // ajouter 1 au nombre de clics
        setNbClicks(nbClicks + 1);
    }

    return <button
        className="sondage-button"
        onClick={handleClick}
    >
        {label} - {nbClicks}
     </button>;
}

// on fait le rendu du composant dans la page
ReactDOM.render(
    <Sondage />,
    document.getElementById('root')
);