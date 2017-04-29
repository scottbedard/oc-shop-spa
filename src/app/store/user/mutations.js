//
// user mutations
//
export default {
    setLoginEmail(state, email) {
        state.loginForm.email = email;
    },
    setLoginIsLoading(state, isLoading) {
        state.loginForm.isLoading = isLoading;
    },
    setLoginPassword(state, password) {
        state.loginForm.password = password;
    },
    setLogoutIsLoading(state, logoutIsLoading) {
        state.logoutIsLoading = logoutIsLoading;
    },
    setModel(state, model) {
        state.model = model;
    },
};
