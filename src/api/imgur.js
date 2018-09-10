import qs from 'qs';

//const CLIENT_SECRET = 'c60f73bf633375b0ce03827e6dd92c77f44a8007';
const CLIENT_ID = '07a05654805e900';
const ROOT_URL = 'https://api.imgur.com';


export default {
    login() {
        const queryString = {client_id: CLIENT_ID, response_type: 'token'};
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    }
}