<template>
  <div class="post card">
    <component :is="component" :text="post.text" :src="post.src" />
    <when />
  </div>
</template>

<script>
import { ref } from "vue";
import When from "./post/When.vue";
import Image from "./post/Image.vue";
import Text from "./post/Text.vue";

export default {
  components: { When, Image, Text },
  props: {
    post: {
      type: Object,
    },
  },
  setup(props) {
    return {
      component: props.post.text ? "Text" : "Image",
    };
  },
};
</script>

<style scoped>
.post {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 1rem;
  break-inside: avoid;
  overflow: hidden;
}
</style>
