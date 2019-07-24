<template>
  <div class="home">
    <img alt="logo" src="../static/logo.png" />
    <boards-table msg="Built with Vue and Bulma" />
  </div>
</template>

<script>
import BoardsTable from "@components/BoardsTable.vue";

export default {
  name: "home",
  components: {
    BoardsTable
  }
};
</script>
