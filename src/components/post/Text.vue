<template>
  <div class="text card-content">{{ data }}</div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
.text {
  text-align: justify;
}
</style>
