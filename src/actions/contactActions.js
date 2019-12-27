import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from "./types";
import axios from "axios";

// List of Actions
export const getContactsAction = () => async dispatch => {
  // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const response = await axios.get(
    "https://raw.githubusercontent.com/leolanese/reactjs-playground/master/src/resources/experience.json"
  );
  console.log("getContactsAction:");
  console.table([response.data][0]);
  dispatch({
    type: GET_CONTACTS,
    payload: response.data
  });
};

export const getContactAction = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  console.log("getContactAction");
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const deleteContactAction = id => async dispatch => {
  console.log("deleteContactAction");
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: DELETE_CONTACT,
    payload: id
  });
};

export const addContactAction = contact => async dispatch => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    contact
  );
  console.log("addContactAction");
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const updateContactAction = contact => async dispatch => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  console.log("updateContactAction");
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
