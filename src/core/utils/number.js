export const currency = (number, type) => {
  // type = vn, en-US
  let options = {};
  if (type === "en-US") {
    options = {
      style: "currency",
      currency: "USD",
    };
  }
  return new Intl.NumberFormat(type, options).format(number);
};
