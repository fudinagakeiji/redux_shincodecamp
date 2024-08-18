// actions-> increment,decrement
export const increment = (number) => {
  return {
    // action name
    type: "INCREMENT",
    payload: number,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const login = () => {
  return {
    type: "LOGIN",
  };
};
