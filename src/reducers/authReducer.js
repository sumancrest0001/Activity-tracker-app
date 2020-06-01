const initialState = {
  credentialsError: false,
  user: {
    name: '',
    loggedIn: false,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('SET_CREDENTIALS'):
      return {
        ...state,
        user: action.credentials,
        credentialsError: false,
      };
    case ('SET_FAILED_CREDENTIALS'):
      return {
        ...state,
        credentialsError: true,
      };

    default:
      return state;
  }
};

export default authReducer;
