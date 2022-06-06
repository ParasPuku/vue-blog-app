<template>
  <div class="post-details">
    <div class="row mb-3">
      <card class="col-auto">
        <router-link to="/" class="btn btn-block btn-info">Go Back</router-link>
      </card>
    </div>
    <div class="card bg-dark mb-3">
      <card class="card-body">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </card>
    </div>
    <PostComments />
  </div>
</template>

<script>
import axios from "axios";
import PostComments from "./PostComments.vue";
export default {
  name: "Post-Details",
  components: {
      PostComments
  },
  data() {
    return {
      post: [],
      id: this.$route.params.id,
      errors: []
    };
  },
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((response) => {
        this.post = response.data;
      })
      .catch((err) => {
        this.errors.push(err);
      });
  },
};
</script>

<style></style>
