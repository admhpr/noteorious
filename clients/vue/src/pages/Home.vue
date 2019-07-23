<template>
  <div class="home">
    <img alt="logo" src="../static/logo.png" />
    <orders-table msg="Built with Vue and Bulma" />
  </div>
</template>

<script>
import OrdersTable from "@components/OrdersTable.vue";

export default {
  name: "home",
  components: {
    OrdersTable
  }
};
</script>
