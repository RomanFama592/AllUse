<script setup>
  import { ref } from "vue";

  const year = ref(new Date().getFullYear());
</script>

<template>
  <footer class="footer bg-neutral-700 text-accent-100">
    <div class="footer_content">
      <h2 class="fs-700 fw-semi-bold">
        Contacto <i class="fa-regular fa-user fs-300"></i>
      </h2>
      <h2 class="fs-700 fw-semi-bold">Nuestras Redes</h2>
      <nav>
        <ul>
          <li>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-github"></i></a>
          </li>
        </ul>
      </nav>
      <p class="fs-700 fw-semi-bold">&copy; {{ year }} All-Use</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 60em) {
    .footer {
      flex-direction: row;
      justify-content: center;
    }
  }
</style>
