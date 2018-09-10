<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" tag="a" class="item" active-class="active">Image Storage</router-link>
        <div class="right menu">
            <div v-if="isLoggedIn" class="inline">
                <router-link class="ui item" active-class="active" tag="a" to="/" exact>Gallery</router-link>
                <router-link class="ui item" active-class="active" tag="a" to="/upload" exact>Upload</router-link>
                <a href="#" class="ui item" @click="logout">
                    Logout
                </a>
            </div>
            <a href="#" class="ui item" @click="login" v-else>
                Login
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'appHeader',
    methods: {
        ...mapActions(['login', 'logout'])
    },
    computed: {
        ...mapGetters(['isLoggedIn'])
    }
}
</script>


<style scoped>
    .inline {
        display: flex;
        flex-direction: row;
    }
</style>
