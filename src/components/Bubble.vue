<template>
  <div class="bubble">
    <Post v-for="post in posts" :text="post.text" />
  </div>
</template>

<script>
import { useBubbleStore } from "../stores/bubble";
import Post from "./Post.vue";

export default {
  components: {
    Post,
  },
  setup() {
    const store = useBubbleStore();

    return {
      posts: store.posts,
    };
  },
};
</script>

<style scoped>
.bubble {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
