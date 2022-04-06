import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  let [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchIt() {
      let hr = await fetch("https://jussi-hello-world.herokuapp.com/locations");
      let data = await hr.json();
      setLocations(data);
    }
    fetchIt();
  }, []);

  return (
    <li>
      {locations.map((location) => (
        <li>
          {location.latitude} - {location.longitude}
        </li>
      ))}
    </li>
  );
}

export default App;
