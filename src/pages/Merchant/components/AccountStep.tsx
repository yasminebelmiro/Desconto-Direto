import React from "react";
interface AccountStep {
  onNext: () => void;
  onSubmit?: () => void;
}
const AccountStep = ({ onNext, onSubmit }: AccountStep) => {
  return <div>AccountStep</div>;
};

export default AccountStep;
