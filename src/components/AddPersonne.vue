<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <!-- L'affichage des cases avec les champs à remplir et le placeholder pour voir a quoi correspond un champ -->

      <input type="text" placeholder="Nom" class="name" id="name" v-model="this.personne.name" /><br/>
      <input type="text" placeholder="Prénom" class="surname" id="surname" v-model="this.personne.surname" /><br/>
      <input type="text" placeholder="Téléphone" class="phone" id="phone" v-model="this.personne.phone" /><br/>
      <input type="text" placeholder="Ville" class="city" id="city" v-model="this.personne.city" /><br/>
      <button @click="creerPersonne" class="btn btn-success">Ajouter</button>
    </div>

    <div v-else>
      <h4>Personne ajoutée avec succès!</h4>
      <button class="btn btn-success" @click="resetForm">Ajouter une nouvelle personne</button>
    </div>
  </div>
</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "add-personne",
  data() {
    return {
      personne: {
        id: null,
        name: "",
        surname: "",
        phone: "",
        city: ""
      },
      submitted: false
    };
  },
  methods: {
    creerPersonne() {
      var data = {
        id: this.personne.id,
        // L'id est géré automatiquement et on récupère les variables
        name: this.personne.name,
        surname: this.personne.surname,
        phone: this.personne.phone,
        city: this.personne.city,
      };

      // on cré la personne avec les infos de data et si ça fonctionne on envoie en push et on affiche le message et dans la console sinon on remonte l'erreur
      PersonneDataService.create(data)
      .then( response =>{
        this.$router.push({ name:"personnes" });
        this.message = 'Personne créée avec succès!';
        console.log(response.data);
        // une sortie console 
      })
      .catch(e => {
        console.log(e);
      });
    },
    
    resetForm() {
      this.submitted = false;
      this.personne = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
