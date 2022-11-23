export const priceFormatter = (price) => {
  return `$${Number.parseFloat(price).toFixed(2)}`;
};
