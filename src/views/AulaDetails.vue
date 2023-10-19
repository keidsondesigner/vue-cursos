<template>
  <div>
    <sapn v-if="loading">
      Carregando...
      <LoadingComponent />
    </sapn>
    <!-- <p>{{ aula }}</p> -->
    <!-- <p>{{ data }}</p> -->
    <div v-if="data">
      <h2>{{ data.nome }}</h2>
      <iframe width="400" height="225"
        src="https://www.youtube.com/embed/-ktZTaeAFnI?si=Zw2ZJF6gNYfmcF6h"
        title="YouTube video player" frameborder="0" allow="accelerometer;
        autoplay; clipboard-write; encrypted-media; gyroscope;
        picture-in-picture; web-share" allowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
  props: ['aula'],
  mixins: [fetchData],
  created() {
    this.getData(`/aula/${this.aula}`);
  },
  // sempre que a rota atualizar o getData vai ser chamado novamente e atualizar os dados;
  beforeRouteUpdate(to, from, next) {
    this.getData(`/aula/${to.params.aula}`);
    next();
  },
};
</script>

<style lang="scss" scoped></style>
