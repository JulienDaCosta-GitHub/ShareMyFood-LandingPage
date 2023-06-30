<template>
  <div class="main-section">
    <div class="main-section-left">
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
    <div class="main-section-right">

    </div>
  </div>
</template>

<script lang="ts">
import Newsletter from "@/components/Newsletter.vue";

export default {
  name: "MainSection",
  components: {
    Newsletter
  }
};
</script>

<style scoped>
  .main-section-left {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .main-section-right {
    width: 40%;
    height: 100%;
    background-image: url(/src/assets/img/main-image-apple.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 50%;
  }

  .main-section {
    height: 700px;
    display: flex;
    /*align-items: center;*/
    /*justify-content: center;*/
  }

  .main-section-logo-and-text {
    padding: 0 15%;
  }

  .main-section-logo {
    position: relative;
    right: 60px;
  }

  .main-section-text {
    font-size: 22px;
  }

  @media (max-width: 991.98px) {
    .main-section-left {
      width: 100%;
    }
    .main-section-logo-and-text {
      transform: none;
      position: unset;
      width: 100%;
    }
    .main-section-logo {
      right: 35px;
      height: 100px;
    }
    .main-section-text {
      width: unset;
    }
    .main-section-logo-and-text {
      padding: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .main-section-right {
      display: none;
    }
  }
</style>