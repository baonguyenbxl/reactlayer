// eslint-disable-next-line
import React, { useState } from 'react';
import './Columns.css';
// eslint-disable-next-line
import { ImageDiv, InputDiv, PasswordDiv, DateDiv, TexteDiv, ImageTexte, VideoTexte, SliderVideos } from './functionalComponent';
// eslint-disable-next-line
import { partya, partyb, columncenter } from './data.js'
// eslint-disable-next-line
import { TechDiv } from './Tech'
// eslint-disable-next-line
import { CanvasVertical4, CanvasHorizontal5, ImagesHorizontal } from './boxes.js'
import img1 from './images/pix/colleaguesa.jpeg'
import img2 from './images/pix/colleaguesb.jpeg'
import img3 from './images/pix/colleaguesc.jpg'
import img4 from './images/pix/colleaguesd.jpeg'

import pix1 from './images/pix/econtractb.jpg'
import pix2 from './images/pix/ecommercea.jpg'
import pix3 from './images/pix/employmentc.jpg'
import pix4 from './images/pix/blockchaine.jpg'
import pix5 from './images/pix/laws.jpg'

import pic1 from './images/pix/chatbot.jpg'
import pic2 from './images/pix/ecommercea.jpg'
import pic3 from './images/pix/employmentc.jpg'
// eslint-disable-next-line
export function AboutUs ( props )
{
    const array = [ img1, img2, img3, img4 ]
    let jsx = ( <div className="columnb">
        <div className="centerbox">
            <div>
                <p style={ { fontSize: "25px" } }>About Us</p><br />
                <p>We are a team of young developers with different profiles.</p>
                <p>What brings us together is the dynamism and passion for high-tech and precisely the blockchain.</p>
                <p>Aware of living in the digital age where its development is moving up a gear, we have decided to position ourselves on the front line and be actors in its evolution.</p>
                <p>The diversity of skills as well as the complicity of our members offers remarkable versatility in the web-oriented world.</p>
            </div>
            <CanvasVertical4 arr={ array } w={ 400 } h={ 600 } />
        </div>
    </div> )
    return jsx;
}
// eslint-disable-next-line
export function Projects ( props )
{
    const array = [ pic1, pic2, pic3 ];
    let jsx = ( <div className="columnb">
        <div className="centerbox">
            <div>
                <p style={ { fontSize: "25px" } }>Our Projects</p><br />
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

            <ImagesHorizontal arr={ array } classMainDiv="horizontalimgs" classImgs="horizontalimg" />

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
    const array = [ pix1, pix2, pix3, pix4, pix5 ]
    let jsx = ( <div className="columnb">
        <div className="centerbox">
            <div>
                <p style={ { fontSize: "25px" } }>Our Vision</p><br />
                <p>We believe that the electoral voting system will resort in a near future to the blockchain technology</p>
                <p>The banking sector will have to align with blockchain technology</p>
                <p>E-commerce will be done through social media with bots leveraging blockchain networks</p>
                <p>And the cryptocurrencies will be the next generation of our financial system</p>
            </div><br />
            <ImagesHorizontal arr={ array } classMainDiv="horizontalimgs" classImgs="horizontalimg" />
        </div>
    </div> )
    return jsx;

}
// eslint-disable-next-line
export function Contact ( props )
{
    let jsx = ( <div className="columnb"><div className="centerbox"><p style={ { fontSize: "25px" } }>Contact Us</p><br /><p>Email: nguyenhuynhtrongbao@gmail.com</p><p>Tel: 0470 34 81 13</p><p>Address: 10 rue Middelbourg - 1170 Brussels</p><div><iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.819189366661!2d4.415606416004985!3d50.79745937952485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3dadbc1b449a5%3A0xc967c95833861d8!2sRue%20Middelbourg%2010%2C%201170%20Watermael-Boitsfort!5e0!3m2!1sfr!2sbe!4v1654217428188!5m2!1sfr!2sbe" style={ { width: "100%", border: 0 } } allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div> )
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

    let jsx = ( <div className="columnb"><h2 style={ { textAlign: "center" } }>Coming soon...</h2></div> )
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
