<template>
  <div class="our-team">
    <div class="our-team-container">
      <h2>Notre équipe</h2>
      <div class="our-team-all">
        <div class="our-team-each-row first-row">
          <div class="our-team-each-profile">
            <div class="our-team-each-profile-img">
              <img src="src/assets/img/planet.png" alt="">
            </div>
            <div>
              <p>Alexandre Duval</p>
              <p>(Chef de projet)</p>
            </div>
          </div>
          <div class="our-team-each-profile">
            <div class="our-team-each-profile-img">
              <img src="src/assets/img/planet.png" alt="">
            </div>
            <div>
              <p>Antoine Duplouy</p>
              <p>(Chef de projet)</p>
            </div>
          </div>
          <div class="our-team-each-profile">
            <div class="our-team-each-profile-img">
              <img src="src/assets/img/planet.png" alt="">
            </div>
            <div>
              <p>Alizée Gillouaye</p>
              <p>(Développeuse Fullstack)</p>
            </div>
          </div>
        </div>
        <div class="our-team-each-row second-row">
          <div class="our-team-each-profile">
            <div class="our-team-each-profile-img">
              <img src="src/assets/img/planet.png" alt="">
            </div>
            <div>
              <p>Johana Bukal</p>
              <p>(Développeuse Front-End)</p>
            </div>
          </div>
          <div class="our-team-each-profile">
            <div class="our-team-each-profile-img">
              <img src="src/assets/img/planet.png" alt="">
            </div>
            <div>
              <p>Théo Popelin</p>
              <p>(Développeur Back-End)</p>
            </div>
          </div>
          <div class="our-team-each-profile">
            <div class="our-team-each-profile-img">
              <img src="src/assets/img/planet.png" alt="">
            </div>
            <div>
              <p>Julien Da Costa</p>
              <p>(Développeur Front-End)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurTeam"
}
</script>

<style scoped>
h2 {
  font-weight: 600;
  margin-bottom: 50px;
}
.our-team {
  min-height: 700px;
  padding: 80px 250px;
}

.our-team-each-row {
  display: flex;
  justify-content: space-around;
}

.our-team-each-row p {
  text-align: center;
  font-weight: bold;
}

.our-team-each-row.first-row {
  margin-bottom: 50px;
}

.our-team-each-profile {
  width: 200px;
}

.our-team-each-profile-img {
  text-align: center;
}
</style>