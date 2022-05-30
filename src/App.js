import './App.css';
import { useState } from 'react';
import {ImageDiv,InputDiv,PasswordDiv,DateDiv} from './functionalComponent';

const data = {
  findmeforjob: {
    fmfj: "https://ico.findmeforjob.com/assets/img/logo/logo.png"
  },
  texte: {
    test:"Voici le text",
    test2: "Texte 2",
    test3:"Text 3 change"
  }

}



function App() {
  const [ texte, setTexte ] = useState( data.texte.test );
  const [ texte2, setTexte2 ] = useState( data.texte.test2 );
  const [ texte3, setTexte3 ] = useState( data.texte.test3 );
  return (
    <div className="App">
      <ImageDiv valeur={ data.findmeforjob.fmfj } field="fmfj" />
      <InputDiv valeur={ texte } cbOnChange={ setTexte } field="test" />
      <InputDiv valeur={ texte2 } cbOnChange={ setTexte2 } field="test2" />
      <InputDiv valeur={ texte3 } cbOnChange={ setTexte3 } field="test3" />
      <DateDiv />
      <PasswordDiv valeur={texte2} cbOnChange={setTexte2} />
      <button onClick={()=>{console.log({papa:texte,filsa:texte2,filsb:texte3})}}>Click me</button>
      <label>{ texte }</label><br />
      <label>{ texte2 }</label><br />
      <label>{ texte3 }</label><br />
    </div>
  );
}

export default App;
