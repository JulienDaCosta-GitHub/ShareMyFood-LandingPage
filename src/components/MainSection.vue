<script setup lang="ts">
import Newsletter from "@/components/Newsletter.vue";
</script>

<template>
<div class="main-section">
  <div class="main-section-logo-and-text">
    <img class="main-section-logo" src="/src/assets/img/logo-sharemyfood.png" alt="logo-sharemyfood">
    <div class="main-section-text">
      <p>Avec ShareMyFood, vendez votre nourriture non consommée, et contribuons ensemble à la lutte contre le gaspillage alimentaire !</p>
      <br>
      <p>Soyez au courant des dernières informations en vous inscrivant à notre newsletter !</p>
      <br>
    </div>
    <Newsletter></Newsletter>
  </div>
</div>
</template>

<script lang="ts">
export default {
  name: "MainSection"
};
</script>

<style scoped>
  .main-section {
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-section-logo-and-text {
    transform: translate(-65%, -60%);
    left: 50%;
    top: 50%;
    position: absolute;
  }

  .main-section-logo {
    position: relative;
    right: 60px;
  }

  .main-section-text {
    font-size: 22px;
    width: 75%;
  }

@media (max-width: 991.98px) {
  .main-section-logo-and-text {
    transform: none;
    position: unset;
    width: 100%;
  }
  .main-section-logo {
    right: unset;
    height: 100px;
  }
  .main-section-text {
    width: unset;
  }
  .main-section-logo-and-text {
    padding: 30px;
  }
}
</style>