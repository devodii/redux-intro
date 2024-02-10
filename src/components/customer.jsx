import { useSelector } from "react-redux";

export function Customer() {
  // TIP: Do as much data manuplation in the useSelector function (i.e get nested objects, etc)
  const customer = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome, {customer}</h2>;
}
