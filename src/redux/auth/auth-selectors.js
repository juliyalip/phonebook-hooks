export const getUserNameSelector = state => state.auth.user.name;

export const getIsAuthenticated = state => state.auth.token // без лишнего поля - будет или строка или null