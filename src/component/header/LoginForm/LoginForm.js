import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginOperations} from '../../../redux/auth/auth-operations';

import s from './loginForm.module.css'


export default function LoginForm() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmail = e => {
        setEmail(e.target.value)
    }

    const changePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(loginOperations({ email, password }));
        setEmail('');
        setPassword('')
   


}

    return (
        <form onSubmit={handleSubmit} className={s.container} >
            <div className={s.label}>
                <label htmlFor='email'>e-mail: </label>
                <input type="email" value={email} id="email" onChange={changeEmail}/>
            </div>
            <div className={s.label}>
                <label htmlFor='password'>password: </label>
                <input id="password" value={password} type="password" onChange={changePassword}  />
            </div>
            <button className={s.button} type="submit">logIn</button>
        </form>
    )
}