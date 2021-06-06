import React from "react";
import PlanetPages from './components/PlanetPages'


function App() {
  return (
    <div
      style={{
        backgroundColor: "#070625",
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "./assets/background-stars.svg"
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <PlanetPages />
    </div>
  );
}

export default App;
