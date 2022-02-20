import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addContactOperation} from '../../../redux/contact/contact-operations'
import s from './contactForm.module.css'

export default function ContactForm() {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const upDateName = e => setName(e.target.value);
    const upDateNumber = e => setNumber(e.target.value)
  
    const handleOnSubmit = e => {
        e.preventDefault();
        if (!name || !number) {
            return alert ('fail is empty')
        }
        dispatch(addContactOperation({ name, number }));
        setName('');
        setNumber('')
        
    }

    return (
        <form className={s.container} onSubmit={handleOnSubmit}>
            <div className={s.divBlock}>
                <label htmlFor="name">name</label>
                <input id="name" type="text"  value={name} onChange={upDateName} />
            </div>
            <div className={s.divBlock}>
                <label htmlFor="number">number</label>
                <input type="text" value={number} onChange={upDateNumber} />
            </div>

            <button type="submit">save contact</button>

        </form>
    )
}