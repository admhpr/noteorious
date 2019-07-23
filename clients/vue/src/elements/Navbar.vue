<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-contents"
        :class="{'is-active': mobileMenuIsActive}"
        @click="toggleMobileMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{'is-active': mobileMenuIsActive}">
      <div class="navbar-start"></div>

      <div id="navbar-contents" class="navbar-end">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuIsActive: false
    };
  },
  methods: {
    toggleMobileMenu: function() {
      this.mobileMenuIsActive = !this.mobileMenuIsActive;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>