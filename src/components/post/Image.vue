<template>
  <div class="post__image">
    <img :src="src" />
  </div>
</template>

<script>
export default {
  props: ["src"],
};
</script>

<style scoped>
.post__image {
  max-height: 30rem;
  overflow: hidden;
}

img {
  width: 100%;
}
</style>
