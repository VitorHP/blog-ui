<template>
  <div class="form">
    <div class="buttons">
      <button class="button">
        <span class="icon is-small"> </span>
      </button>
      <button class="button">
        <span class="icon is-small"> </span>
      </button>
    </div>
  </div>
  <new-post />
</template>

<script>
import NewPost from "./form/NewPost.vue";

export default {
  components: { NewPost },
};
</script>

<style scoped>
.form {
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  flex-direction: column;
}

.new-post {
  margin-bottom: 2rem;
}
</style>
