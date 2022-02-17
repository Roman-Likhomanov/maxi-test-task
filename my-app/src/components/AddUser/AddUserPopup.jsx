import React from "react";
import AddUserForm from "./AddUserForm";
import styles from './addUserPopup.module.scss'

const AddUserPopup = ({getAddUserFormData}) => {
    return (
        <>
        <a href={"#popup"} className={styles.ref}>Добавить пользователя</a>
          <div id={"popup"} className={styles.popup}>
              <a href="#" className={styles.popup_area}></a>
              <div className={styles.popup_body}>
                  <div className={styles.popup_content}>
                      <a href="#" className={styles.popup_close}>x</a>
                      <AddUserForm getAddUserFormData={getAddUserFormData}/>
                  </div>
              </div>

          </div>
        </>
    )
}

export default AddUserPopup;