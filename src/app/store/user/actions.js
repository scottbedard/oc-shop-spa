import * as UserRepository from 'src/app/repositories/user';

//
// user actions
//
export default {
    // log a user in
    authenticate({ commit, state }) {
        commit('setLoginIsLoading', true);

        let request = UserRepository.postLogin({
            login: state.loginForm.email,
            password: state.loginForm.password,
        });

        request
            .then(response => commit('setModel', response.data))
            .then(() => commit('setLoginIsLoading', false))
            .catch(() => commit('setLoginIsLoading', false));

        return request;
    },

    // log a user out
    logout({ commit }) {
        commit('setLogoutIsLoading', true);
        let request = UserRepository.getLogout();

        request
            .then(() => commit('setModel', null))
            .then(() => commit('setLogoutIsLoading', false))
            .catch(() => commit('setLogoutIsLoading', false));

        return request;
    },
};
