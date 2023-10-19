<template>
  <div>
    <sapn v-if="loading">
      Carregando...
      <LoadingComponent />
    </sapn>
    <div v-else class="container-item">
      <div class="item-primary">
        <!-- <p>{{ id }}</p>
        <span>{{ data }}</span> -->
        <h1>{{ data.nome }}</h1>
        <p>{{ data.descricao }}</p>
        <router-link class="btn-cursos" tag="button" to="/cursos">
          {{ '< ' }}Voltar
        </router-link>
        <h2>Aulas</h2>
        <ul class="item-curso">
          <li v-for="item in  data.aulas" :key="item.id">
            <router-link :to="{name: 'aula', params: { aula: item.id }}">
              {{ item.nome }}
            </router-link>
          </li>
        </ul>
      </div>
      <span>
        <router-view></router-view>
      </span>
    </div>
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
.container-item {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  // align-items: center;
  gap: 20px;
}

.item-curso {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  li {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: white;
    border-radius: 4px;
    padding: 20px;
    width: 90%;
    text-align: start;
  }
}

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

@media screen and (max-width: 780px) {
  .container-item {
    display: block;
  }
}
</style>
