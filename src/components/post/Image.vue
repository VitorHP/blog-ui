<template>
  <div class="post__image card-image">
    <figure class="image">
      <img :src="src" />
    </figure>
  </div>
</template>

<script>
export default {
  props: ["src"],
};
</script>

<style scoped></style>
