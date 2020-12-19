export const userActionTypes = {
    setUser: 'user/SET_USER',
    logout: 'user/LOGOUT'
}

export const userActions = {
    setUser: user => ({
        type: userActionTypes.setUser,
        payload: user
    }),
    logout: () => ({
        type: userActionTypes.logout
    })
}