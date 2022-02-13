import { Link } from 'react-router-dom';
import s from './authNavigation.module.css'

export default function AuthNavigation() {
    
    return (
        <div className={s.container}>
            <Link className={ s.authLink} to="/registr">Registr</Link>
            <Link className={ s.authLink} to="/login">LogIn</Link>
      </div>

    )
}