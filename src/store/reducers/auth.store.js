const AUTH_USER = "AUTH_USER";
const AUTH_LOADER = "AUTH_LOADER";

const initialState = {
  loggedUser: {},
  authRole: "CUSTOMER",
  loading: false,
};

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_USER:
      console.log(`*** ${type} - ${payload} ***`);
      return {
        ...state,
        loggedUser: payload,
        authRole: payload.role ? payload.role : "",
      };
    case AUTH_LOADER:
      console.log(`*** ${type} - ${payload} ***`);
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};

export { AuthReducer };
