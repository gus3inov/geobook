import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import authReducer, {moduleName as authModule} from '../ducks/auth'
import userReducer, {moduleName as userModule} from '../ducks/user'
import problemReducer, {moduleName as problemModule} from '../ducks/problem'

export default combineReducers({
  form,
  [authModule]: authReducer,
  [userModule]: userReducer,
  [problemModule]: problemReducer
});
