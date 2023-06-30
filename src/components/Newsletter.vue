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
import axios from 'axios';
import sgMail from '@sendgrid/mail';

// axios.get('/configapi.json')
//     .then(response => {
//       const apiKey = response.data.apiKey;
//       sgMail.setApiKey(apiKey);
//     })
//     .catch(error => {
//       console.error('Erreur lors du chargement du fichier de configuration', error);
//     });

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
        await addDoc(collection(db, "contacts"), this.formData);
        // const msg = {
        //   to: this.formData.email,
        //   from: 'sharemyfoodiwm@gmail.com',
        //   subject: 'Bienvenue chez ShareMyFood',
        //   text: 'Votre inscription à notre newsletter est un succès ! Nous vous donnerons rapidement des nouvelles sur notre projet. Nous vous remercions pour votre soutien !',
        // };

        // sgMail.send(msg)
        //     .then(() => {
        //       console.log('Email sent');
        //     })
        //     .catch((error) => {
        //       console.error(error);
        //     });

        Swal.fire({
          title: 'Succès',
          text: 'Inscription à la newsletter réussie',
          icon: 'success',
          confirmButtonColor: '#6FAE3A',
        });
        this.formData.email = '';
      } catch (error) {
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

.newsletter-container button:hover {
  background-color: white;
  color: #6FAE3A;
  border: solid 1px #6FAE3A;
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