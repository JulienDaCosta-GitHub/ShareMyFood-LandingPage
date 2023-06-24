<template>
  <div class="header-container">
    <div class="header-redirections-container">
      <a href="#whoweare">Qui sommes-nous</a>
      <a href="#goals">Nos objectifs</a>
      <a href="#help">Comment nous aider</a>
      <a href="#team">Notre équipe</a>
    </div>
    <div class="header-burger-menu">
      <img v-show="!isOpen" class="burger-menu-icon" @click="toggleMenu" src="/src/assets/img/burger_menu.png" alt="">
      <img v-show="isOpen" class="close-menu-icon" @click="toggleMenu" src="/src/assets/img/close.png" alt="">
      <div v-show="isOpen" class="header-burger-menu-container">
        <a href="#whoweare">Qui sommes-nous</a>
        <a href="#goals">Nos objectifs</a>
        <a href="#help">Comment nous aider</a>
        <a href="#team">Notre équipe</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeaderComponent",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
.header-container {
  height: 60px;
  background-color: #6FAE3A;
  display: flex;
  align-items: center;
  padding: 0 100px;
}

.header-redirections-container a {
  color: white;
  margin: 0 20px;
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 991.98px) {
  .header-redirections-container {
    display: none;
  }
  .burger-menu-icon {
    height: 45px;
    margin-left: 15px;
  }
  .close-menu-icon {
    height: 25px;
    margin-left: 15px;
  }
  .header-container {
    padding: unset;
  }
  .header-burger-menu-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 30px 20px;
    width: 180px;
    list-style: none;
    background-color: #6FAE3A;
    z-index: 1;
  }
  .header-burger-menu-container a {
    color: white;
    font-weight: 600;
    text-decoration: none;
  }
  .header-burger-menu-container a:not(:first-child) {
    margin-top: 15px;
  }
  .header-burger-menu {
    position: relative;
  }
}

@media (min-width: 992px) {
  .header-burger-menu {
    display: none;
  }
}
</style>