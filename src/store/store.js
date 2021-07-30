import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import  login  from '../reducers/login';
import  {registerReducer}  from '../reducers/register';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  login,
  register:registerReducer,
});

const store = createStore(
  reducers, {},
  composeEnhancers(
    applyMiddleware(reduxThunk),
  ),
);
export default store;
