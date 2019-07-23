<template>
  <div class="container is-fluid">
    <div class="columns">
      <aside class="column is-one-third">I'm a sidebar</aside>
      <main class="column">
        <slot name="content"></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
