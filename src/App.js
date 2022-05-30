import './App.css';
import { useState } from 'react';
import { ImageDiv, InputDiv, PasswordDiv, DateDiv, TexteDiv } from './functionalComponent';
import Easign from './easign.svg';
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

const themes = {
  lightBlue: {
    rowTop: "#6495ED",
    columna: "#ADD8E6",
    columnb: "#87CEFA",
    columnc: "#ADD8E6",
    boxa: "#ADD8E6",
    boxb: "",
    boxc: "",
    boxd: ""
  }
}



function App ()
{
  const [ texte, setTexte ] = useState( data.texte.test );
  const [ texte2, setTexte2 ] = useState( data.texte.test2 );
  const [ texte3, setTexte3 ] = useState( data.texte.test3 );
  // eslint-disable-next-line
  const jsx = ( <div className="maindiv">
    <div className="rowtop" style={ { backgroundColor: themes.lightBlue.rowTop } }>
      <div className="topa"></div>
      <div className="topc">
        <img src={ Easign } alt="EASIGN.io" className="logoimg" />
      </div>
      <div className="topb">
        <b><i className="fa">&#xf015;</i><br />
          <label>Home</label></b>
      </div>
      <div className="topb">
        <b><i className="fa">&#xf0c0;</i><br />
          <label>About Us</label></b>
      </div>
      <div className="topb"><b>
        <i className="fa">&#xf1c9;</i><br />
        <label>Our Project</label></b>
      </div>
      <div className="topb"><b>
        <i className="fa">&#xf2bc;</i><br />
        <label>3D resume</label></b>
      </div>
      <div className="topb">
        <b><i className="fa">&#xf06e;</i><br />
          <label>Our vision</label></b>
      </div>
      <div className="topb">
        <b><i className="fa">&#xf2b5;</i><br />
          <label>Partners</label></b></div>
      <div className="topb"><b>
        <i className="fa">&#xf1fa;</i><br />
        <label>Contact</label></b>
      </div>
      <div className="topb">
        <b>
          <i className="fa">&#xf079;</i><br />
          <label>Developper</label></b></div>
      <div className="topd"><input type="text" placeholder="Search" className="searchbox" id="search" /><i className="fa">&#xf002;</i></div>
      <div className="topa">
      </div>
    </div>
    <div className="rowmain">
      <div className="columna" style={ { backgroundColor: themes.lightBlue.columna } }>
        <ImageDiv valeur={ data.findmeforjob.fmfj } field="fmfj" />
        <InputDiv valeur={ texte } cbOnChange={ setTexte } field="test" />
        <PasswordDiv valeur={ texte2 } cbOnChange={ setTexte2 } />
        <button onClick={ () => { console.log( { papa: texte, filsa: texte2, filsb: texte3 } ) } }>Click me</button>
      </div>
      <div className="columnb" style={ { backgroundColor: themes.lightBlue.columnb } }>
        <DateDiv />
        <TexteDiv valeurLink={ data.findmeforjob.fmfj } valeurTarget="_blank" valeur={ texte } />
        <label>{ texte }</label><br />
        <label>{ texte2 }</label><br />
        <label>{ texte3 }</label><br />
      </div>
      <div className="columna" style={ { backgroundColor: themes.lightBlue.columnc } }>
        <InputDiv valeur={ texte2 } cbOnChange={ setTexte2 } field="test2" />
        <InputDiv valeur={ texte3 } cbOnChange={ setTexte3 } field="test3" />
      </div>
    </div></div> );
  return jsx;
}

export default App;
