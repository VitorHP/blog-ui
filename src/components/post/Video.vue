<template>
  <div class="video">
    <div class="post__image card-image">
      <figure class="image">
        <div v-html="content"></div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
    },
  },
};
</script>

<style></style>
