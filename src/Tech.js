import './Tech.css'
import eosimg from './images/eos.jpg'
import cppimg from './images/CPP_Logo.svg'
import reactimg from './images/reactl.png'
import awsimg from './images/aws.png'
import jsimg from './images/javascript.png'
import sockimg from './images/socket.png'
import nodeimg from './images/Node.js_logo.svg'
import expimg from './images/express.png'
import solimg from './images/Solidity.png'
import mongoimg from './images/mongodb.png'

export function TechDiv ()
{
    let jsx = ( <div className="techmain">
        <div className="techtop">In...</div>
        <div className="techmiddle">
            <img className="imgtech" src={ eosimg } alt="EOS" />
            <img className="imgtech" src={ cppimg } alt="CPP" />
            <img className="imgtech" src={ reactimg } alt="REACT" />
            <img className="imgtech" src={ awsimg } alt="AWS" />
            <img className="imgtech" src={ jsimg } alt="JS" />
            <img className="imgtech" src={ sockimg } alt="SOCKET" />
            <img className="imgtech" src={ nodeimg } alt="NODE" />
            <img className="imgtech" src={ solimg } alt="SOLIDITY" />
            <img className="imgtech" src={ expimg } alt="EXPRESS" />
            <img className="imgtech" src={ mongoimg } alt="MONGO" />
        </div>
        <div className="techbottom">...we trust</div>
    </div> )
    return jsx;
}
