import React from "react";
import { useState } from "react";
import styles from './filterForm.module.scss'

const FilterForm = ({filterUsers}) => {

const [filterValue, setFilterValue] = useState('');

const clickHandler = (e) => {
    e.preventDefault(); 
    filterUsers(filterValue); 
}

    return (
        <form className={styles.form}>
            <input placeholder="Искать здесь..." 
            type="search"
            value={filterValue} 
            onChange={(event) => {setFilterValue(event.target.value)}}
            />
            <button type="submit"
            onClick={clickHandler}
            >Поиск</button>
        </form>
    )
   
}

export default FilterForm;