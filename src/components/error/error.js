import React from "react";
import { validate } from "../../utils/validate";
const Validation = props => {
  const { field, value } = props;
  const validCheck = validate(field, value);
  return !validCheck.isValid ? (
    <small className="caseone-error">{validCheck.msg}</small>
  ) : null;
};

export default Validation;
