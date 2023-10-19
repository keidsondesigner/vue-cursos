<template>
  <div>
    <p>{{ id }}</p>
    <span>{{ data }}</span>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
  props: ['id'],
  mixins: [fetchData],
  created() {
    this.getData(`/curso/${this.id}`);
  },
};
</script>

<style lang="scss" scoped>

</style>
