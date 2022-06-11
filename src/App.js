import React, {Component} from 'react';



import Tela01 from './components/tela01/Tela01';
import Tela02 from './components/tela02/Tela02';
import Tela03 from './components/tela03/Tela03';
import Tela04 from './components/tela04/Tela04';
import Tela05 from './components/tela05/Tela05';
import Tela06 from './components/tela06/Tela06';
class App extends Component {

  render() {
    return (
      <div className="App">
        
        <Tela01/>
        <Tela02 />
        <Tela03 />
        <Tela04 />
        <Tela05 />
        <Tela06 />
      </div>
    );
  }
}

export default App;
