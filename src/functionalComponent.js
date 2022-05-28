import React from "react";
import { ReactDOM } from "react-dom/client";

const jsxs = {
    "HFUHGJcgcgfcDYDYGFDKH": {
        tag: "div",
        className: "divclass",
        children: {
            "GDFIYTFUuigiFDTRSDTRDSTR": {
                tag: "label",
                className: "labelclass",
                children: {},
                callback: () => { },
                text: "",
                key: 0
            }
        },
        callback: () => { },
        text: "",
        key: 0
    }
}

export function getJsx ()
{

}
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
export function Component ( props )
{

}
export function Jsx ()
{

}


export function ImageDiv(props)
{
    let key = (props && props.key)? props.key:"",
        valeur = (props && props.valeur)?props.valeur: "",
        keyclass = ( props && props.keyclass ) ? props.keyclass : "",
        valeurclass = ( props && props.valeurclass ) ? props.valeurclass : "",
        divclass = ( props && props.divclass ) ? props.divclass : "",
        onclick = ( props && props.onlick ) ? props.onclick : undefined,
        onchange = ( props && props.onchange ) ? props.onchange : undefined,
        jsx = ( <></> );
    jsx = ( <div className={ divclass }><label className={keyclass}>{key}</label><img className={ valeurclass } src={valeur} alt={key} /></div>)
    return jsx;
}
