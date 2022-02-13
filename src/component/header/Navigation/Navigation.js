import { NavLink } from "react-router-dom";
import s from './navigation.module.css'

const Navigation = () => (
    <nav>
    <ul className={s.navList}>
        <li className={s.navItem}>
            <NavLink to="/home">home</NavLink>

        </li>
        <li className={s.navItem} >
            <NavLink to="/phonebook">phonebook</NavLink>
        </li>
        </ul>
        </nav>
);

export default Navigation;

