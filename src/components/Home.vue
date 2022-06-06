<template>
  <div class="home">
    <!-- <AddPost v-on:add-post="addPost"/> -->
    <PostList v-bind:posts="posts"/>
  </div>
</template>

<script>
import axios from "axios";
import PostList from "./PostList.vue";

export default {
  name: "home",
  components: {
    PostList,
  },
  data() {
    return {
      posts: [],
      errors: [],
    };
  },
  created() {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
      .then((response) => {
        this.posts = response.data;
      })
      .catch((errors) => {
        this.errors.push(errors);
      });
  },
};
</script>
