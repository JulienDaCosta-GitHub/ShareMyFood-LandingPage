<template>
<div class="footer">
  <div class="footer_container">
    <p>COPYRIGHT © 2023 </p>
  </div>
</div>
</template>

<script lang="ts">
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  background-color: #6FAE3A;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer p {
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 22px;
}
</style>