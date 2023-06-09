<template>
  <div id="help" class="how-to-help">
    <div class="how-to-help-container">
      <h2>Comment nous aider ?</h2>
      <p>Nous sommes une organisation à but non lucratif qui dépend de la générosité de nos donateurs et de nos bénévoles pour réaliser notre mission. Si vous souhaitez nous aider, il y a plusieurs façons de le faire. Vous pouvez tout d'abord faire un don en ligne sur notre site internet, qui nous permettra de financer nos projets et nos activités. Vous pouvez également devenir bénévole et nous aider sur le terrain en participant à nos événements ou en nous aidant à promouvoir notre organisation auprès de votre communauté. Enfin, vous pouvez nous aider en parlant de nous autour de vous et en partageant notre message sur les réseaux sociaux. Chaque geste compte et nous sommes reconnaissants pour votre soutien à notre cause. Merci d'avance pour votre aide !</p>
      <div class="how-to-help-btn">
        <button>Notre formulaire</button>
      </div>
    </div>
  </div>
</template>

<script>
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
  font-weight: bold;
  margin-bottom: 50px;
  font-size: 22px;
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

@media (max-width: 991.98px) {
  .how-to-help {
    padding: 50px 30px;
  }
}
</style>