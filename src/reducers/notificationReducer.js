const initialState = {
  message: null,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      console.log(action.payload);
      return {
        ...state,
        message: action.payload,
      };
    case 'CLEAR_MESSAGE':
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};

export default notificationReducer;
