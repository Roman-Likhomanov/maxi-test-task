import React from "react";
import DeleteUserForm from "./DeleteUserForm";

import styles from './deleteUserPopup.module.scss'

const DeleteUserPopup = ({getDeleteUser}) => {
    return (
        <>
        <a href={"#popup2"} className={styles.ref}>Удалить пользователя</a>
          <div id={"popup2"} className={styles.popup}>
              <a href="#" className={styles.popup_area}></a>
              <div className={styles.popup_body}>
                  <div className={styles.popup_content}>
                      <a href="#" className={styles.popup_close}>x</a>
            <DeleteUserForm getDeleteUser={getDeleteUser}/>
                  </div>
              </div>

          </div>
        </>
    )
}

export default DeleteUserPopup;