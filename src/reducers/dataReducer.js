const initialState = {
  pastDataError: false,
  receivedData: false,
  pastData: {
    mainActivities: [],
    tasks: [],
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('SET_PASTDATA'):
      return {
        ...state,
        pastData: action.data,
        pastDataError: false,
        receivedData: true,
      };
    case ('SET_FAILED_PASTDATA'):
      return {
        ...state,
        pastDataError: true,
        receivedData: false,
      };
    case ('SET_CHANGED_PASTDATA'):
      return {
        ...state,
        pastData: {
          mainActivities: [],
          tasks: [],
        },
        pastDataError: false,
        receivedData: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
