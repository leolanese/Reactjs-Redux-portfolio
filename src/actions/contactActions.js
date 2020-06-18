import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAILURE,
  DELETE_CONTACT,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
  ADD_CONTACT,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAILURE,
  GET_CONTACT,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILURE,
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAILURE
} from "../actions/types";

import axios from "axios";

// List of Actions
export const getContactsAction = () => async dispatch => {
  // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const res = await axios.get(
    "https://raw.githubusercontent.com/leolanese/reactjs-playground/master/src/resources/experience.json"
  );

  dispatch({
    type: GET_CONTACTS
  });
  try {
    // Update payload in reducer on success
    dispatch({
      type: GET_CONTACTS_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    // Update error in reducer on failure
    dispatch({
      type: GET_CONTACTS_FAILURE,
      error: err
    });
  }
};

export const getContactAction = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT
  });
  try {
    dispatch({
      type: GET_CONTACT_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_CONTACT_FAILURE,
      error: err
    });
  }
};

export const deleteContactAction = id => async dispatch => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

  console.log("deleteContactAction");
  dispatch({
    type: DELETE_CONTACT
  });
  try {
    dispatch({
      type: DELETE_CONTACT_SUCCESS,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: DELETE_CONTACT_FAILURE,
      error: err
    });
  }
};

export const addContactAction = contact => async dispatch => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    contact
  );

  console.log("addContactAction");
  dispatch({
    type: ADD_CONTACT
  });
  try {
    dispatch({
      type: ADD_CONTACT_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ADD_CONTACT_FAILURE,
      error: err
    });
  }
};

export const updateContactAction = contact => async dispatch => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );

  console.log("updateContactAction");
  dispatch({
    type: UPDATE_CONTACT
  });
  try {
    dispatch({
      type: UPDATE_CONTACT_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: UPDATE_CONTACT_FAILURE,
      error: err
    });
  }
};
