<template>
  <div>
    <sapn v-if="loading">
      Carregando...
      <LoadingComponent />
    </sapn>
    <div v-else>
      <h1>Contatos</h1>
      <p>Entre em contato que responderemos em até 24h.</p>
      <p><b>Email:</b> {{ data.contato.email }}</p>
      <p><b>Telefone:</b> {{ data.contato.telefone }}</p>
      <p><b>Endereço:</b> {{ data.contato.endereco }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
  name: 'ContatosView',
  mixins: [fetchData],
  created() {
    this.getData('/contato');
  },
};
</script>

<style lang="scss" scoped>

</style>
