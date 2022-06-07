<template>
  <div class="post-list">
    <div
      class="card mb-3"
      v-for="post of posts"
      :key="post.id"
    >
      <span class="delete">
        <img src="../assets/delete.jpg" alt="" class="delete-icon" @click="$emit('del-post', post.id)" />
      </span>
      <div class="card-body">
        <h3>
          <router-link :to="`/post-details/${post.id}`">
            {{ post.title }}
          </router-link>
        </h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
    <div class="card mb-3" v-if="errors && errors.length">
      <div class="card-body">
        <p v-for="(error, index) of errors" :key="index">{{ error.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: ["posts"],
};
</script>

<style scoped>
img.delete-icon {
  width: 20px;
  height: 20px;
  position: absolute;
  right: -7px;
  top: -5px;
  cursor: pointer;
}
</style>
