import React from "react";
import styles from './users.module.css';



let User = ({ user, setClickRow, setDeleteUser }) => {

    const clickRowHandler = (e) => {
        e.preventDefault();
        setClickRow(true);
        setDeleteUser(user);
    }
    
    let name = user.name;
    let letter = name[0];

    return (
        <tr onClick={clickRowHandler}>
            <td>{user.id}</td>
            <td>
                <div className={styles.avatar}>{letter}</div>
            </td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address.zipcode}</td>
        </tr>
    )
}

export default User;