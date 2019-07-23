<template>
  <div class="home">
    <img alt="axial3d logo" src="../static/axial3d-logo.png" />
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
