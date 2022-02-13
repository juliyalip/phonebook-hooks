import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { getUserNameSelector } from "../../../redux/auth/auth-selectors";
import { logautOperation } from '../../../redux/auth/auth-operations'
import avatar from '../../../image/avatar.jpg';
import s from './userMenu.module.css'




export default function UserMenu() {

    
    const name = useSelector(getUserNameSelector);
    const dispatch = useDispatch();


   const onLogaut = () => {
        dispatch( logautOperation ())
    }

    return (
        <div className={s.container}>
            
            <p>Wellcome, {name} </p>
            <img className={s.avatar} src={avatar} alt={name} width="32" />
            <button type="button"
            className={s.button}   onClick={onLogaut}>logout</button>
  </div>
    )
}