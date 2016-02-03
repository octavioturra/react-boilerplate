const {
  CHANGE_PROJECT_NAME_REQUEST,
  CHANGE_PROJECT_NAME_ERROR,
  CHANGE_PROJECT_NAME_SUCCESS,
  CHANGE_OWNER_NAME_REQUEST,
  CHANGE_OWNER_NAME_ERROR,
  CHANGE_OWNER_NAME_SUCCESS
} = require('../constants/AppConstants').default;

import Project from '../services/project';

function changeProjectNameRequest(){
  return {
    type: CHANGE_PROJECT_NAME_REQUEST
  };
}
function changeProjectNameError(err){
  return {
    type: CHANGE_PROJECT_NAME_ERROR,
    payload: err
  };
}
function changeProjectNameSuccess(data){
  return {
    type: CHANGE_PROJECT_NAME_SUCCESS,
    payload: data
  };
}

export function asyncChangeProjectName(name) {
  return (dispatch) => {
    dispatch(changeProjectNameRequest());
    new Project()
      .changeProjectName(name)
      .then((data)=>dispatch(changeProjectNameSuccess(data)))
      .catch((err)=>dispatch(changeProjectNameError(err)));
  };
}

function changeOwnerNameRequest(){
  return {
    type: CHANGE_OWNER_NAME_REQUEST
  };
}
function changeOwnerNameError(err){
  return {
    type: CHANGE_OWNER_NAME_ERROR,
    payload: err
  };
}
function changeOwnerNameSuccess(data){
  return {
    type: CHANGE_OWNER_NAME_SUCCESS,
    payload: data
  };
}

export function asyncChangeOwnerName(name) {
  return (dispatch) => {
    dispatch(changeOwnerNameRequest());
    new Project()
      .changeOwnerName(name)
      .then((data)=>dispatch(changeOwnerNameSuccess(data)))
      .catch((err)=>dispatch(changeOwnerNameError(err)));
  };
}
