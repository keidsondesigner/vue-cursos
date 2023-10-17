<template>
  <header>
    <nav>
      <router-link to="/"><img alt="Vue logo" src="../assets/logo.png">Techno</router-link>
      <ul>
        <li>
          <router-link to="/cursos">Cursos</router-link>
        </li>
        <li>
          <router-link to="/contatos">Contato</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
  a {
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      height: 35px;
      width: 35px;
    }
  }
}

ul {
  display: flex;
  gap: 20px;
}
</style>
