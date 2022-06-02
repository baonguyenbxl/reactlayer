// eslint-disable-next-line
import './App.css';
import React, { useState,createContext } from 'react';
// eslint-disable-next-line

// eslint-disable-next-line
// eslint-disable-next-line
import { RowTop, RowMain, RowBottom } from './rows';



// eslint-disable-next-line
export const PartyA = createContext();
// eslint-disable-next-line
export const SetPartyA = createContext();
// eslint-disable-next-line
export const PartyB = createContext();
// eslint-disable-next-line
export const SetPartyB = createContext();
// eslint-disable-next-line
export const PartyCenter = createContext();
// eslint-disable-next-line
export const SetPartyCenter = createContext();
function App ()
{
  // eslint-disable-next-line

  // eslint-disable-next-line
  const [ cola, setColA ] = useState( 'partyaa' );
  // eslint-disable-next-line
  const [ colb, setColB ] = useState( 'columncenter' );
  // eslint-disable-next-line
  const [ colc, setColC ] = useState( 'partyba' );
  let htmlx = (
    <PartyA.Provider value={ cola }>
      <SetPartyA.Provider value={ setColA }>
        <PartyCenter.Provider value={ colb }>
          <SetPartyCenter.Provider value={ setColB }>
            <PartyB.Provider value={ colc }>
              <SetPartyB.Provider value={ setColC }>
                <div className="maindiv">
                  <RowTop />
                  <RowMain />
                  <RowBottom />
                </div>
              </SetPartyB.Provider>
            </PartyB.Provider>
          </SetPartyCenter.Provider>
        </PartyCenter.Provider>
      </SetPartyA.Provider>
    </PartyA.Provider>
  )






  /*
  const [ columna, setColumna ] = useState( <div className="columna">
    <div style={ { marginTop: "40px" } }></div>
    <TexteDiv valeur="Party A" /><br />
    { partya.map( ( d, i ) => <React.Fragment key={ i } ><ImageTexte { ...d } /><br/><div style={ { height: "10px" } }></div></React.Fragment>)}
  </div> );
    // eslint-disable-next-line
  const [ columnb, setColumnb ] = useState( <Home /> );
    // eslint-disable-next-line
  const [ columnc, setColumnc ] = useState( <></>);
  // eslint-disable-next-line
  const [ bottoma, setBottoma ] = useState( );
  // eslint-disable-next-line
  const [ bottomb, setBottomb ] = useState(  );
  // eslint-disable-next-line
  const [ bottomc, setBottomc ] = useState(  );
  // eslint-disable-next-line
  const [ rowTop, setRowTop ] = useState(  );
  // eslint-disable-next-line
  const [ rowMain, setRowMain ] = useState( <div className="rowmain">{ columna }{ columnb }{ columnc }</div> );
  // eslint-disable-next-line
  const [ rowBottom, setRowBottom ] = useState(  );


  // eslint-disable-next-line
  const [ jsx, setJsx ] = useState( <div className="maindiv">
    { rowTop }
    { rowMain }
    { rowBottom }
  </div> );
  return jsx;

  */
  return htmlx;
}

export default App;
