import * as UserRepository from 'src/app/repositories/user';

//
// user actions
//
export default {
    authenticate({ commit, state }) {
        commit('setLoginIsLoading', true);

        let request = UserRepository.postLogin({
            login: state.loginForm.email,
            password: state.loginForm.password,
        });

        request
            .then(() => commit('setLoginIsLoading', false))
            .catch(() => commit('setLoginIsLoading', false));

        return request;
    },
};
