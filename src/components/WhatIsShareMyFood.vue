<template>
  <div id="whoweare" class="what-is-sharemyfood">
    <div class="what-is-sharemyfood-container">
      <div class="what-is-sharemyfood-text">
        <div>
          <h2>Qu’est-ce que ShareMyFood ?</h2>
          <div>
            <p>ShareMyFood est une application innovante de partage de nourriture conçue pour permettre aux utilisateurs de donner ou vendre de la nourriture non consommée à d'autres personnes qui en ont besoin.</p>
            <br>
            <p>Il s’agit d’une solution pratique pour éviter le gaspillage alimentaire et encourager le partage de nourriture entre les membres de la communauté. Elle permet également de favoriser la réduction de la production de déchets alimentaires et de contribuer à la protection de l'environnement.</p>
          </div>
        </div>
        <div class="application-test-btn">
          <button>Tester l'application</button>
        </div>
      </div>

      <div class="what-is-sharemyfood-screenshots">
        <img src="src/assets/img/screenshot-sharemyfood2.png" alt="screenshot2">
        <img class="screenshot-img1" src="src/assets/img/screenshot-sharemyfood.png" alt="screenshot">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhatIsShareMyFood"
};
</script>

<style scoped>
h2 {
  font-weight: 600;
  margin-bottom: 50px;
}
.what-is-sharemyfood {
  min-height: 700px;
  background-color: #6FAE3A;
  padding: 80px 250px;
}

.what-is-sharemyfood-container {
  display: flex;
}

.what-is-sharemyfood-text h2,
.what-is-sharemyfood-text p {
  color: white;
}

.what-is-sharemyfood-text {
  margin-right: 250px;
}

.what-is-sharemyfood-text h2 {
  font-size: 22px;
}

.what-is-sharemyfood-text p {
  font-size: 16px;
}

.what-is-sharemyfood-screenshots {
  display: flex;
}

.what-is-sharemyfood-screenshots img {
  height: 500px;
}

.screenshot-img1 {
  position: relative;
  top: 15px;
  right: 115px;
}

.application-test-btn button {
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
  .what-is-sharemyfood {
    padding: unset;
  }
  .what-is-sharemyfood-container {
    display: flex;
    flex-direction: column;
  }
  .what-is-sharemyfood-screenshots img {
    height: 250px;
  }
  .what-is-sharemyfood-text {
    margin-right: unset;
  }
  .what-is-sharemyfood-container {
    padding: 50px 30px;
  }
  .screenshot-img1 {
    position: unset;
    right: unset;
  }
  .application-test-btn button {
    margin-bottom: 100px;
  }
  .application-test-btn {
    text-align: center;
  }
  .what-is-sharemyfood-screenshots {
    justify-content: center;
  }
}
</style>