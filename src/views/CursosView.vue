<template>
  <div>
    <sapn v-if="loading">
      <LoadingComponent />
      Carregando...
    </sapn>
    <div v-else>
      <h1>{{ data.titulo }}</h1>
      <p>{{ data.descricao }}</p>
      <router-link class="btn-cursos" tag="button" to="/">
          {{ '< ' }}Home
        </router-link>
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
.btn-cursos {
  display: flex;
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  padding: 15px 40px;
  font-size: 1rem;
  margin-bottom: 40px;
  font-weight: 600;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}

</style>
