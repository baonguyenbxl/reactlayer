// eslint-disable-next-line
import './App.css';
import React, { useState } from 'react';
// eslint-disable-next-line
import { ImageDiv, InputDiv, PasswordDiv, DateDiv, TexteDiv } from './functionalComponent';
import Easign from './easign.svg';
import Youtube from './Youtube';


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
const partya = [

  {
    texte: "Propose terms & conditions",
    url: "https://media.istockphoto.com/photos/terms-and-conditions-text-in-legal-agreement-or-document-about-or-picture-id1033774358",
    containerClass: "containerClass",
    divImageClass: "divImageClass",
    imageClass: "imageClass",
    texteClass: "texteClass",
    texteLink: "",
    divTexteClass: "divTexteClass",
    imageOnClick: () => { },
    textOnClick: () => { },
    alt: "terms",
    texteTarget: "",
    texteLeft: true
  },
  {
    texte: "New concensus",
    url: "https://bilis.com/wp-content/uploads/2016/02/traduction-contrat-1500.jpg",
    containerClass: "containerClass",
    divImageClass: "divImageClass",
    imageClass: "imageClass",
    texteClass: "texteClass",
    texteLink: "",
    divTexteClass: "divTexteClass",
    imageOnClick: () => { },
    textOnClick: () => { },
    alt: "image1",
    texteTarget: "",
    texteLeft: true
  },
  {
    texte: "Sign the contract",
    url: "https://930633.smushcdn.com/2388590/wp-content/uploads/2021/03/Signature-electronique.png?lossy=1&strip=1&webp=1",
    containerClass: "containerClass",
    divImageClass: "divImageClass",
    imageClass: "imageClass",
    texteClass: "texteClass",
    texteLink: "",
    divTexteClass: "divTexteClass",
    imageOnClick: () => { },
    textOnClick: () => { },
    alt: "image1",
    texteTarget: "",
    texteLeft: true
  },
  {
    texte: "Write into the blockchain",
    url: "https://invao.org/wp-content/uploads/2020/03/invao-blogartikel-digitalisierung-1366x768px.jpg",
    containerClass: "containerClass",
    divImageClass: "divImageClass",
    imageClass: "imageClass",
    texteClass: "texteClass",
    texteLink: "",
    divTexteClass: "divTexteClass",
    imageOnClick: () => { },
    textOnClick: () => { },
    alt: "image1",
    texteTarget: "",
    texteLeft: true
  }

]

const partyb = [

  {
    texte: "Review terms & conditions",
    url: "https://www.logic-immo.com/resources/img/seller/article/conditions-suspensives-desktop.jpg",
    containerClass: "containerClass",
    divImageClass: "divImageClass",
    imageClass: "imageClass",
    texteClass: "texteClass",
    texteLink: "",
    divTexteClass: "divTexteClass",
    imageOnClick: () => { },
    textOnClick: () => { },
    alt: "terms",
    texteTarget: "",
    texteLeft: false
  },
  {
    texte: "Accept concensus",
    url: "https://bilis.com/wp-content/uploads/2016/02/traduction-contrat-1500.jpg",
    containerClass: "containerClass",
    divImageClass: "divImageClass",
    imageClass: "imageClass",
    texteClass: "texteClass",
    texteLink: "",
    divTexteClass: "divTexteClass",
    imageOnClick: () => { },
    textOnClick: () => { },
    alt: "image1",
    texteTarget: "",
    texteLeft: false
  },
  {
    texte: "Sign the contract",
    url: "https://f.hellowork.com/blogdumoderateur/2017/07/online-signature2-1-612x366.jpg",
    containerClass: "containerClass",
    divImageClass: "divImageClass",
    imageClass: "imageClass",
    texteClass: "texteClass",
    texteLink: "",
    divTexteClass: "divTexteClass",
    imageOnClick: () => { },
    textOnClick: () => { },
    alt: "image1",
    texteTarget: "",
    texteLeft: false
  },
  {
    texte: "Write into the blockchain",
    url: "https://www.finder.com/finder-us/wp-uploads/2018/07/blockchain-large.jpg?fit=2214",
    containerClass: "containerClass",
    divImageClass: "divImageClass",
    imageClass: "imageClass",
    texteClass: "texteClass",
    texteLink: "",
    divTexteClass: "divTexteClass",
    imageOnClick: () => { },
    textOnClick: () => { },
    alt: "image1",
    texteTarget: "",
    texteLeft: false
  }

]

// eslint-disable-next-line
const templateImageTexte = {
  texte: "",
  url: "",
  containerClass: "",
  divImageClass: "",
  imageClass: "",
  texteClass: "",
  texteLink: "",
  divTexteClass: "",
  imageOnClick: () => { },
  textOnClick: () => { },
  alt: "image1",
  texteTarget: "",
  texteLeft: true
},
  // eslint-disable-next-line
  templateVideoTexte = {
  texte: "Voici le text à mettre à côté de l'image",
  embedId: "hxCFn_-aVlc",
  containerClass: "containerClass",
  divVideoClass: "divVideoClass",
  videoClass: "videoClass",
  texteClass: "texteClass",
  texteLink: "",
  divTexteClass: "divTexteClass",
  textOnClick: () => { },
  texteTarget: "",
  texteLeft: false
}

const columncenter = [
  {
    texte: "The blockchain offers the best security for your data & privacy. Immutable property of data offers high fiability",
    embedId: "hxCFn_-aVlc",
    containerClass: "containerClass",
    divVideoClass: "divVideoClass",
    videoClass: "videoClass",
    texteClass: "texteClass",
    texteLink: "",
    divTexteClass: "divTexteClass",
    textOnClick: () => { },
    texteTarget: "",
    texteLeft: false
  },
  {
    texte: "Actions are raised only when conditions are met",
    embedId: "8VJlKOUkUqc",
    containerClass: "containerClass",
    divVideoClass: "divVideoClass",
    videoClass: "videoClass",
    texteClass: "texteClass",
    texteLink: "",
    divTexteClass: "divTexteClass",
    textOnClick: () => { },
    texteTarget: "",
    texteLeft: false
  },
  {
    texte: "We use ricardian contract that offers human readability and scalability. Therefore, history can be traced with blockchain's trust",
    embedId: "_I0dUL4kpTg",
    containerClass: "containerClass",
    divVideoClass: "divVideoClass",
    videoClass: "videoClass",
    texteClass: "texteClass",
    texteLink: "",
    divTexteClass: "divTexteClass",
    textOnClick: () => { },
    texteTarget: "",
    texteLeft: false
  }
]
// eslint-disable-next-line
function ImageTexte ( props )
{
  let jsx = ( <></> );
  // eslint-disable-next-line
  let texte = ( <></> );

  let image = ( <></> );
  if ( props && props.url && props.url !== "" )
  {
    // eslint-disable-next-line
    image = ( <div onClick={ () => { ( props && props.imageOnClick ) ? props.imageOnClick() : undefined } } className={ ( props && props.divImageClass ) ? props.divImageClass : "" }><img className={ ( props && props.imageClass ) ? props.imageClass : "" } src={ ( props && props.url ) ? props.url : "" } alt={ ( props && props.alt ) ? props.alt : "" } /></div> );
    if ( props.texte && props.texte !== "" )
    {
      // eslint-disable-next-line
      texte = ( props && props.texteLink ) ? ( <div className={ ( props && props.divTexteClass ) ? props.divTexteClass : "" }><a href={ props && props.texteLink } target={ ( props && props.texteTarget ) ? props.texteTarget : "" } className={ ( props && props.texteClass ) ? props.texteClass : "" }>{ ( props && props.texte ) ? props.texte : "" }</a></div> ) : ( <div onClick={ () => { ( props && props.texteOnClick ) ? props.texteOnClick() : undefined } } className={ ( props && props.divTexteClass ) ? props.divTexteClass : "" }><label className={ ( props && props.texteClass ) ? props.texteClass : "" }>{ ( props && props.texte ) ? props.texte : "" }</label></div> );
      if ( props.texteLeft === true )
      {
        jsx = ( <div className={ ( props.containerClass ) ? props.containerClass : "" }>{ texte }{ image }</div> )
      } else
      {
        jsx = ( <div className={ ( props.containerClass ) ? props.containerClass : "" }>{ image }{ texte }</div> )
      }
    } else
    {
      jsx = ( <div className={ ( props.containerClass ) ? props.containerClass : "" }>{ image }</div> )
    }
  }
  return jsx;
}
// eslint-disable-next-line
function VideoTexte ( props )
{
  let jsx = ( <></> );
  // eslint-disable-next-line
  let texte = ( <></> );

  let video = ( <></> );
  if ( props && props.embedId && props.embedId !== "" )
  {
    // eslint-disable-next-line
    video = ( <div className={ ( props && props.divVideoClass ) ? props.divVideoClass : "" }><Youtube embedId={ props.embedId } /></div> );
    if ( props.texte && props.texte !== "" )
    {
      // eslint-disable-next-line
      texte = ( props && props.texteLink ) ? ( <div className={ ( props && props.divTexteClass ) ? props.divTexteClass : "" }><a href={ props && props.texteLink } target={ ( props && props.texteTarget ) ? props.texteTarget : "" } className={ ( props && props.texteClass ) ? props.texteClass : "" }>{ ( props && props.texte ) ? props.texte : "" }</a></div> ) : ( <div onClick={ () => { ( props && props.texteOnClick ) ? props.texteOnClick() : undefined } } className={ ( props && props.divTexteClass ) ? props.divTexteClass : "" }><label className={ ( props && props.texteClass ) ? props.texteClass : "" }>{ ( props && props.texte ) ? props.texte : "" }</label></div> );
      if ( props.texteLeft === true )
      {
        jsx = ( <div className={ ( props.containerClass ) ? props.containerClass : "" }>{ texte }{ video }</div> )
      } else
      {
        jsx = ( <div className={ ( props.containerClass ) ? props.containerClass : "" }>{ video }{ texte }</div> )
      }
    } else
    {
      jsx = ( <div className={ ( props.containerClass ) ? props.containerClass : "" }>{ video }</div> )
    }
  }
  return jsx;
}
// eslint-disable-next-line
function Home ( props )
{
  let jsx = ( <div className="columnb" style={ { backgroundColor: themes.lightBlue.columnb } }>{ columncenter.map( ( d, i ) => <React.Fragment key={ i }><VideoTexte { ...d } /><br /><div style={ { height: "40px" } }></div></React.Fragment>)}
  </div> );
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

  // eslint-disable-next-line
  const [ columna, setColumna ] = useState( <div className="columna" style={ { backgroundColor: themes.lightBlue.columna } }>
    <div style={ { marginTop: "40px" } }></div>
    <TexteDiv valeur="Party A" /><br />
    { partya.map( ( d, i ) => <React.Fragment key={ i } ><ImageTexte { ...d } /><br/><div style={ { height: "10px" } }></div></React.Fragment>)}
  </div> );
    // eslint-disable-next-line
  const [ columnb, setColumnb ] = useState( <Home /> );
    // eslint-disable-next-line
  const [ columnc, setColumnc ] = useState( <div className="columnc" style={ { backgroundColor: themes.lightBlue.columnc } }>
      <div style={ { marginTop: "40px" } }></div>
      <TexteDiv valeur="Party B" /><br />
    { partyb.map( ( d, i ) => <React.Fragment key={ i } ><ImageTexte { ...d } /><br /><div style={ { height: "40px" } }></div></React.Fragment>)}
  </div> );
  // eslint-disable-next-line
  const [ bottoma, setBottoma ] = useState( <div className="botcolumna"></div> );
  // eslint-disable-next-line
  const [ bottomb, setBottomb ] = useState( <div className="botcolumnb" style={ { backgroundColor: themes.lightBlue.rowTop } }>Policies  | Conditions | Legacy | easign.io  <i style={ { fontSize: "12px" } } className="fa">&#xf1f9;</i> </div> );
  // eslint-disable-next-line
  const [ bottomc, setBottomc ] = useState( <div className="botcolumna"></div> );
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
  </div> );
  // eslint-disable-next-line
  const [ rowMain, setRowMain ] = useState( <div className="rowmain">{ columna }{ columnb }{ columnc }</div> );
  // eslint-disable-next-line
  const [ rowBottom, setRowBottom ] = useState( <div className="rowbottom">{ bottoma }{ bottomb }{ bottomc }</div> );


  // eslint-disable-next-line
  const [ jsx, setJsx ] = useState( <div className="maindiv">
    { rowTop }
    { rowMain }
    { rowBottom }
  </div> );
  return jsx;
}

export default App;
