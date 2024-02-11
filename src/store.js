import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/account-slice";
import customerReducer from "./features/customers/customer-slice";

export default configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
