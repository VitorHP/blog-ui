<template>
  <img class="decoration" :src="data" />
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.decoration {
  position: absolute;
  max-width: none;
  width: calc(113%);
  transform: translate(-6%, -7%);
  z-index: 1;
}

@media only screen and (max-width: 600px) {
  .decoration {
    column-count: 1;
  }
}
</style>
