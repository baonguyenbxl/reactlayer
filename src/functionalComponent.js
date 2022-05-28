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
    let field = ( props && props.field ) ? props.field : "",
        valeur = ( props && props.valeur ) ? props.valeur : "",
        fieldclass = ( props && props.fieldclass ) ? props.fieldclass : "",
        valeurclass = ( props && props.valeurclass ) ? props.valeurclass : "",
        divclass = ( props && props.divclass ) ? props.divclass : "",
        onclick = ( props && props.onlick ) ? props.onclick : undefined,
        onchange = ( props && props.onchange ) ? props.onchange : undefined,
        jsx = ( <div className={ divclass }><label className={ fieldclass }>{ field }</label><img className={ valeurclass } src={ valeur } alt={ field } /></div> );
    return jsx;
}
