const customerIntialState = { fullName: "", nationalID: "", createdAt: "" };

function customerReducer(state = customerIntialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: payload.fullName,
        nationalID: payload.nationalID,
        createdAt: payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullName: payload };

    default:
      return state;
  }
}

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

// eslint-disable-next-line no-unused-vars
function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

export { createCustomer, updateName };
export default customerReducer;
