// eslint-disable-next-line
import React, { useState } from 'react';
import './Columns.css';
// eslint-disable-next-line
import { ImageDiv, InputDiv, PasswordDiv, DateDiv, TexteDiv, ImageTexte, VideoTexte, SliderVideos } from './functionalComponent';
// eslint-disable-next-line
import { partya, partyb, columncenter } from './data.js'
import {TechDiv} from './Tech'
// eslint-disable-next-line
export function AboutUs ( props )
{
    let jsx = ( <div className="columnb"></div> )
    return jsx;
}
// eslint-disable-next-line
export function Projects ( props )
{
    let jsx = ( <div className="columnb"></div> )
    return jsx;

}
// eslint-disable-next-line
export function CV3D ( props )
{
    let jsx = ( <div className="columnb"></div> )
    return jsx;

}
// eslint-disable-next-line
export function OurVision ( props )
{
    let jsx = ( <div className="columnb"></div> )
    return jsx;

}
// eslint-disable-next-line
export function Contact ( props )
{
    let jsx = ( <div className="columnb"></div> )
    return jsx;
}
// eslint-disable-next-line
export function Partners ( props )
{
    let jsx = ( <div className="columnb"></div> )
    return jsx;

}
// eslint-disable-next-line
export function Developers ( props )
{

    let jsx = ( <div className="columnb"></div> )
    return jsx;
}
// eslint-disable-next-line
export function Home ( props )
{
    let jsx = ( <div className="columnb"><SliderVideos videos={ columncenter } /><TechDiv /></div> )
    return jsx;
}
// eslint-disable-next-line
export function Demo ( props )
{
    let jsx = ( <div className="columnb">{ columncenter.map( ( d, i ) => <React.Fragment key={ i }><VideoTexte { ...d } /></React.Fragment> ) }
    </div> );
    return jsx;
}

// eslint-disable-next-line
export function MenuButton ( props )
{

}
