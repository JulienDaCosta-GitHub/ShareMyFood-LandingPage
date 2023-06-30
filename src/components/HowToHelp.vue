<template>
  <div id="help" class="how-to-help">
    <div class="how-to-help-container">
      <h2>Comment nous aider ?</h2>
      <p>Nous sommes une organisation à but non lucratif qui dépend de nos utilisateurs pour réaliser notre mission. Si vous souhaitez nous aider, il y a plusieurs façons de le faire. Vous pouvez tout d'abord remplir notre formulaire afin de nous donner des conseils ou nous faire des recommandations qui pourraient nous permettre de nous améliorer. Nous lirons vos réponses avec grand plaisir. Vous pouvez également nous aider en parlant de nous autour de vous et en partageant notre message sur les réseaux sociaux. Chaque geste compte et nous sommes reconnaissants pour votre soutien à notre cause. Merci d'avance pour votre aide !</p>
      <div class="how-to-help-btn">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXWxccHsMamt99OzaqTUTj2YmTBkbeSzT6jWVu5yxH3mEt4A/viewform" target="_blank"><button>Notre formulaire</button></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HowToHelp"
}
</script>

<style scoped>
.how-to-help {
  min-height: 500px;
  padding: 80px 250px;
  background-color: #6FAE3A;
}

.how-to-help-container h2 {
  color: white;
  font-weight: 600;
  margin-bottom: 50px;
  font-size: 22px;
  font-family: 'Quicksand', sans-serif;
}

.how-to-help-container p {
  color: white;
  font-size: 18px;
}

.how-to-help-btn {
  text-align: center;
}

.how-to-help-btn button {
  background-color: white;
  height: 50px;
  border: none;
  border-radius: 25px;
  padding: 5px 50px;
  color: black;
  margin-top: 100px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Quicksand', sans-serif;
}

.how-to-help-btn button:hover {
  background-color: black;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
}

@media (max-width: 991.98px) {
  .how-to-help {
    padding: 50px 24px;
  }
}
</style>