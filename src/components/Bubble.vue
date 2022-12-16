<template>
  <div class="bubble">
    <Post v-for="post in posts" :post="post" />
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useBubbleStore } from "../stores/bubble";
import Post from "./Post.vue";

export default {
  components: {
    Post,
  },
  setup() {
    const store = useBubbleStore();
    const { typedPosts } = storeToRefs(store);

    return {
      posts: typedPosts,
    };
  },
};
</script>

<style scoped>
.bubble {
  column-count: 3;
  column-gap: 20px;
}

@media only screen and (max-width: 960px) {
  .bubble {
    column-count: 2;
  }
}

@media only screen and (max-width: 600px) {
  .bubble {
    column-count: 1;
  }
}
</style>
