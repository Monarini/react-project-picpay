import React, { Component, useState,  } from "react";

import Tela01 from "./components/tela01/Tela01";
import Tela02 from "./components/tela02/Tela02";
import Tela03 from "./components/tela03/Tela03";
import Tela04 from "./components/tela04/Tela04";
import Tela05 from "./components/tela05/Tela05";
import Tela06 from "./components/tela06/Tela06";

//   // state = {
//   //   tela01: '',
//   //   tela02: 'none',
//   //   tela03: 'none',
//   //   tela04: 'none',
//   //   tela05: 'none',
//   //   tela06: 'none',
//   // }
function App() {
  const [tela02, setTela2] = useState("grid")
  const [tela03, setTela3] = useState("grid")
  const [tela04, setTela4] = useState("grid")
  const [tela05, setTela5] = useState("grid")
  const [tela06, setTela6] = useState("grid")
  
  return (
    <div className="App">
      <Tela01 tela02={tela02} setTela2={setTela2} />
      <Tela02 tela02={tela02} tela03={tela03} setTela3={setTela3}/>
      {tela03 === "grid" ? (<Tela03 tela03={tela03} tela04={tela04} setTela4={setTela4} />) : null}
      <Tela04 tela04={tela04} tela05={tela05} setTela5={setTela5} />
      <Tela05 tela05={tela05} tela06={tela06} setTela6={setTela6}/>
      <Tela06 tela06={tela06}/>
    </div>
  );
}


export default App;
