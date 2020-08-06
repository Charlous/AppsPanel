import React from 'react';
import './App.css';

function App() {
  return (
    <div className="Background">
      <img src={require("./Assets/logo-paris.svg")} alt="logo-paris" className="logo-paris"></img>

      <img src={require("./Assets/ui-diagonale-haut-bleu.png")} alt="diago" className="ui-diagonale-haut-bleu"></img>

      <div className= "Rectangle-581"/>

      <img src={require("./Assets/logo-parcoursrevolution.png")} alt="parcours"
          srcset={require("./Assets/logo-parcoursrevolution@2x.png")}
          className="logo-parcoursrevolution"></img>

      <p className="Sur-les-traces-de-la-Rvolution-Paris">
          Sur les traces de la Révolution à Paris
      </p>
      <p className="La-Ville-de-Paris-vous-propose-de-parcourir-Le-Paris-de-la-Rvo">
          La Ville de Paris vous propose de parcourir Le Paris de la Révolution française à travers les traces encore visibles et les nombreux symboles de cette période, tournant majeur dans l’histoire de France et de la capitale.<br/><br/>
          Le parcours Révolution vous emmènera à la découverte de 16 quartiers et plus de 120 lieux liés à cette époque mouvementée et aux grandes figures, célèbre ou parfois oubliées, qui en ont fait l’histoire.<br/><br/>
          Site prochainement en ligne
      </p>
      <p className="The-City-of-Paris-invites-you-to-explore-Paris-of-the-French-Re">
          The City of Paris invites you to explore Paris of the French Revolution through the traces still visible and the many symbols of this period, a major turning point in the history of France and the capital.<br/><br/>
          The Revolution route will take you to discover 16 districts and more than 120 places linked to this turbulent era and the great figures, famous or sometimes forgotten, which made their history.<br/><br/>
          Site soon online
      </p>

      <img src={require("./Assets/logo-parcoursrevolution.png")} alt="tel"
          srcset={require("./Assets/visuel-telephones@2x.png")}
          className="visuel-telephones"></img>

      <div className="Rectangle-arrondi-1">
          <p className="Soyez-informs-de-la-sortie-de-lapplication">Soyez informés de la sortie de l’application</p>
          <p className="votre-adresse-email">votre adresse email</p>
          <input className="Rectangle-arrondi-2" placeholder="exemple@fournisseur.fr"/>
          <button className="Rectangle-arrondi-3">Valider</button>
      </div>

      <img src={require("./Assets/ui-diagonale-bas-rouge.svg")} alt="diagobas" className="ui-diagonale-bas-rouge"></img>
      <div className="Mentions-lgales">
        <p><a href="/">Mentions légales</a></p>
        <p><a href="/">Politique de confidentialité</a></p>
        <p><a href="/">Ville de Paris</a></p>
      </div>

      <img src={require("./Assets/visuel-bastille-bleu.png")} alt="bastille"
          srcset={require("./Assets/visuel-bastille-bleu@2x.png")}
          className="visuel-bastille-bleu"></img>
      
      <div className="verticalbar">
        <p className="parisrvolution">#parisrévolution</p>
        <div className="Filet"/>
        <img src={require("./Assets/picto-facebook.svg")} alt="fb" className="picto-facebook"></img>
        <img src={require("./Assets/picto-youtube.svg")} alt="yt" className="picto-youtube"></img>
        <img src={require("./Assets/picto-instagram.svg")} alt="insta" className="picto-instagram"></img>
      </div>
    </div>
  );
}

export default App;
