// eslint-disable-next-line
import Youtube from './Youtube';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
export function ImageTexte ( props )
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
export function VideoTexte ( props )
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

// eslint-disable-next-line
export const configs = {
    separator: ">",
    idGenerator: ( length = 30 ) =>
    {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            str = '';
        for ( let i = 0; i < length; i++ )
        {
            str += chars.charAt( Math.floor( Math.random() * chars.length ) );
        }
        return str;
    }
}

export function findPath ( ob, key, sep = ">" )
{
    const path = [];
    const keyExists = ( obj ) =>
    {
        if ( !obj || ( typeof obj !== "object" && !Array.isArray( obj ) ) )
        {
            return false;
        }
        else if ( obj.hasOwnProperty( key ) )
        {
            return true;
        }
        else if ( Array.isArray( obj ) )
        {
            let parentKey = path.length ? path.pop() : "";

            for ( let i = 0; i < obj.length; i++ )
            {
                path.push( `${parentKey}[${i}]` );
                const result = keyExists( obj[ i ], key );
                if ( result )
                {
                    return result;
                }
                path.pop();
            }
        }
        else
        {
            for ( const k in obj )
            {
                path.push( k );
                const result = keyExists( obj[ k ], key );
                if ( result )
                {
                    return result;
                }
                path.pop();
            }
        }
        return false;
    };

    keyExists( ob );

    return path.join( sep );
}

export function ImageDiv ( props )
{
    // eslint-disable-next-line
    let jsx = ( <div onClick={ () => { ( props && props.cbOnClick ) ? props.cbOnClick() : undefined } } className={ ( props && props.divclass ) ? props.divclass : "" }><img className={ ( props && props.valeurclass ) ? props.valeurclass : "" } src={ ( props && props.valeur ) ? props.valeur : "" } alt={ ( props && props.field ) ? props.field : "" } /></div> );
    return jsx;
}

export function InputDiv ( props )
{
    // eslint-disable-next-line
    let jsx = ( <div onClick={ () => { ( props && props.cbOnClick ) ? props.cbOnClick() : undefined } } className={ ( props && props.divclass ) ? props.divclass : "" }><input type="text" className={ ( props && props.valeurclass ) ? props.valeurclass : "" } value={ ( props && props.valeur ) ? props.valeur : "" } onChange={ ( e ) => { ( props && props.cbOnChange ) ? props.cbOnChange( e.target.value ) : undefined } } /></div> );
    return jsx;
}

export function PasswordDiv ( props )
{
    // eslint-disable-next-line
    let jsx = ( <div onClick={ () => { ( props && props.cbOnClick ) ? props.cbOnClick() : undefined } } className={ ( props && props.divclass ) ? props.divclass : "" }><input type="password" className={ ( props && props.valeurclass ) ? props.valeurclass : "" } value={ ( props && props.valeur ) ? props.valeur : "" } onChange={ ( e ) => { ( props && props.cbOnChange ) ? props.cbOnChange( e.target.value ) : undefined } } /></div> );
    return jsx;
}

export function TexteDiv ( props )
{
    // eslint-disable-next-line
    let jsx = ( props && props.valeurLink ) ? ( <div className={ ( props && props.divclass ) ? props.divclass : "" }><a href={ props && props.valeurLink } target={ ( props && props.valeurTarget ) ? props.valeurTarget : "" } className={ ( props && props.valeurclass ) ? props.valeurclass : "" }>{ ( props && props.valeur ) ? props.valeur : "" }</a></div> ) : ( <div onClick={ () => { ( props && props.cbOnClick ) ? props.cbOnClick() : undefined } } className={ ( props && props.divclass ) ? props.divclass : "" }><label className={ ( props && props.valeurclass ) ? props.valeurclass : "" }>{ ( props && props.valeur ) ? props.valeur : "" }</label></div> );
    return jsx;
}

export function DateDiv ( props )
{
    // eslint-disable-next-line
    let jsx = ( <div onClick={ () => { ( props && props.cbOnClick ) ? props.cbOnClick() : undefined } } className={ ( props && props.divclass ) ? props.divclass : "" }><input type="date" className={ ( props && props.valeurclass ) ? props.valeurclass : "" } value={ ( props && props.valeur ) ? props.valeur : "" } onChange={ ( e ) => { ( props && props.cbOnChange ) ? props.cbOnChange( e.target.value ) : undefined } } /></div> );
    return jsx;
}

export function SliderVideos ( props )
{
    const [ jsx, setJsx ] = useState( <></> );
    let rows = props.videos;

    useEffect( () =>
    {
        let datas = ( rows && Object.prototype.toString.call( rows ) === '[object Array]' ) ? rows : [];
        setJsx(
            <Carousel
                transitionTime={ 1000 }
                interval={ 5000 }
                autoPlay={ true }
                infiniteLoop={ true }
                showIndicators={ false }
                showThumbs={ false }
                showStatus={ false }
                stopOnHover={ true }
                centerMode={ true }
                startOnLeave={ true }
                selectedItem={ 0 }>
                { datas.map( ( d, i ) => <div key={ i }><VideoTexte { ...d } /></div> ) }
            </Carousel>,
        );
    },
        [ rows, setJsx ],
        undefined,
    );
    return jsx;
}
