<template>
  <List :items="listItems">
    <div slot-scope="{item}" class="list-item">{{item.text}}</div>
  </List>
</template>

<script>
import List from "./base/List.vue";
export default {
  name: "app",
  components: {
    List
  },
  data() {
    return {
      listItems: [
        { text: "First item", icon: "fa fa-user" },
        { text: "Second item", icon: "fa fa-copy" },
        { text: "Third item", icon: "fa fa-cut" }
      ]
    };
  }
};
</script>