import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: [],
    error: null
}

const getters = {
    all(state){
        return state.images;
    },

    error(state){
        return state.error;
    }
}

const actions = {
    fetchImages({commit, rootState}) {
        api.fetchImages(rootState.auth.token)
           .then(response => {
               commit('setImages', response.data.data);
            })
           .catch(error => commit('setError', error.response.data.data.error));
    },

    async uploadImages({rootState}, images) {
        const {token} = rootState.auth;
        await api.uploadImages(images, token);
        router.push("/");
    }
}

const mutations = {
    setImages(state, images) {
        state.images = images
    },

    setError(state, error) {
        state.error = error
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}