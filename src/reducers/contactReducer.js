import {
  GET_CONTACTS,
  GET_CONTACT_SUCCESS,
  GET_CONTACTS_FAILURE,
  DELETE_CONTACT,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
  ADD_CONTACT,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAILURE,
  GET_CONTACT,
  GET_CONTACTS_SUCCESS,
  GET_CONTACT_FAILURE,
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAILURE
} from "../actions/types";

const initialState = {
  contacts: [],
  contact: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        isLoading: true
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        isLoading: true
      };
    case GET_CONTACTS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: true
      };

    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
}
