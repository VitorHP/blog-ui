<template>
  <div class="bubble">
    <component v-for="post in posts" :is="post.component" :text="post.text" />
  </div>
</template>

<script>
import { useBubbleStore } from "../stores/bubble";
import Post from "./Post.vue";
import Image from "./Image.vue";

export default {
  components: {
    Post,
    Image,
  },
  setup() {
    const store = useBubbleStore();

    const comps = store.posts.map((post) => ({
      ...post,
      component: post.text ? "Post" : "Image",
    }));

    return {
      posts: comps,
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
