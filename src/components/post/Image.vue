<template>
  <div class="post__image card-image">
    <figure class="image">
      <img :src="data" />
    </figure>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped></style>
