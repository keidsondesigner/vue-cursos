export default {
  data() {
    return {
      data: null,
      loading: true,
    };
  },
  methods: {
    getData(url) {
      this.loading = true;
      this.data = null;
      // remover este setTimeout() usado para testar loading;
      setTimeout(() => {
        fetch(`http://localhost:3000${url}`)
          .then((response) => response.json())
          .then((response) => {
            this.data = response;
            this.loading = false;
          });
      }, 650);
    },
  },
};
