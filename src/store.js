import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import accountReducer from "./features/accounts/account-slice";
import customerReducer from "./features/customers/customer-slice";

// combine all reducers

const rootReducers = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

export default createStore(rootReducers, applyMiddleware(thunk));
