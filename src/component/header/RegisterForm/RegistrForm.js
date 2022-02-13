import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {registrOperations} from '../../../redux/auth/auth-operations';
import s from './registrForm.module.css'

export default function RegistrForm() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeUserName = e => {
        setName(e.target.value)
    }

    const changeEmail = e => {
        setEmail(e.target.value)
    }

    const changePassword = e => {
     setPassword(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault();
         if (name.length < 6 && password.length < 6) {
             alert('name and password should be > 6 letters')
             return false
         }
        dispatch(registrOperations({ name, email, password }));
        setName('');
        setEmail('');
      setPassword('')
}

    return (
        <form className={s.container} onSubmit={handleSubmit }>
        <div className={s.label}>
            <label htmlFor="nameUser">name: </label>
            <input type="text" id="nameUser" value={name} onChange={changeUserName } />
            </div>
            <div className={s.label}>
                <label htmlFor='email'>e-mail:</label>
                <input id="email" type="email" value={email} onChange={changeEmail} />
            </div>
            <div className={s.label}>
                <label htmlFor='password'>password:</label>
                <input type="password" value={password} onChange={changePassword} id="password"/>
            </div>
            <button className={s.button} type="submit"> regist</button>
    </form>
)
}