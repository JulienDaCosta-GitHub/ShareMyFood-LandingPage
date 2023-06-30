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
import { defineComponent } from "vue";
import Swal from "sweetalert2";

export default defineComponent({
  name: "Newsletter",
  data() {
    return {
      formData: {
        email: '',
      }
    };
  },
  methods: {
    async handleSubmit(): Promise<void> {
      try {
        const docRef = await addDoc(collection(db, "contacts"), this.formData);
        console.log("Document ajouté avec ID :", docRef.id);
        Swal.fire({
          title: 'Succès',
          text: 'Inscription à la newsletter réussie',
          icon: 'success',
          confirmButtonColor: '#6FAE3A',
        });
        this.formData.email = '';
      } catch (error) {
        console.error("Erreur lors de l'ajout du document :", error);
        Swal.fire({
          title: 'Echec',
          text: 'Inscription à la newsletter échouée',
          icon: 'error',
          confirmButtonColor: '#FF0000',
        });
        this.formData.email = '';
      }
    }
  }
});
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
  .newsletter-container input {
    width: 100%;
  }

  .newsletter-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }

  .newsletter-container button {
    margin-left: unset;
    margin-top: 15px;
  }
}
</style>