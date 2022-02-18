import {ADD_ARTICLE, DELETE_ARTICLE, DONE_ARTICLE, EDIT_ARTICLE} from "../Constants/actions-types";

export const addTask = (payload) => {
  return {
    type: ADD_ARTICLE,
    payload,
  }
}

export const deleteTask = (payload) => {
  return {
    type: DELETE_ARTICLE,
    payload,
  }
}



export const doneTask = (payload) => {
  return {
    type: DONE_ARTICLE,
    payload,
  }
}


export const editTask = (payload) => {
  return {
    type: EDIT_ARTICLE,
    payload,
  }
}