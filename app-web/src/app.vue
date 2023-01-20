<script setup>
import { ref, computed } from "vue";
import routes from "./routes.js";
import error_404 from './components/error_404.vue'


const currentPath = ref(window.location.hash);


window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});


const currentView = computed(() => {
  console.log(currentPath);
  return routes[currentPath.value.slice(1) || '/'] || error_404
})
</script>

<template>
  <div>
    <a href="#/error">throw error 404</a>
    <component :is="currentView" />
  </div>
</template>

<style lang="" scoped></style>
