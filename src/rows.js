// eslint-disable-next-line
import Easign from './easign.svg';
import './Rows.css';
// eslint-disable-next-line
import React, { useState, useEffect, useContext, createContext } from 'react';
// eslint-disable-next-line
//import { Home, AboutUs, OurVision, Developers, Contact, Partners, Demo, CV3D, Projects } from './pages.js';
// eslint-disable-next-line
import { ColumnA, ColumnCenter, ColumnB } from './columns';
// eslint-disable-next-line
import { PartyA, PartyB, PartyCenter, SetPartyA, SetPartyB, SetPartyCenter } from './App';
// eslint-disable-next-line
import Easign2 from './images/easign2.png';
export function RowTop ()
{
    const setPage = useContext( SetPartyCenter );
    const [ jsx, setJsx ] = useState( <></> )
    useEffect(() => {
        function changePage ( n = 'home' )
        {
            setPage(n)
        }
        setJsx( <div className="rowtop">
            <div className="topa">
            </div>
            <div className="topc">
                <img src={ Easign2 } alt="EASIGN.io" className="logoimg" />
            </div>
            <div className="topb" onClick={ () => { changePage('home') } }>
                <i className="fa">&#xf015;</i><br />
                <label>Home</label>
            </div>
            
            <div className="topb" onClick={ () => { changePage( 'projects' ) } }>
                <i className="fa">&#xf1c9;</i><br />
                <label>Our Projects</label>
            </div>
            <div className="topb" onClick={ () => { changePage('cv3d')} }>
                <i className="fa">&#xf2bc;</i><br />
                <label>3D resume</label>
            </div>
            <div className="topb" onClick={ () => { changePage( 'ourvision' ) } }>
                <i className="fa">&#xf06e;</i><br />
                <label>Our vision</label>
            </div>
            <div className="topb" onClick={ () => { changePage( 'partners' ) } }>
                <i className="fa">&#xf2b5;</i><br />
                <label>Investors</label>
            </div>
            <div className="topb" onClick={ () => { changePage( 'developers' ) } }>
                <i className="fa">&#xf079;</i><br />
                <label>Developers</label>
            </div>
            <div className="topb" onClick={ () => { changePage( 'aboutus' ) } }>
                <i className="fa">&#xf0c0;</i><br />
                <label>About Us</label>
            </div>
            <div className="topb" onClick={ () => { changePage( 'contact' ) } }>
                <i className="fa">&#xf1fa;</i><br />
                <label>Contact</label>
            </div>
            <div className="topd"><input type="text" placeholder="Search" className="searchbox" id="search" /></div>
            <div className="topa">
            </div>
        </div> )
    }, [setPage,setJsx])
    
    return jsx;
}
// eslint-disable-next-line
export function RowMain ()
{
    let jsx = ( <div className="rowmain"><ColumnA /><ColumnCenter /><ColumnB /></div> )
    return jsx;
}
// eslint-disable-next-line
export function RowBottom ()
{
    const bottoma = ( <div className="botcolumna"></div> ),
        bottomb = ( <div className="botcolumnb">Policies  | Conditions | Legacy | easign.io  <i style={ { fontSize: "12px" } } className="fa">&#xf1f9;</i> </div> ),
        bottomc = ( <div className="botcolumna"></div> );
    const jsx = ( <div className="rowbottom">{ bottoma }{ bottomb }{ bottomc }</div> );
    return jsx;
}

