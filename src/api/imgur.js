import qs from 'qs';
import axios from 'axios';

//const CLIENT_SECRET = 'c60f73bf633375b0ce03827e6dd92c77f44a8007';
const CLIENT_ID = '07a05654805e900';
const ROOT_URL = 'https://api.imgur.com';


export default {
    login() {
        const queryString = {client_id: CLIENT_ID, response_type: 'token'};
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    },

    fetchImages(token) {
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
                        headers: { Authorization: `Bearer ${token}`}
                    });
    },

    uploadImages(images, token) {
        const promises = Array.from(images).map(image => {
            const form = new FormData();
            form.append('image', image);

            return axios.post(`${ROOT_URL}/3/image`, form, {
                headers: {Authorization: `Bearer ${token}`}
            });
        });

        return Promise.all(promises);
    }
}