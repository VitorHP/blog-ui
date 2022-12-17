<template>
  <div class="post card">
    <decoration v-if="post.decoration" :data="post.decoration" />
    <component v-for="c in post.content" :is="c.type" :data="c.data" />
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
import Title from "./post/Title.vue";

export default {
  components: { When, Image, Text, Video, Bio, Decoration, Title },
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
