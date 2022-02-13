import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../../redux/auth/auth-selectors';
import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import s from './appBar.module.css'


export default function AppBar() {
    const isAuthenticated = useSelector(getIsAuthenticated);
    return (
        <header className={s.container}>
         <Navigation />   
         {isAuthenticated  ? <UserMenu /> : <AuthNavigation />}
        </header>
    )
}