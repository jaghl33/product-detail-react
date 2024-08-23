const getPriceFormat = (price) => (price
  ? `$${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
  : '');

export default getPriceFormat;
