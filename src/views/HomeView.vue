<template>
  <div class="home">
    <sapn v-if="loading">
      Carregando...
      <LoadingComponent />
    </sapn>
    <div v-else class="container-item">
      <div class="item-primary">
        <h1>Hellow Home</h1>
        <p>{{ data.descricao }}</p>
        <router-link
          class="btn-cursos"
          tag="button" to="/cursos">
          Cursos
        </router-link>
        <div>
          <h2>Avaliação</h2>
          <ul>
            <li v-for="avaliacao in data.avaliacoes" :key="avaliacao.nome">
              <p>{{ avaliacao.nome }}</p>
              <p>{{ avaliacao.descricao }}</p>
            </li>
          </ul>
        </div>
      </div>
      <img src="https://www.functiondev.com.br/assets/img/foto-keidson-400.png" alt="">
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
  name: 'HomeView',
  components: {},
  mixins: [fetchData],
  created() {
    this.getData('/home');
  },
};
</script>

<style lang="scss" scoped>
.container-item {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  align-items: center;
  gap: 20px;
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

img {
  width: 350px;
  margin: 0 auto;
}

@media screen and (max-width: 780px) {
  .container-item {
    display: block;
    .item-primary {
      margin-bottom: 40px;
    }
    img {
    width: 250px;
    }
  }
}
</style>
