<template>
  <div class="bubble">
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  components: {
    Post,
  },
};
</script>

<style scoped>
.bubble {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
