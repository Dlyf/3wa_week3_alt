import { Link, useNavigate } from "react-router-dom";

const Description = () => {
  const navigate = useNavigate();

  return (
    <div>
      description <br />
      <br />
      <br />

        <h1>Description</h1>
        <p>
          Le but du jeu est de lancer trois dés et de compter le nombre de fois
          que l'on obtient un brelan de 6 (trois dés identiques de valeur 6).
        </p>
        <Link to="/">Retour</Link>

  
      <button onClick={() => navigate("App /")}>go to page Home</button>
    </div>
  );
};

export default Description;
