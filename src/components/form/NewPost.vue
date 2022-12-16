<template>
  <div class="new-post box">
    <textarea
      class="textarea"
      placeholder="Bota pra fora"
      rows="5"
      @keyup.enter="submit"
    ></textarea>
    <div class="controls">
      <button class="button is-white is-small" @click="$emit('close')">
        Fechar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["submit", "close"],
  setup(props, ctx) {
    const submit = (event) => {
      if (!event.ctrlKey) {
        return;
      }

      ctx.emit("submit", event.target.value);
      ctx.emit("close");
    };

    return {
      submit,
    };
  },
};
</script>

<style scoped>
.new-post {
  max-width: 500px;
  margin: auto;
}

.controls {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

textarea {
  border: none;
  box-shadow: none;
}
</style>
