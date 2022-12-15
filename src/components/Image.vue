<template>
  <div class="image">
    <img src="images/image3.jpg" />
    <when />
  </div>
</template>

<script>
import when from "./post/when.vue";
export default {
  components: { when },
};
</script>

<style>
.image {
  display: inline-block;
  background-color: white;
  padding: 1rem;
  border-radius: 15px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 24rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
