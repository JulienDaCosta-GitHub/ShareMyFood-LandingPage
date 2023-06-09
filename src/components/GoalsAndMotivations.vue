<template>
<div class="goals-and-motivations">
  <div class="goals-and-motivations-container">
    <h2>Nos objectifs et motivations</h2>
    <div class="goals-and-motivations-lists">
      <div class="goals-and-motivations-each-list">
        <h3 class="goals-and-motivations-lists-title">Nos objectifs</h3>
        <div>
          <ul>
            <li class="goals-and-motivations-lists-title-li">Réduire le gaspillage alimentaire en permettant aux utilisateurs de donner ou vendre leurs aliments non consommés à d'autres personnes qui en ont besoin.</li>
            <li class="goals-and-motivations-lists-title-li">Encourager le partage et la solidarité entre les membres de la communauté grâce à une application conviviale et facile à utiliser.</li>
            <li class="goals-and-motivations-lists-title-li">Contribuer à la protection de l'environnement en réduisant la production de déchets alimentaires.</li>
          </ul>
        </div>
      </div>
      <div class="goals-and-motivations-each-list">
        <h3 class="goals-and-motivations-lists-title">Nos motivations</h3>
        <div>
          <ul>
            <li class="goals-and-motivations-lists-title-li">Sensibiliser les gens à l'importance de la réduction du gaspillage alimentaire et de la protection de l'environnement.</li>
            <li class="goals-and-motivations-lists-title-li">Offrir une solution pratique et efficace pour les personnes qui cherchent à donner ou à récupérer de la nourriture non consommée.</li>
            <li class="goals-and-motivations-lists-title-li">Favoriser le développement d'une communauté solidaire et engagée dans la lutte contre le gaspillage alimentaire.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="goals-and-motivations-img">
      <img src="src/assets/img/planet.png" alt="planet">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "GoalsAndMotivations"
}
</script>

<style scoped>
.goals-and-motivations {
  min-height: 700px;
  padding: 80px 250px;
}

.goals-and-motivations h2 {
  margin-bottom: 50px;
  font-size: 22px;
  font-weight: bold;
}

.goals-and-motivations-lists {
  display: flex;
  justify-content: space-between;
}

.goals-and-motivations-lists-title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
}

.goals-and-motivations-lists-title-li {
  margin-bottom: 15px;
}

.goals-and-motivations-each-list {
  width: 500px;
}

.goals-and-motivations-img {
  text-align: center;
  margin-top: 50px;
  height: 160px;
}

@media (max-width: 991.98px) {
  .goals-and-motivations {
    padding: 50px 30px;
  }
  .goals-and-motivations-lists {
    flex-direction: column;
  }
  .goals-and-motivations-each-list {
    width: unset;
  }
}
</style>