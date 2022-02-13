export const getUserNameSelector = state => state.auth.user.name;

export const getIsUserRegistrationSelector = state => state.auth.isRegistrUser;
export const getIsAuthenticated = state => state.auth.token // без лишнего поля - будет или строка или null