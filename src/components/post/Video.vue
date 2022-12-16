<template>
  <div class="video">
    <div class="post__image card-image">
      <figure class="image">
        <div v-html="data"></div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style></style>
