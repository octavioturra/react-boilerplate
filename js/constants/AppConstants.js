/*
 * AppConstants
 * These are the variables that determine what our central data store (reducer.js)
 * changes in our state. When you add a new action, you have to add a new constant here
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'YOUR_ACTION_CONSTANT';
 */
import keyMirror from 'key-mirror';

export default keyMirror({
  CHANGE_PROJECT_NAME_REQUEST : null,
  CHANGE_PROJECT_NAME_ERROR : null,
  CHANGE_PROJECT_NAME_SUCCESS : null,
  CHANGE_OWNER_NAME_REQUEST : null,
  CHANGE_OWNER_NAME_ERROR : null,
  CHANGE_OWNER_NAME_SUCCESS : null
});
