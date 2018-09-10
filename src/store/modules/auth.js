import qs from 'qs';
import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    token: localStorage.getItem('imgur_token')
}

const getters = {
    isLoggedIn: state => !!state.token
}

const actions = {
    login() {
        api.login();
    },

    logout({ commit }) {
        commit('setToken', null);
        commit('setImages', []);
        localStorage.removeItem('imgur_token');
        router.push('/');
    },

    finalizeLogin({commit}, hash) {
        const result = qs.parse(hash.replace('#', ''));
        commit('setToken', result.access_token);
        localStorage.setItem('imgur_token', result.access_token);
        router.push('/');
    }
}

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}