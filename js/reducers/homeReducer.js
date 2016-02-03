/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 *
 * To add a new reducer, add a file like this to the reducers folder, and
 * add it in the rootReducer.js.
 */
const {
  CHANGE_PROJECT_NAME_REQUEST,
  CHANGE_PROJECT_NAME_ERROR,
  CHANGE_PROJECT_NAME_SUCCESS,
  CHANGE_OWNER_NAME_REQUEST,
  CHANGE_OWNER_NAME_ERROR,
  CHANGE_OWNER_NAME_SUCCESS
} = require('../constants/AppConstants').default;

const {Record} = require('immutable');

const initialState = new (Record({
  isFetching: false,
  error: null,
  projectName: 'SellApp',
  ownerName: 'Mobii'
}));

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PROJECT_NAME_REQUEST:
    case CHANGE_OWNER_NAME_REQUEST:
      return state
        .setIn(['isFetching'], true)
        .setIn(['error'], null);
    case CHANGE_PROJECT_NAME_ERROR:
    case CHANGE_OWNER_NAME_ERROR:
      return state
        .setIn(['isFetching'], false)
        .setIn(['error'], action.payload);
    case CHANGE_OWNER_NAME_SUCCESS:
      return state
        .setIn(['isFetching'], false)
        .setIn(['ownerName'], action.payload);
    case CHANGE_PROJECT_NAME_SUCCESS:
      return state
        .setIn(['isFetching'], false)
        .setIn(['projectName'], action.payload);
    default:
      return state;
  }
}

export default homeReducer;
