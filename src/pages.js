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
    let jsx = ( <div className="columnb">
        <div className="centerbox">
            <p style={ { fontSize: "25px" } }>Our Project</p><br />
            <p>Awaiting for the European Commission give legal value to the signatures through the blockchain, we prepair to be one of the firstest decentralized  high-trust consensus  provider offering ability of tracing a subject history.</p>
            <p>From real estate rental contract to employment contract, ... everything become so easy.</p>
            <p>According to the RGPD laws, non-confidential information  can be stored on the blockchain since we only record ID and translate info with a local database</p>
            <p>We use most powerfull web-oriented technologies like:</p>
            <p>Frontend: ReactJs</p>
            <p>Backend: NodeJs</p>
            <p>Database: NoSQL (mongoDB Atlas)</p>
            <p>APIs: ExpressJs, Socket.io</p>
            <p>Blockchain: EOS network</p>
            <p>Deployment: Amazon Web Services</p>
            <p>... to offer scalability, stability, security, ... with highest bandwith waranty</p>
        </div>
    </div> )
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
    let jsx = ( <div className="columnb">
        <div className="centerbox">
            <p style={ { fontSize: "25px" } }>Our Vision</p><br />
            <p>We believe that the electoral voting system will resort in a near future to the blockchain technology</p>
            <p>Also financials transactions will be realized through smart contracts.</p>
            <p>Welcome to the High-Trust era</p>
        </div>
    </div> )
    return jsx;

}
// eslint-disable-next-line
export function Contact ( props )
{
    let jsx = ( <div className="columnb"><div className="centerbox"><p style={ { fontSize: "25px" } }>Contact Us</p><br /><p>Email: nguyenhuynhtrongbao@gmail.com</p><p>Tel: 0470 34 81 13</p><p>Address: 10 rue Middelbourg - 1170 Brussels</p><div><iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.819189366661!2d4.415606416004985!3d50.79745937952485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3dadbc1b449a5%3A0xc967c95833861d8!2sRue%20Middelbourg%2010%2C%201170%20Watermael-Boitsfort!5e0!3m2!1sfr!2sbe!4v1654217428188!5m2!1sfr!2sbe" style={ { width:"600px",height:"450px",border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div> )
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
