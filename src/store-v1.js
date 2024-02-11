import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import accountReducer from "./features/accounts/account-slice";
import customerReducer from "./features/customers/customer-slice";

// combines all reducers
const rootReducers = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export default createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
