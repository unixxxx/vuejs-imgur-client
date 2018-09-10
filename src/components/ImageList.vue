<template>
    <div>
        <div class="ui negative message" v-if="error">
            <i class="close icon"></i>
            <div class="header">
                {{error}}
            </div>
            <p>An error occured while fetching your images!</p>
        </div>
        <div v-else-if="isLoggedIn" class="image-container">
            <a v-for="image in all" :href="image.link" :key="image.id" class="ui medium image" target="_blank">
                <img :src="image.link" :alt="image.name"/>
            </a>
        </div>
        <h2 v-else>Login to get started</h2>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImageList",
  methods: {
    ...mapActions(["fetchImages"])
  },
  computed: {
    ...mapGetters(["all", "error", "isLoggedIn"])
  },
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
    .image-container {
        column-count: 3;
        column-gap: 0;
    }

    .image-container a {
        padding: 5px;
    }
</style>


