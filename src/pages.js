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
import pix0 from './images/pix/econtract.jpg'
import pix1 from './images/pix/econtractb.jpg'
import pix2 from './images/pix/ecommercea.jpg'
import pix3 from './images/pix/employmentc.jpg'
import pix4 from './images/pix/blockchaine.jpg'
import pix5 from './images/pix/laws.jpg'
import pix6 from './images/pix/blockchaina.jpg'
import pix7 from './images/pix/employmenta.jpg'
import pix8 from './images/pix/laws.jpg'
import pix9 from './images/pix/nftb.jpg'
import pic1 from './images/pix/chatbot.jpg'
import pic2 from './images/pix/ecommercea.jpg'
import pic3 from './images/pix/employmentc.jpg'
// eslint-disable-next-line
export function AboutUs ( props )
{
    const array = [ img1, img2, img3, img4 ]
    let jsx = ( <div className="columnb">
        <div className="centerbox">
            <div style={ { marginRight: "15%" } }>
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
            <div style={ { marginRight: "15%" } }>
                <p style={ { fontSize: "25px" } }>Our Projects</p><br />
                <p>Awaiting for the European Commission give legal value to the signatures through the blockchain, we prepair to be one of the firstest decentralized  high-trust consensus  provider offering ability of tracing a subject history.</p>
                <p>From real estate rental contract to employment contract, ... everything become so easy.</p>
                <p>According to the RGPD laws, non-confidential information  can be stored on the blockchain since we only record ID and translate info with a local database</p>
                <p><h2>Specifications:</h2></p>
                <p>In order to offer an unique product, the project will be broken down into three stages:</p>
                <p>- First: platform dedicated to signing contracts online through the blockchain</p>
                <p>- Second: professional network platform by integrating the first project</p>
                <p>- Third: training certificate publisher on the blockchain network using IPFS</p>
                <p></p>
                <p>We use most powerfull web-oriented technologies like:</p>
                <p>Frontend: ReactJs</p>
                <p>Backend: NodeJs</p>
                <p>Database: NoSQL (mongoDB Atlas)</p>
                <p>APIs: Express, Socket.io, GraphQL</p>
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
    let array = [pix6,pix0,pix7,pix8,pix9]
    let jsx = ( <div className="columnb">
        <div className="centerbox">
            <div style={{marginRight:"15%"}}>
            <p><h1>Our 3D Resume</h1></p>
                <p>Realizing the importance of digital in the evolution of our society, we are convinced that the blockchain will be the essential support for the development of future technology.</p>
                <p>By using Ricardian contracts, we aim to offer high reliability by registering each transaction on the blockchain network in order to provide digital traceability.</p>
                <p></p>
                <p><h1>Show cases - Proof of stake:</h1></p>
                <p>- According to CNBC, LinkedIn would have generated no less than 3 billion dollars in advertising revenue during the year which ended on March 31. This is an increase of 60% compared to the previous year, a sign that the growth of the social network of professionals has not suffered from the health crisis , quite the contrary.</p>
                <p>- Following the various studies, the cost of recruitment and the integration phase is estimated at between 15 and 25% of the gross annual salary of the person hired.</p>
                <p>Where does the cost of recruitement come from?  From the screening step realized by headhunters or HR</p>
                <p>What does LinkedIn offer beside connection between different parties?  Nothing else, they provide a matching based on user-trust information</p>
                <p>What can Easign.io offer more than LinkedIn?  We offer greater precision for the matching process of candidate based on the profile blockchain-trust to avoid wrong candidate, what is the worst nightmare for companies</p>
                <ImagesHorizontal arr={ array } classMainDiv="horizontalimgs" classImgs="horizontalimg" />
                <p><h1>Use cases - Proof of concept:</h1></p>
                <p>- When a company is hiring, the matching event is raised, easign.io send queries to the blockchain to get transactions in order to draw the timeline equivalent candidate's professional experiences</p>
                <p>- Easign.io proposes a list of candidate fulfilling requirements</p>
                <p>- Company and user accept a new consensus then sign each other on our plateform</p>
                <p>- Signatures and contract's terms will be written into the blockchain network ...</p>
                <p><h2>We can imagine that this concept can apply also to real estate rental, second-hand cars, ...</h2></p>
                <p></p>
            </div>
        </div>
    </div> )
    return jsx;

}
// eslint-disable-next-line
export function OurVision ( props )
{
    const array = [ pix1, pix2, pix3, pix4, pix5 ]
    let jsx = ( <div className="columnb">
        <div className="centerbox">
            <div style={ { marginRight: "15%" } }>
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
    let jsx = ( <div className="columnb"><div className="centerbox"><p style={ { fontSize: "25px" } }>Contact Us</p><br /><p><i style='font-size:24px' class='fas'>&#xf2b6;</i> Email: easign.invest@gmail.com</p><p><i style='font-size:24px' class='fas'>&#xf098;</i>Tel: 0470 34 81 13</p><p>Address: 10 rue Middelbourg - 1170 Brussels</p><div><iframe title="address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.819189366661!2d4.415606416004985!3d50.79745937952485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3dadbc1b449a5%3A0xc967c95833861d8!2sRue%20Middelbourg%2010%2C%201170%20Watermael-Boitsfort!5e0!3m2!1sfr!2sbe!4v1654217428188!5m2!1sfr!2sbe" style={ { width: "100%", border: 0 } } allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div> )
    return jsx;
}
// eslint-disable-next-line
export function Partners ( props )
{
    let jsx = ( <div className="columnb">
        <div className="centerbox">
            <div style={ { marginRight: "15%" } }>
                <p><h2>What are our strategies?</h2></p>
                <p><h3>- First year - test phase:</h3></p>
                <p>Free access for companies and recruiters but monthly fee's contract would be signed for the second year</p>
                <p>Always free access for users</p>
                <p>Principal incomes through ads and public investment by our crypto token</p>
                <p>Collect bugs and fix them</p>
                <p>Data feeding thanks to free access</p>
                <p><h3>- Second year - Marketing and Commercial:</h3></p>
                <p>According to our forecasts, this project would be able from the second year, at least to be self-financing, at most already generate the profits to make the initial investment profitable.</p>
                <p>The sources of revenue will come from subscriptions and advertising as well as the extra services that we will have developed in the meantime.</p>
                <p><h2>Expenses evaluated?</h2></p>
                <p>- Unique expenses:</p>
                <p>Set up cost: 10k</p>
                <p>Equipment and infrastructure: 30k</p>
                <p>- Monthly expenses:</p>
                <p>Salary: 70k</p>
                <p>Office and charges: 5k</p>
                <p>Deployment: 2k</p>
                <p>Marketing: 5k</p>
                <p>Total: 82k</p>
                <p><h2>Monthly incomes target?</h2></p>
                <p>From companies with various types of contract (100): 300k</p>
                <p>From advertising and extra services: 100k</p>
            </div>
        </div>
    </div> )
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
