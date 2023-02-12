<script setup>
  import Header from "../components/header.vue";
  import Main from "../components/main.vue";
  import Footer from "../components/footer.vue";
</script>

<template>
  <div class="layout">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  Header,
  Nav,
  Main,
  Footer {
    flex: 1;
  }
</style>
