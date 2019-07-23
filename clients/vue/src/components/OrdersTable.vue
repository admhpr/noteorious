<template>
  <section>
    <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>
    <div>{{orders}}</div>
    <button @click="createOrder"></button>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { CREATE_ORDER } from "@store/orders/action.types";

console.log(CREATE_ORDER);
export default {
  name: "OrdersTable",
  props: {
    msg: String
  },
  computed: {
    ...mapState({
      orders: ({ orders }) => orders.orders,
      isLoading: ({ orders }) => orders.isLoading
    })
  },
  methods: {
    ...mapActions([CREATE_ORDER])
  },
  async created() {
    this.$store.dispatch("getOrders");
  }
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
