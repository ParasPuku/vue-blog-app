<template>
  <div class="post-comments">
    <div class="card mb-3" v-for="comment in comments" :key="comment.id">
      <div class="row no-gutters">
        <div class="col-md-2">
          <img src="../assets/logo.svg" class="card-img" />
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">{{ comment.name }}</h5>
            <p class="card-text">{{ comment.body }}</p>
            <p class="card-text">
              <small class="text-muted">{{ comment.email }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostComments",
  data() {
    return {
      comments: [],
      id: this.$route.params.id,
      errors: [],
    };
  },
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`)
      .then((response) => {
        this.comments = response.data;
      })
      .catch((err) => {
        this.errors.push(err);
      });
  },
};
</script>

<style scoped>
.card-mg {
  position: relative;
  top: 25px;
  left: 10px;
}
</style>
