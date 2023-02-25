import { useDispatch, useSelector } from "react-redux";
import { addDragon } from "./actions/actions-types.js"
import { useState } from "react";
function App() {
  const stateDuStore = useSelector((state) => state);
  const dispatch = useDispatch();

  // console.log("state", stateDuStore)
  const [dragon, setDragon] = useState("");
  const handleChange = (e) => {
    setDragon(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(dragon.trim == ''){
      setDragon(`Attention votre champ est vide.`)
      return;
   }
   console.log(dragon)

  }

  return (
    <div>
      {/* <Header /> */}
      <h1>Dragon List, number of dragon(s) { stateDuStore.count }</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dragon">Ajoutez un dragon </label>
        <br />
        <input type="text" value={dragon} onChange={handleChange} />
        <br />
        <br />
        <button onClick={() => dispatch({ type: "ADD_DRAGON", dragon : `${stateDuStore.dragon }` })} >Add</button>

        {/* <button onClick={() => dispatch({ type: "ADD_DRAGON" })} >Delete</button> */}

        <div>
        </div>
      </form>
        <ul>
        {stateDuStore.dragons.map((dragon, index) => (
          <li key={index}>{dragon}</li>
        ))}
          {/* <li>{stateDuStore.dragons[0]}</li>
          <li>{stateDuStore.dragons[1]}</li>
          <li>{stateDuStore.dragons[2]}</li> */}
        </ul>
    </div>
  )
}

export default App
