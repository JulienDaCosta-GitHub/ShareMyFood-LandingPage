<template>
  <div class="newsletter-container">
    <input type="text">
    <button>S'inscrire</button>
  </div>
</template>

<script>
export default {
  name: "Newsletter"
};
</script>

<style scoped>
.newsletter-container input {
  width: 500px;
  height: 50px;
  border-radius: 20px;
  border: solid 1px;
  padding: 5px 20px;
  font-size: 22px;
  font-family: 'Quicksand', sans-serif;
}

.newsletter-container button {
  background-color: #6FAE3A;
  height: 50px;
  border: none;
  border-radius: 15px;
  padding: 5px 25px;
  color: white;
  margin-left: 25px;
  font-size: 22px;
  font-family: 'Quicksand', sans-serif;
}

@media (max-width: 991.98px) {
  .newsletter-container input {
    width: 100%;
  }

  .newsletter-container {
    display: flex;
    flex-direction: column;
  }

  .newsletter-container {
    display: flex;
    flex-direction: column;
  }

  .newsletter-container button {
    margin-left: unset;
    margin-top: 15px;
  }
}
</style>