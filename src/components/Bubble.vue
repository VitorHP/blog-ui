<template>
  <div class="bubble">
    <Card v-for="post in posts" :post="post" />
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useBubbleStore } from "../stores/bubble";
import Card from "./Card.vue";

export default {
  components: {
    Card,
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
