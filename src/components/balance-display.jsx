import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// eslint-disable-next-line react/prop-types
function Display({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

// old way to use redux (before react functional components)
function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

const BalanceDisplay = connect(mapStateToProps)(Display);

export { BalanceDisplay };
