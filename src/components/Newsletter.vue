<template>
  <div class="newsletter-container">
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="formData.email">
      <button type="submit">S'inscrire</button>
    </form>
  </div>
</template>

<script lang="ts">
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/main';

export default {
  name: "Newsletter",
  data() {
    return {
      formData: {
        email: '',
      }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const docRef = await addDoc(collection(db, "contacts"), this.formData);
        console.log("Document ajouté avec ID :", docRef.id);
      } catch (error) {
        console.error("Erreur lors de l'ajout du document :", error);
      }
    }
  }
};
</script>

<style scoped>
.newsletter-container {
  width: 800px;
}
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

button:hover {
  cursor: pointer;
}

@media (max-width: 991.98px) {
  .newsletter-container {
    width: 100%;
  }

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