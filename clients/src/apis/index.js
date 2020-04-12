import { ADD_TODO, INDEX_TODO, TOGGLE_TODO } from "../actions/types";

import axios from "axios";

const apiUrl = "http://localhost:5000/todo";

export const indexTodo = () => {
  return (dispatch) => {
    return axios
      .get(`${apiUrl}`)
      .then((res) => {
        dispatch(indexTodoSuccess(res.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const indexTodoSuccess = (payload) => {
  return {
    type: INDEX_TODO,
    payload,
  };
};

export const addTodo = (todo) => {
  return (dispatch) => {
    return axios
      .post(`${apiUrl}`, todo)
      .then((res) => {
        dispatch(createTodoSuccess(res.data.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const createTodoSuccess = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      id: data.id,
      name: data.name,
      is_status: data.is_status,
    },
  };
};

export const updateTodo = (id, todo) => {
  let status = todo.is_status = !todo.is_status;
  todo.is_status = status;
  return (dispatch) => {
    return axios
      .put(`${apiUrl}/${id}`, todo)
      .then((res) => {
        dispatch(updateTodoSuccess(res.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const updateTodoSuccess = (data) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id: data.id,
      name: data.name,
      is_status: data.is_status,
    },
  };
};
