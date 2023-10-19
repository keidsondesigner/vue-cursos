<template>
  <div>
    <sapn v-if="loading">
      Carregando...
      <LoadingComponent />
    </sapn>
    <div v-else>
      <h1>{{ data.titulo }}</h1>
      <p>{{ data.descricao }}</p>
      <ul>
        <li  v-for="item in data.cursos" :key="item.id">
          <h2>
            <router-link :to="{ name: 'curso', params: { id: item.id } }">
              {{ item.nome }} - {{ item.totalAulas }} aulas | {{ item.horas }} horas
            </router-link>
          </h2>
          <p>{{ item.descricao }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
  name: 'CursosView',
  mixins: [fetchData],
  created() {
    this.getData('/cursos');
  },
};
</script>

<style lang="scss" scoped>

</style>
