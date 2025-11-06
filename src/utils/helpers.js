// Small helper utilities

export const formatDate = (date = new Date()) => {
  const d = new Date(date);
  return d.toISOString().split('T')[0];
};

export const noop = () => {};
