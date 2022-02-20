import s from './contactItem.module.css'

const ContactItem = ({ name, number, onDeleteContact }) => (
    <li className={s.item}>
        <div className={s.contactBlock}>
        <p>{name}</p>
            <p>{number}</p>
            </div>
        <button type="button" className={s.button}
            onClick={onDeleteContact} >delete</button>
        
    </li>
);

export default ContactItem;