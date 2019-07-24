<template>
  <section>
    <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>
    <div>{{boards}}</div>
    <button @click="createBoard"></button>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { CREATE_BOARD } from "@store/boards/action.types";

console.log(CREATE_BOARD);
export default {
  name: "BoardsTable",
  props: {
    msg: String
  },
  computed: {
    ...mapState({
      boards: ({ boards }) => boards.boards,
      isLoading: ({ boards }) => boards.isLoading
    })
  },
  methods: {
    ...mapActions([CREATE_BOARD])
  },
  async created() {
    this.$store.dispatch("getBoards");
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
