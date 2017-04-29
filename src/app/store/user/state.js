import initialData from 'src/app/initial_data';

//
// user state
//
export default {
    model: initialData.user || null,
    loginForm: {
        email: 'foo@bar.com',
        isLoading: false,
        password: '12345',
    },
    logoutIsLoading: false,
};
