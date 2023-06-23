const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_QUESTION":
      return { ...state, ...action.payload };
    case "LOAD_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
