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

  return htmlx;
}

export default App;
