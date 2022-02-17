import React from "react";
import styles from './deleteUserForm.module.scss';

const DeleteUserForm = ({getDeleteUser}) => {

const deleteHandler = (e) => {
e.preventDefault();
getDeleteUser();
}

    return (
        <div className={styles.loginForm}>
            <h4>Вы действительно хотите удалить пользователя?</h4>
            <fieldset>
                <form>
                    <input onClick={deleteHandler} type="submit" value="ДА" />
                </form>
            </fieldset>
        </div>
    )

}

export default DeleteUserForm;