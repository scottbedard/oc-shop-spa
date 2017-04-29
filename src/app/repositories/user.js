import axios from 'axios';

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
