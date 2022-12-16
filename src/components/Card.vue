<template>
  <div class="post card">
    <decoration v-if="post.decoration" />
    <component :is="post.type" :content="post.content" />
    <when />
  </div>
</template>

<script>
import When from "./post/When.vue";
import Image from "./post/Image.vue";
import Text from "./post/Text.vue";
import Video from "./post/Video.vue";
import Bio from "./post/Bio.vue";
import Decoration from "./post/Decoration.vue";

export default {
  components: { When, Image, Text, Video, Bio, Decoration },
  props: {
    post: {
      type: Object,
    },
  },
  setup(props) {},
};
</script>

<style scoped>
.post {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 1rem;
  break-inside: avoid;
}
</style>
