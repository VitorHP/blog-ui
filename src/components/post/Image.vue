<template>
  <div class="post__image card-image">
    <figure class="image" @click="toggleModal">
      <img :src="data" />
    </figure>
    <div class="modal" :class="{ 'is-active': modalIsActive }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <figure class="image" @click="toggleModal">
          <img :src="data" />
        </figure>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="toggleModal"
      ></button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    data: {
      type: String,
    },
    canZoom: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const modalIsActive = ref(false);

    const toggleModal = () => {
      if (!props.canZoom) {
        return;
      }

      modalIsActive.value = !modalIsActive.value;
    };

    return {
      modalIsActive,
      toggleModal,
    };
  },
};
</script>

<style scoped>
.modal-content {
  width: 80%;
}
</style>
