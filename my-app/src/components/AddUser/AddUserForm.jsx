import React, { useState } from "react";
import styles from './addUserForm.module.scss';

const AddUserForm = ({getAddUserFormData}) => {

const [name, setName] = useState('');
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [zipcode, setZipcode] = useState('');

const submitHandler = (e) => {
    e.preventDefault();
    getAddUserFormData({name, username, email, phone, zipcode})
}



    return (
        <div className={styles.loginForm}>
            <h3>Заполните форму</h3>
            <fieldset>
                <form onSubmit={submitHandler}>
                    <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="Name" />
                    <input type="text" value={username} onChange={(event)=>{setUsername(event.target.value)}} placeholder="Username" />
                    <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="Email" />
                    <input type="text" value={phone} onChange={(event)=>{setPhone(event.target.value)}} placeholder="Phone" />
                    <input type="text" value={zipcode} onChange={(event)=>{setZipcode(event.target.value)}} placeholder="Zipcode" />
                    <input type="submit" value="ДОБАВИТЬ" />
                </form>
            </fieldset>
        </div>
    )

}

export default AddUserForm;