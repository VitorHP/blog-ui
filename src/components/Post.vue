<template>
  <div class="post">
    <div class="post__title">{{ title }}</div>
    <div class="post__text">{{ text }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props) {
    const theme = ref({
      color: "red",
    });

    return {
      title: "this is a title",
      text: "this is a text",
      theme,
    };
  },
};
</script>

<style scoped>
.post {
  background-color: aqua;
  padding: 1rem;
  border-radius: 15px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  min-height: 17rem;
  min-width: 15rem;
}

.post__text {
  color: v-bind("theme.color");
}
</style>
