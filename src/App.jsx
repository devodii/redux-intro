import {
  AccountOperations,
  BalanceDisplay,
  CreateCustomer,
  Customer,
} from "./components";
import { useSelector } from "react-redux";

function App() {
  const customerFullName = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!customerFullName.length ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
