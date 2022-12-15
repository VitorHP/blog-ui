<template>
  <div class="post">
    <div class="post__text">{{ text }}</div>
    <when />
  </div>
</template>

<script>
import { ref } from "vue";
import When from "./post/when.vue";
export default {
  components: { When },
  props: {
    text: {
      type: String,
    },
  },
  setup() {
    const theme = ref({
      color: "black",
    });

    return {
      theme,
    };
  },
};
</script>

<style scoped>
.post {
  display: inline-block;
  background-color: white;
  padding: 1rem;
  border-radius: 15px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 24rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.post__text {
  color: v-bind("theme.color");
}
</style>
