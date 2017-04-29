import axios from 'axios';

/**
 * Log out.
 *
 * @return {Promise}
 */
export function getLogout() {
    return axios.get('/api/bedard/socialite/logout');
};

/**
 * Authenticate a user.
 *
 * @param  {object}     credentials
 *         - {string}   login
 *         - {string}   password
 * @return {Promise}
 */
export function postLogin(credentials) {
    return axios.post('/api/bedard/socialite/login', credentials);
};
