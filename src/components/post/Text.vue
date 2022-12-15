<template>
  <div class="text">{{ text }}</div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style>
.text {
  /* color: v-bind("theme.color"); */
  padding: 1rem;
}
</style>
