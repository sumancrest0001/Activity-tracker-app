const setCredentials = credentials => ({
  type: 'SET_CREDENTIALS',
  credentials,
});

const setFailedCredentials = () => ({
  type: 'SET_FAILED_CREDENTIALS',
});

export { setCredentials, setFailedCredentials };
