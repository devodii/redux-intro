import { createSlice } from "@reduxjs/toolkit";

const initialState = { fullName: "", nationalID: "", createdAt: "" };

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare: (fullName, nationalID) => {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },

      reducer: (state, { payload }) => {
        state.fullName = payload.fullName;
        state.nationalID = payload.nationalID;
        state.createdAt = payload.createdAt;
      },
    },

    updateName(state, { payload }) {
      state.fullName = payload;
    },
  },
});

//  OLD WAY WITH TRADIIONAL REDUX!
// function customerReducer(state = customerIntialState, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: payload.fullName,
//         nationalID: payload.nationalID,
//         createdAt: payload.createdAt,
//       };

//     case "customer/updateName":
//       return { ...state, fullName: payload };

//     default:
//       return state;
//   }
// }

// function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() },
//   };
// }

// // eslint-disable-next-line no-unused-vars
// function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName };
// }

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
