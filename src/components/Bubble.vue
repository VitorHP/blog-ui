<template>
  <div class="bubble">
    <Post v-for="post in posts" :post="post" />
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
  column-count: 3;
  column-gap: 20px;
}
</style>
