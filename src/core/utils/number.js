export const currency = (number, type) => {
  // type = vn, en-US
  let options = {};
  let sign = {};
  if (type === "en-US") {
    options = {
      style: "currency",
      currency: "USD",
    };
    sign = { before: "$" };
  } else if (type === "vn") {
    sign = { after: " VND" };
  }
  return (
    (sign.before || "") +
    new Intl.NumberFormat(type, options).format(number) +
    (sign.after || "")
  );
};
