import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

// function accountReducer(state = initialState, action) {
//   const { type, payload } = action;

//   /**
//    * TIP: Always write switch cases in the shape of the state domain
//    * E.g, all of the actions in the initialState are about account, so our switch cases should start with account
//    */
//   switch (type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + payload, isLoading: false };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;

//       return {
//         ...state,
//         loan: payload.amount,
//         loanPurpose: payload.purpose,
//         balance: state.balance + payload.amount,
//       };

//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };

//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };

//     default:
//       return state;
//   }
// }

// function deposit(amount, currency) {
//   if (currency == "USD") return { type: "account/deposit", payload: amount };

//   return async function (dispatch, getState) {
//     dispatch({ type: "account/convertingCurrency" });

//     // API call.
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     const converted = data.rates.USD;

//     dispatch({ type: "account/deposit", payload: converted });
//   };
// }

// function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// }

// function payLoan() {
//   return { type: "account/payLoan" };
// }

// export { deposit, payLoan, requestLoan, withdraw };

// export default accountReducer;

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    // names of the action creator, e.g "account/deposit"
    deposit(state, action) {
      state.balance += action.payload;

      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer: (state, action) => {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { payLoan, requestLoan, withdraw } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency == "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });

    // API call.
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted });
  };
}
export default accountSlice.reducer;
