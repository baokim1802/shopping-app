export const required = (name) => ({
  required: true,
  message: `* ${name} is required`,
});

export const email = (message) => ({
  pattern: "email",
  message: message || `* Email is invalid`,
});

export const password = (message) => ({
  pattern: "password",
  message:
    message ||
    "* Password requires minimum 5 characters, at least one letter and one number",
});

export const confirmValue = (field = "password", message) => ({
  confirmValue: field,
  message: message || "* Confirm password does not match",
});

export const minMax = (min, max, message) => ({
  min: min,
  max: max,
  message: message || `* Please enter from ${min}-${max} characters`,
});
