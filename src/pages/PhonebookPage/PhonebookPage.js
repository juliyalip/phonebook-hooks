import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  fetchContactOperation} from "../../redux/contact/contact-operations";
import { getLoadingSelector, getContactsSelector  } from '../../redux/contact/contact-selector';
import ContactForm from "../../component/phonebook/ContactForm/ContactForm";
import Filter from '../../component/phonebook/Filter/Filter';
import ContactList from "../../component/phonebook/ContactList/ContactList";
import s from './phonebook.module.css'


export default function PhonebookPage() {
    const dispatch = useDispatch();
    const contacts = useSelector(getContactsSelector)
    const loading = useSelector(getLoadingSelector);
  

console.log('перерендер фонебук')

    useEffect(() => {
        dispatch(fetchContactOperation())
    }, [dispatch])



    return (
        <div className={s.container}>
            <ContactForm />
            {loading && <p>Loading ...</p>}
         { contacts.length > 0 &&  <Filter />}
           <ContactList />
        </div>
    )
}