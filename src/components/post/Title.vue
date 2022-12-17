<template>
  <div class="title-image">
    <Image :data="data" />
  </div>
</template>

<script>
import Image from "./Image.vue";

export default {
  props: ["data"],
  components: { Image },
};
</script>

<style>
.title-image {
  margin-top: 1rem;
}
</style>
