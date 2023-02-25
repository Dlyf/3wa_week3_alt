import { Navigate, Routes, Route } from "react-router-dom";
import Description from "./components/Description";
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Statistiques from "./components/Statistiques";
import Test from "./components/Test";
import { useReducer, useState } from "react";

function App() {
  const max_multiple_select = 100;


  const reducer = (state, action) => {
    switch (action.type) {
      case 'test':
        return {number: Math.floor(Math.random() * 6) + 1};
      case 'increment':
        return {count: state.count + 1};
      case 'reset':
        return init(action.payload);

    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 100 });
  const [number, setNumber] = useState(0);
  function rollDice(e) {
    e.preventDefault();
    // setCount(Math.floor(Math.random() * 6) + 1);
    dispatch({ type: 'test'})
  }

//   [Jeu] [Description]

// Nombre d'expérience : [100]

// [Lancer]

// [Resultat] 
  const nbExp = "";
  return (
    <div>
      <Nav>
        <div>
          <form>
            Nombre d'expérience : 
              <select name="number" value={number}>
                {[...Array(max_multiple_select).keys()].map((num, i) => (
                  <option value={num + 1} key={i}>
                    {num + 1}
                  </option>
                ))}
              </select><br /><br />
              
          </form>
            <button onClick={rollDice}>Lancer</button><br /><br />
            <span>Résultat : {state.number} </span><br /> 
            {/* 
              TODO Trois boutons, les boutons comptent le nombre de fois que l'on obtient trois dés identiques.
            */}
        </div>
      </Nav>
      <hr />
      <Routes>
        <Route path="/pagehome" element={<App />} />
        <Route path="/description" element={<Description />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/statistiques" element={<Statistiques />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Erreur 404</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;