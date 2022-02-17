import { usersAPI } from '../api/api';

const SET_USERS = 'SET_USERS';
const DIRECTION_SORT = 'DIRECTION_SORT';
const CLICK_ROW = 'CLICK_ROW';
const DELETE_USER = 'DELETE_USER';

let initialState = {
    users: [],
    directionSort: false,
    clickRow: false,
    deleteUser: {}
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users }
        case DIRECTION_SORT:
            return { ...state, directionSort: action.directionSort }
        case CLICK_ROW:
            return { ...state, clickRow: action.clickRow }
        case DELETE_USER:
            return { ...state, deleteUser: action.deleteUser }
        default:
            return state;
    }
}

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setDirectionSort = (directionSort) => ({ type: DIRECTION_SORT, directionSort });
export const setClickRow = (clickRow) => ({ type: CLICK_ROW, clickRow })
export const setDeleteUser = (deleteUser) => ({ type: DELETE_USER, deleteUser })


export const requestUsers = () => {
    return async (dispatch) => {
        let data = await usersAPI();
        dispatch(setUsers(data));
    }
}

export default usersReducer; 