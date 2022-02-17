import React, { useState } from "react";
import AddUserPopup from "../AddUser/AddUserPopup";
import { ArrowDown, ArrowUp } from "../Arrows/Arrows";
import DeleteUserPopup from "../DeleteUser/DeleteUserPopup";
import FilterForm from "../Filter/FilterForm";
import User from "./User";
import styles from './users.module.css';



let Users = ({ users,
    sortData,
    directionSort,
    filterUsers,
    getAddUserFormData,
    setClickRow,
    clickRow,
    getDeleteUser,
    setDeleteUser
}) => {

    const [fieldDate, setFieldDate] = useState('');

    const Arrow = () => {
        return (
            directionSort ? <ArrowUp /> : <ArrowDown />
        )
    }

    const fieldSortData = (field) => {
        sortData(field);
        setFieldDate(field);
    }

    return <div>
        <AddUserPopup getAddUserFormData={getAddUserFormData} />
        <FilterForm filterUsers={filterUsers} />
        {clickRow ? <DeleteUserPopup getDeleteUser={getDeleteUser}/> : null}
        <table className={styles.table}>
            <thead>
                <tr>
                    <th onClick={() => { fieldSortData('id') }}>Id {fieldDate === 'id' ? <Arrow /> : null}</th>
                    <th>Icon</th>
                    <th onClick={() => { fieldSortData('name') }}>Name{fieldDate === 'name' ? <Arrow /> : null}</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th onClick={() => { fieldSortData('zipcode') }}>Zipcode{fieldDate === 'zipcode' ? <Arrow /> : null}</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(u => <User user={u}
                        setClickRow={setClickRow}
                        setDeleteUser={setDeleteUser}
                        key={u.username}
                    />)
                }
            </tbody>
        </table>
    </div >
}

export default Users;