import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './assets/main.css'

createApp(App).mount('#app')

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCfHjoPmyDV7RSPRU8MsDCuVGyp42R6sek',
    appId: '1:934591545381:web:0b99ace1c3fa5a70333fcc',
    messagingSenderId: '934591545381',
    projectId: 'share-food-d3e9b',
    authDomain: 'share-food-d3e9b.firebaseapp.com',
    storageBucket: 'share-food-d3e9b.appspot.com',
    measurementId: 'G-62240S5M0Z',
};

firebase.initializeApp(firebaseConfig);
