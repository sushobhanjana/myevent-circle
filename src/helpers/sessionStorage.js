

export const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = (key) => {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const removeSessionStorage = (key) => {
  sessionStorage.removeItem(key);
};
