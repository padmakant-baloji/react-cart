const validMsg = { isValid: true, msg: "" };
/*
 * It will validate values with respect to its field
 * return object with properties isValid and msg
 * isValid : Boolean (true- if field is valid/false- if field is not valid)
 * msg : Error message for invalid fields.
 */
export const validate = (field, value) => {
  if (field === "productId") {
    if (!value) {
      return {
        isValid: false,
        msg: "Field can not be empty"
      };
    }
    if (!value.match(/^[0-9]*$/g)) {
      return {
        isValid: false,
        msg: "Enter only digits"
      };
    }
    if (!value.match(/\b\d{5,}\b/g)) {
      return {
        isValid: false,
        msg: "Enter minimum 5 digits"
      };
    }
    if (!value.match(/\b\d{5,10}\b/g)) {
      return {
        isValid: false,
        msg: "Enter maximum 10 digits"
      };
    } else {
      return validMsg;
    }
  } else if (field === "productName") {
    if (!value) {
      return {
        isValid: false,
        msg: "Name can not be empty"
      };
    }
    if (value.length > 15) {
      return {
        isValid: false,
        msg: "Name must be max. 15 characters"
      };
    }
    return validMsg;
  } else if (field === "qty") {
    if (!value) {
      return {
        isValid: false,
        msg: "Field can not be empty"
      };
    }
    if (!value.match(/^[0-9]*$/)) {
      return {
        isValid: false,
        msg: "Enter only digits"
      };
    } else {
      return validMsg;
    }
  } else if (field === "unitPrice") {
    if (!value) {
      return {
        isValid: false,
        msg: "Field can not be empty"
      };
    }
    if (!value.match(/^[+-]?\d+(\.\d*)?$/)) {
      return {
        isValid: false,
        msg: "Enter only digits"
      };
    } else {
      return validMsg;
    }
  }
};
