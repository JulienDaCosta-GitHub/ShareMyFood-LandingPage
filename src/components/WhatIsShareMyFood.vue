<template>
  <div class="what-is-sharemyfood">
    <div class="what-is-sharemyfood-container">
      <div class="what-is-sharemyfood-text">
        <h2>Qu’est-ce que ShareMyFood ?</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl semper, ullamcorper magna id, fermentum justo. Duis sit amet metus metus. Nunc tincidunt lectus metus, eget congue metus imperdiet a. Mauris condimentum metus et leo placerat viverra.</p>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl semper, ullamcorper magna id, fermentum justo. Duis sit amet metus metus. Nunc tincidunt lectus metus, eget congue metus imperdiet a. Mauris condimentum metus et leo placerat viverra.</p>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nisl semper, ullamcorper magna id, fermentum justo. Duis sit amet metus metus. Nunc tincidunt lectus metus, eget congue metus imperdiet a. Mauris condimentum metus et leo placerat viverra.</p>
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
  height: 700px;
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
  margin-right: 215px;
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
</style>