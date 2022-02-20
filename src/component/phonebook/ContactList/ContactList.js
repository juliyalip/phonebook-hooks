import { useSelector, useDispatch } from 'react-redux';
import {   deleteContactOperation  } from '../../../redux/contact/contact-operations'
import { getContactsSelector } from '../../../redux/contact/contact-selector';
import s from './contactList.module.css'

import ContactItem from "../ContactItem/ContactItem";









  const ContactList = () => {
      const dispatch = useDispatch();
  

      console.log('перерендер');

    
      const onDelete = id => {
          dispatch( deleteContactOperation (id))
      }
      
      const items = useSelector(getContactsSelector);
  
      console.log(items)
  
      return (<ul className={s.list}>
          {items.map(({ name, number, id }) => (
              <ContactItem key={id} name={name} number={number}
                  onDeleteContact={() => onDelete(id)} />
          ))}
      </ul>
      )
  };
  
  export default ContactList;