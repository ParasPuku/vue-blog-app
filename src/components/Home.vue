<template>
  <div class="home">
    <AddPost v-on:add-post="addPost" v-bind:posts="posts" />
    <PostList v-on:del-post="deletePost" v-bind:posts="posts" />
  </div>
</template>

<script>
import axios from "axios";
import PostList from "./PostList.vue";
import AddPost from "./AddPost.vue";

export default {
  name: "home",
  components: {
    PostList,
    AddPost,
  },
  data() {
    return {
      posts: JSON.parse(localStorage.getItem("posts")),
      errors: [],
    };
  },
  methods: {
    addPost(newPost) {
      console.log("New posts >>>", newPost);
      localStorage.setItem("posts", JSON.stringify([newPost, ...this.posts]));
      this.posts = JSON.parse(localStorage.getItem("posts"));
      //   axios
      //     .post(`https://jsonplaceholder.typicode.com/posts`, {
      //       title,
      //       body,
      //     })
      //     .then((response) => {
      //       this.posts = [...this.posts, response.data];
      //     })
      //     .catch((err) => {
      //       this.errors.push(err);
      //     });
    },
    deletePost(id) {
      //   axios
      //     .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      //     .then((response) => {
      //       this.posts = this.posts.filter((post) => post.id !== id);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });

      var ls_data = JSON.parse(localStorage.getItem("posts"));

      if (ls_data.length > 0) {
        var index = ls_data.findIndex((data) => data.id === id);
        console.log("seçilen index:" + index);
        if (index == -1) {
          // if not matched selected index
        } else {
          // is matched, remove...
          ls_data.splice(index, 1);
          localStorage.setItem("posts", JSON.stringify(ls_data));
          console.log(ls_data);
        }
      }
      this.posts = JSON.parse(localStorage.getItem("posts"));
    },
  },
  created() {
    const cachedPosts = JSON.parse(localStorage.getItem("posts"));
    console.log("Cached Result >>> ", cachedPosts);
    if (cachedPosts === null) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
          this.posts = response.data;
          localStorage.setItem(
            "posts",
            JSON.stringify([...this.posts, response.data])
          );
        })
        .catch((errors) => {
          this.errors.push(errors);
        });
    }
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/posts`)
    //   .then((response) => {
    //     this.posts = response.data;
    //     localStorage.setItem('posts', JSON.stringify(response.data));
    //   })
    //   .catch((errors) => {
    //     this.errors.push(errors);
    //   });
  },
};
</script>
