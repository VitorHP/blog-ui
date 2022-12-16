<template>
  <div class="post__image card-image">
    <figure class="image">
      <img :src="content" />
    </figure>
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style scoped></style>
