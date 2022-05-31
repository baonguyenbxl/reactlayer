// eslint-disable-next-line
import './App.css';
import { useState } from 'react';
// eslint-disable-next-line
import { ImageDiv, InputDiv, PasswordDiv, DateDiv, TexteDiv } from './functionalComponent';
import Easign from './easign.svg';
import Youtube from './Youtube';
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
  // eslint-disable-next-line
  const [ texte, setTexte ] = useState( data.texte.test ),
    // eslint-disable-next-line
    [ texte2, setTexte2 ] = useState( data.texte.test2 ),
    // eslint-disable-next-line
    [ texte3, setTexte3 ] = useState( data.texte.test3 );
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
      <div className="topd"><input type="text" placeholder="Search" className="searchbox" id="search" /></div>
      <div className="topa">
      </div>
    </div>
    <div className="rowmain">
      <div className="columna" style={ { backgroundColor: themes.lightBlue.columna } }>
        <div style={ { marginTop: "40px" } }></div>
        <TexteDiv valeur="Party A" />
        <ImageDiv valeur="https://media.istockphoto.com/photos/terms-and-conditions-text-in-legal-agreement-or-document-about-or-picture-id1033774358" field="contract" valeurclass="image1" />
      </div>
      <div className="columnb" style={ { backgroundColor: themes.lightBlue.columnb } }>
        <Youtube embedId="hxCFn_-aVlc" /><br/>
        <Youtube embedId="8VJlKOUkUqc" /><br />
        <Youtube embedId="_I0dUL4kpTg" /><br />
      </div>
      <div className="columnc" style={ { backgroundColor: themes.lightBlue.columnc } }>
        <TexteDiv valeur="Party B" />

      </div>
    </div>
    <div className="rowbottom">
      <div className="botcolumna"></div>
      <div className="botcolumnb" style={ { backgroundColor: themes.lightBlue.rowTop } }>Policies  | Conditions | Legacy | easign.io  <i style={ { fontSize: "12px" } } className="fa">&#xf1f9;</i> </div>
      <div className="botcolumna"></div>
    </div>
  </div> );
  return jsx;
}

export default App;
