import './App.css';
import { useState } from 'react';
import { ImageDiv, InputDiv, PasswordDiv, DateDiv, TexteDiv } from './functionalComponent';

const data = {
  findmeforjob: {
    fmfj: "https://ico.findmeforjob.com/assets/img/logo/logo.png"
  },
  texte: {
    test: "Voici le text",
    test2: "Texte 2",
    test3: "Text 3 change"
  }

}



function App ()
{
  const [ texte, setTexte ] = useState( data.texte.test );
  const [ texte2, setTexte2 ] = useState( data.texte.test2 );
  const [ texte3, setTexte3 ] = useState( data.texte.test3 );
  // eslint-disable-next-line
  const jsx = ( <div className="rowmain">
    <div className="columna" style={ { backgroundColor: "#aaa" } }>
      <ImageDiv valeur={ data.findmeforjob.fmfj } field="fmfj" />
      <InputDiv valeur={ texte } cbOnChange={ setTexte } field="test" />
      <PasswordDiv valeur={ texte2 } cbOnChange={ setTexte2 } />
      <button onClick={ () => { console.log( { papa: texte, filsa: texte2, filsb: texte3 } ) } }>Click me</button>
    </div>
    <div className="columnb" style={ { backgroundColor: "#bbb" } }>
      <DateDiv />

      <TexteDiv valeurLink={ data.findmeforjob.fmfj } valeurTarget="_blank" valeur={ texte } />

      <label>{ texte }</label><br />
      <label>{ texte2 }</label><br />
      <label>{ texte3 }</label><br />
    </div>
    <div className="columna" style={ { backgroundColor: "#ccc" } }>
      <InputDiv valeur={ texte2 } cbOnChange={ setTexte2 } field="test2" />
      <InputDiv valeur={ texte3 } cbOnChange={ setTexte3 } field="test3" />
    </div>
  </div> );
  return jsx;
}

export default App;
