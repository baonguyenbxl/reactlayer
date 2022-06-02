// eslint-disable-next-line
import React, { useState, useEffect, useContext, createContext } from 'react';
// eslint-disable-next-line
import { ImageDiv, InputDiv, PasswordDiv, DateDiv, TexteDiv, ImageTexte, VideoTexte } from './functionalComponent';
// eslint-disable-next-line
import { Home, AboutUs, Contact, Projects, Developers, CV3D, Demo, OurVision, Partners } from './pages';
// eslint-disable-next-line
import { PartyA, PartyB, PartyCenter } from './App';
// eslint-disable-next-line
import { partya, partyb, columncenter } from './data.js'
// eslint-disable-next-line
import './Columns.css'
// eslint-disable-next-line
export function ColumnA ()
{
    let first = useContext( PartyA );
    // eslint-disable-next-line
    const [ jsx, setJsx ] = useState( <div className="columna"><div style={ { marginTop: "40px" } }></div></div> );
    useEffect( () =>
    {
        switch ( first )
        {
            case 'partyaa':
                setJsx( <div className="columna">
                    <div style={ { marginTop: "40px" } }></div>
                    <TexteDiv valeur="Party A" /><br />
                    { partya.map( ( d, i ) =><div key={ i }><ImageTexte { ...d } /><br /></div> ) }
                </div> );
                break;
            default:
                break;
        }
    }, [ setJsx, first ] )


    return jsx;
}

// eslint-disable-next-line
export function ColumnCenter ()
{
    let first = useContext( PartyCenter );
    // eslint-disable-next-line
    const [ jsx, setJsx ] = useState( <div className="columna"><div style={ { marginTop: "40px" } }></div></div> );
    useEffect( () =>
    {
        switch ( first )
        {
            case 'home':
                setJsx( <Home /> );
                break;
            case 'aboutus':
                setJsx( <AboutUs /> );
                break;
            case 'developers':
                setJsx( <Developers /> );
                break;
            case 'contact':
                setJsx( <Contact /> );
                break;
            case 'partners':
                setJsx( <Partners /> );
                break;
            case 'ourvision':
                setJsx( <OurVision /> );
                break;
            case 'demo':
                setJsx( <Demo /> );
                break;
            case 'cv3d':
                setJsx( <CV3D /> );
                break;
            case 'projects':
                setJsx( <Projects /> );
                break;
            default:
                setJsx( <Home /> );
                break;
        }
    }, [ setJsx, first ] )
    return jsx;
}

// eslint-disable-next-line
export function ColumnB ()
{
    let first = useContext( PartyB );
    // eslint-disable-next-line
    const [ jsx, setJsx ] = useState( <div className="columnc"><div style={ { marginTop: "40px" } }></div></div> );
    useEffect( () =>
    {
        switch ( first )
        {
            case 'partyba':
                setJsx( <div className="columnc">
                    <div style={ { marginTop: "40px" } }></div>
                    <TexteDiv valeur="Party B" /><br />
                    { partyb.map( ( d, i ) =><div key={ i }><ImageTexte { ...d } /><br /></div> ) }
                </div> );
                break;
            default:
                break;
        }
    }, [ setJsx, first ] )
    return jsx;
}

