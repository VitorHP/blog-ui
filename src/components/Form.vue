<template>
  <div class="form" v-if="!formIsOpen">
    <div class="buttons">
      <button class="button" @click="toggleForm">
        <span class="icon is-small"> </span>
      </button>
      <button class="button">
        <span class="icon is-small"> </span>
      </button>
    </div>
  </div>
  <new-post v-if="formIsOpen" @submit="createPost" @close="toggleForm" />
</template>

<script>
import { useBubbleStore } from "../stores/bubble";
import NewPost from "./form/NewPost.vue";
import { ref } from "vue";

export default {
  components: { NewPost },
  setup(props) {
    const store = useBubbleStore();
    let formIsOpen = ref(false);

    const toggleForm = () => (formIsOpen.value = !formIsOpen.value);

    return {
      createPost: store.createPost,
      toggleForm,
      formIsOpen,
    };
  },
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
