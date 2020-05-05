
const setPastData = data => ({
  type: 'SET_PASTDATA',
  data,
});

const setFailedPastData = () => ({
  type: 'SET_FAILED_PASTDATA',
});

export { setPastData, setFailedPastData };
