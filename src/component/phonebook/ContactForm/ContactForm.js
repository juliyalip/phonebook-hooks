import { useState } from 'react';
import s from './contactForm.module.css'

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const upDateName = e => setName(e.target.value);
    const upDateNumber = e => setNumber(e.target.value)
  
    const handleOnSubmit = ({ name, number }) => {
        
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