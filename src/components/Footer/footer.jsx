import LOGO from '../../assets/logoCouleur.png';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            {/* Affichage du logo avec un lien vers la page d'accueil */}
            <Link to="/">
                <img className='logo' src={LOGO} alt="logo Kasa blanc sur fond noir"/>
            </Link>
            {/* Texte d'informations */}
            <div className='info'> Copyright© 2023 SANSONNETTE Bénédicte. All rights reserved </div>
        </footer>
    )
}
export default Footer