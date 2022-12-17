<template>
  <div class="card-content">
    <div class="bio-top">
      <figure class="image is-96x96">
        <img :src="data.picture" />
      </figure>
      <div class="profile">
        <strong class="content">{{ data.name }}</strong>
        <div class="role">{{ data.role }}</div>
        <div class="content">{{ data.email }}</div>
      </div>
    </div>
    <div class="social-links">
      <strong class="social is-small">Social</strong>
      <div class="links">
        <a v-for="(url, site) in data.socialLinks" :href="url" target="_blank">
          <span class="icon is-large">
            <i :class="brandIconClass(site)"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  setup(props) {
    const brandIconClass = (name) => `fa-brands fa-2x fa-${name}`;

    return {
      brandIconClass,
    };
  },
};
</script>

<style scoped>
.image {
  border-radius: 10px;
  overflow: hidden;
  margin-right: 1.5rem;
}

.bio-top {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
}

.role {
  margin-bottom: 1rem;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
}

.links a {
  margin: 0 1rem;
  border-radius: 25px;
  color: white;
  z-index: 2;
}

.icon {
  background-color: #3c2b55;
  border-radius: 25px;
  overflow: hidden;
}
</style>
