<template>
  <div>
    <slot v-for="item in items" :item="item"></slot>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>