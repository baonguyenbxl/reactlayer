// eslint-disable-next-line
import './App.css';
import React, { useState } from 'react';
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
// eslint-disable-next-line
function MenuButton ( props )
{

}
// eslint-disable-next-line
function ImageTexte ( props )
{

}
// eslint-disable-next-line
function VideoText ( props )
{

}
// eslint-disable-next-line
function Home ( props )
{
  let jsx = ( <div className="columnb" style={ { backgroundColor: themes.lightBlue.columnb } }>
    <Youtube embedId="hxCFn_-aVlc" /><br />
    <Youtube embedId="8VJlKOUkUqc" /><br />
    <Youtube embedId="_I0dUL4kpTg" /><br />
  </div> )
  return jsx;
}
// eslint-disable-next-line
function AboutUs ( props )
{
  let jsx = ( <div className="columnb" style={ { backgroundColor: themes.lightBlue.columnb } }></div> )
  return jsx;
}
// eslint-disable-next-line
function Projects ( props )
{
  let jsx = ( <div className="columnb" style={ { backgroundColor: themes.lightBlue.columnb } }></div> )
  return jsx;

}
// eslint-disable-next-line
function CV3D ( props )
{
  let jsx = ( <div className="columnb" style={ { backgroundColor: themes.lightBlue.columnb } }></div> )
  return jsx;

}
// eslint-disable-next-line
function OurVision ( props )
{
  let jsx = ( <div className="columnb" style={ { backgroundColor: themes.lightBlue.columnb } }></div> )
  return jsx;

}
// eslint-disable-next-line
function Contact ( props )
{
  let jsx = ( <div className="columnb" style={ { backgroundColor: themes.lightBlue.columnb } }></div> )
  return jsx;
}
// eslint-disable-next-line
function Partners ( props )
{
  let jsx = ( <div className="columnb" style={ { backgroundColor: themes.lightBlue.columnb } }></div> )
  return jsx;

}
// eslint-disable-next-line
function Developers ( props )
{

  let jsx = ( <div className="columnb" style={ { backgroundColor: themes.lightBlue.columnb } }></div> )
  return jsx;
}
// eslint-disable-next-line
function Demo ( props )
{
  let jsx = ( <div className="columnb" style={ { backgroundColor: themes.lightBlue.columnb } }></div> )
  return jsx;
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
  const [ columna, setColumna ] = useState( <div className="columna" style={ { backgroundColor: themes.lightBlue.columna } }>
    <div style={ { marginTop: "40px" } }></div>
    <TexteDiv valeur="Party A" /><br />
    <ImageDiv valeur="https://media.istockphoto.com/photos/terms-and-conditions-text-in-legal-agreement-or-document-about-or-picture-id1033774358" field="contract" valeurclass="image1" />
    <br />
    <ImageDiv valeur="https://bilis.com/wp-content/uploads/2016/02/traduction-contrat-1500.jpg" field="contract" valeurclass="image1" />
    <br />
    <ImageDiv valeur="https://930633.smushcdn.com/2388590/wp-content/uploads/2021/03/Signature-electronique.png?lossy=1&strip=1&webp=1" field="contract" valeurclass="image1" />
    <br />
    <ImageDiv valeur="https://invao.org/wp-content/uploads/2020/03/invao-blogartikel-digitalisierung-1366x768px.jpg" field="contract" valeurclass="image1" />
    <br />
  </div> ),
    // eslint-disable-next-line
    [ columnb, setColumnb ] = useState( <Home /> ),
    // eslint-disable-next-line
    [ columnc, setColumnc ] = useState( <div className="columnc" style={ { backgroundColor: themes.lightBlue.columnc } }>
      <div style={ { marginTop: "40px" } }></div>
      <TexteDiv valeur="Party B" /><br />
      <ImageDiv valeur="https://www.logic-immo.com/resources/img/seller/article/conditions-suspensives-desktop.jpg" field="contract" valeurclass="image1" />
      <br />
      <ImageDiv valeur="https://bilis.com/wp-content/uploads/2016/02/traduction-contrat-1500.jpg" field="contract" valeurclass="image1" />
      <br />
      <ImageDiv valeur="https://f.hellowork.com/blogdumoderateur/2017/07/online-signature2-1-612x366.jpg" field="contract" valeurclass="image1" />
      <br />
      <ImageDiv valeur="https://www.finder.com/finder-us/wp-uploads/2018/07/blockchain-large.jpg?fit=2214" field="contract" valeurclass="image1" />
      <br />
    </div> );
  // eslint-disable-next-line
  const [ bottoma, setBottoma ] = useState( <div className="botcolumna"></div> ),
    // eslint-disable-next-line
    [ bottomb, setBottomb ] = useState( <div className="botcolumnb" style={ { backgroundColor: themes.lightBlue.rowTop } }>Policies  | Conditions | Legacy | easign.io  <i style={ { fontSize: "12px" } } className="fa">&#xf1f9;</i> </div> ),
    // eslint-disable-next-line
    [ bottomc, setBottomc ] = useState( <div className="botcolumna"></div> );
  // eslint-disable-next-line
  const [ rowTop, setRowTop ] = useState( <div className="rowtop" style={ { backgroundColor: themes.lightBlue.rowTop } }>
    <div className="topa">
    </div>
    <div className="topc">
      <img src={ Easign } alt="EASIGN.io" className="logoimg" />
    </div>
    <div className="topb" onClick={ () => { setColumnb( <Home /> ) } }>
      <b>
        <i className="fa">&#xf015;</i><br />
        <label>Home</label>
      </b>
    </div>
    <div className="topb" onClick={ () => { setColumnb( <AboutUs /> ) } }>
      <b>
        <i className="fa">&#xf0c0;</i><br />
        <label>About Us</label>
      </b>
    </div>
    <div className="topb" onClick={ () => { setColumnb( <Projects /> ) } }>
      <b>
        <i className="fa">&#xf1c9;</i><br />
        <label>Our Projects</label>
      </b>
    </div>
    <div className="topb" onClick={ () => { setColumnb( <CV3D /> ) } }><b>
      <i className="fa">&#xf2bc;</i><br />
      <label>3D resume</label></b>
    </div>
    <div className="topb" onClick={ () => { setColumnb( <OurVision /> ) } }>
      <b><i className="fa">&#xf06e;</i><br />
        <label>Our vision</label></b>
    </div>
    <div className="topb" onClick={ () => { setColumnb( <Partners /> ) } }>
      <b><i className="fa">&#xf2b5;</i><br />
        <label>Partners</label></b>
    </div>
    <div className="topb" onClick={ () => { setColumnb( <Contact /> ) } }><b>
      <i className="fa">&#xf1fa;</i><br />
      <label>Contact</label></b>
    </div>
    <div className="topb" onClick={ () => { setColumnb( <Developers /> ) } }>
      <b>
        <i className="fa">&#xf079;</i><br />
        <label>Developers</label></b>
    </div>
    <div className="topd"><input type="text" placeholder="Search" className="searchbox" id="search" /></div>
    <div className="topa">
    </div>
  </div> ),
    // eslint-disable-next-line
    [ rowMain, setRowMain ] = useState( <div className="rowmain">{ columna }{ columnb }{ columnc }</div> ),
    // eslint-disable-next-line
    [ rowBottom, setRowBottom ] = useState( <div className="rowbottom">{ bottoma }{ bottomb }{ bottomc }</div> );


  // eslint-disable-next-line
  const [ jsx, setJsx ] = useState( <div className="maindiv">
    { rowTop }
    { rowMain }
    { rowBottom }
  </div> );
  return jsx;
}

export default App;
