import { useSelector , useDispatch} from 'react-redux';
import { getFilterSelector} from '../Filter/Filter';
import { filterActionSuccess } from '../../../redux/contact/contact-actions';
import s from './filter.module.css'



export default function Filter() {

  //  const filterValue = useSelector(getFilterSelector);
    const dispatch = useDispatch();


    const upDateFilter = e => {
        dispatch(filterActionSuccess(e.target.value))
    
}
    return (<div className={s.container}>
        <label htmlFor="filter">find contact</label>
        <input id="filter" type="text"
            // value={filterValue}
            onChange={upDateFilter} />
        </div>
    )
}