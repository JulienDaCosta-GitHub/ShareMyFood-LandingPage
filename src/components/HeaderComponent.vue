<template>
  <div class="header-container">
    <div class="header-redirections-container">
      <a>Qui sommes-nous</a>
      <a>Nos objectifs</a>
      <a>Comment nous aider</a>
      <a>Notre équipe</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent"
};
</script>

<style scoped>
@media (max-width: 991.98px) {
  .header-redirections-container {
    display: none;
  }
}

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
}
</style>