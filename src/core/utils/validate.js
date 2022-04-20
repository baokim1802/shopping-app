// rules = {
//   name: [{ required: true }],
//   email: [
//     { required: true, message: "Email is required" },
//     { pattern: "email" },
//   ],
// };

// form = {
//   name: "",
//   email: "",
// };

export const patternModel = {
  email:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  phone: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
  url: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/, // minimum 5 characters, at least one letter and one number
  passwordHard:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, // miminum 8 characters, at least one uppercase, one lowercase, one number and one special character
};

const ERROR_MESSAGE = {
  required: "* Please provide a value.",
  pattern: "* Please use the correct format.",
};

const validateRequired = (value, rule) => {
  // console.log("in validate required", value, rule);
  if (
    typeof value === "undefined" ||
    (typeof value === "string" && !value.trim())
  ) {
    return rule.message || ERROR_MESSAGE.required;
  }
};

const validatePattern = (value, rule) => {
  // console.log("in validate pattern", value, rule);
  let pattern = rule.pattern;

  if (
    typeof pattern === "string" &&
    typeof patternModel[pattern] !== "undefined"
  ) {
    pattern = patternModel[pattern];
  }

  if (pattern instanceof RegExp) {
    if (!pattern.test(value)) {
      return rule.message || ERROR_MESSAGE.pattern;
    }
  }
};

const validate = (form, rules) => {
  console.log("Form", form);
  console.log("rules", rules);
  let errorObj = {};

  for (let i in rules) {
    let error = undefined;

    for (let j in rules[i]) {
      const r = rules[i][j];

      if (r.required) {
        error = validateRequired(form[i], r);
        if (error) break;
      }

      if (r.pattern) {
        error = validatePattern(form[i], r);
      }
    }

    if (error) errorObj[i] = error;
  }
  return errorObj;
};

export default validate;
