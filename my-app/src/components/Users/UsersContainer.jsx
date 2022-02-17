import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { compose } from 'redux';
import { requestUsers, setUsers, setDirectionSort, setClickRow, setDeleteUser } from './../../redux/users-reducer';



const UsersContainer = (props) => {

  useEffect(() => {
    props.requestUsers();
  }, []);

  const sortData = (field) => {
    const copyData = props.users.concat();
    let sortCopy;

    if (props.directionSort) {
      sortCopy = copyData.sort(
        (a, b) => { return a[field] > b[field] ? 1 : -1 }
      );
    } else {
      sortCopy = copyData.reverse(
        (a, b) => { return a[field] > b[field] ? 1 : -1 }
      );
    }

    props.setUsers(sortCopy);
    props.setDirectionSort(!props.directionSort);
  };

  const filterUsers = (filterValue) => {
    if (!filterValue) {
      return props.requestUsers();
    } else {
      return props.setUsers(
        props.users.filter(
          el => {
            return (el.name.toLowerCase().includes(filterValue.toLowerCase())
              || el.username.toLowerCase().includes(filterValue.toLowerCase())
              || el.email.toLowerCase().includes(filterValue.toLowerCase())
              || el.phone.toLowerCase().includes(filterValue.toLowerCase())
              || el.address.zipcode.toLowerCase().includes(filterValue.toLowerCase())
            )
          }
        )
      )
    }
  }

  const getAddUserFormData = ({ name, username, email, phone, zipcode }) => {
    const obj = {
      id: '',
      name: name,
      username: username,
      email: email,
      phone: phone,
      address: { zipcode: zipcode }
    }
    props.users.push(obj);
    props.setDirectionSort(!props.directionSort);
  }

  const getDeleteUser = () => {
    const newUsers = props.users.filter((el) => { return el != props.deleteUser });
    props.setUsers(newUsers);
    
  }

  return <>
    <Users
      users={props.users}
      sortData={sortData}
      directionSort={props.directionSort}
      filterUsers={filterUsers}
      getAddUserFormData={getAddUserFormData}
      setClickRow={props.setClickRow}
      clickRow={props.clickRow}
      getDeleteUser={getDeleteUser}
      setDeleteUser={props.setDeleteUser}
    />
  </>
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    directionSort: state.usersPage.directionSort,
    clickRow: state.usersPage.clickRow,
    deleteUser: state.usersPage.deleteUser
  }
}

export default compose(
  connect(mapStateToProps,
    { requestUsers, setUsers, setDirectionSort, setClickRow, setDeleteUser })
)(UsersContainer);