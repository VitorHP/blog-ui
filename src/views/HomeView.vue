<template>
  <div class="home-view">
    <Form />
    <Bubble />
  </div>
</template>

<script>
import Bubble from "../components/Bubble.vue";
import Form from "../components/Form.vue";

export default {
  components: { Bubble, Form },
};

Form;
</script>

<style>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
