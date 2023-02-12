<script setup></script>

<template>
  <header class="bg-accent-400 text-neutral-700">
    <div class="button display-f">
      <button class="fs-600 fw-bold">
        Sign up <i class="fa-solid fa-align-left"></i>
      </button>
      <button class="fs-600 fw-bold">
        Sign in <i class="fa-solid fa-right-to-bracket"></i>
      </button>
    </div>
    <div class="display-g section">
      <h1 class="fw-bold">All - Use <i class="fa-solid fa-person"></i></h1>
      <p class="fw-bold fs-600">
        slogan Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Molestiae, recusandae.
      </p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @import "../scss/variables.scss";

  header {
    padding: 1.5em 0;
    flex-direction: column;
  }

  .section {
    grid-template-columns: 1fr 1fr;
    place-items: center;

    margin: 0 1em;

    padding: 1em 0;

    h1 {
      font-size: $fs-800;
    }

    p {
      padding: 0.5em;
      text-transform: capitalize;
    }
  }
  .button {
    justify-content: space-between;

    button {
      padding: 0.1rem 0.7rem;
      border-radius: 0.2em;
      border: none;

      background-color: transparent;

      cursor: pointer;
    }
  }

  @media (min-width: 60em) {
    .button button {
      font-size: $fs-700;

      padding: 0.5em 2em;
    }
    .section {
      margin-top: 2rem;
      align-items: center;

      h1 {
        font-size: $fs-900;
      }
      p {
        font-size: $fs-700;
      }
    }
  }
</style>
