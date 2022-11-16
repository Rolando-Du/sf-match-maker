import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../../assets/stylesheets/principal_structure/Footer.css';


const Footer = () => {
    return (
        <div className="footer-cont">
            <div className='list-icon'>
                <div className="guillote">
                    <a href='https://www.linkedin.com/in/guillermoscharf/' target="_blank" rel="noreferrer">Guillermo Scharf</a>
                    <FontAwesomeIcon className='icons' icon={faLinkedin} />
                </div>
                <div className="javi">
                    <a href='https://www.linkedin.com/in/javieremanuelhuebra/' target="_blank" rel="noreferrer">Javier Huebra</a>
                    <FontAwesomeIcon className='icons' icon={faLinkedin} />
                </div>
                <div className="rolo">
                    <a href='https://www.linkedin.com/in/rolando-ramon-duarte-93116b17a/' target="_blank" rel="noreferrer">Rolando Duarte</a>
                    <FontAwesomeIcon className='icons' icon={faLinkedin} />
                </div>
                <div className="emma">
                    <a href='https://www.linkedin.com/in/emmanuel-enrique-mombelli-366764148/' target="_blank" rel="noreferrer">Emanuel Mombelli</a>
                    <FontAwesomeIcon className='icons' icon={faLinkedin} />
                </div>
            </div>

        </div>
    )
}

export default Footer;