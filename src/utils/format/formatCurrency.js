const formatCurrency = (value) => (
  new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' }).format(value)
);

export default formatCurrency;
