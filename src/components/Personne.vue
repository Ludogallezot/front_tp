<template>
  <!-- A COMPLETER ou plus de trop -->

  <div v-if="currentPersonne">
    <label for="id" class="id">Identification unique</label>
    <input type="text" class="id" id="id" v-model="currentPersonne.id" /><br/>
    <label for="name" class="name">Nom patronymique</label>
    <input type="text" class="name" id="name" v-model="currentPersonne.name" /><br/>
    <label for="surname" class="surname">Prénom</label>
    <input type="text" class="surname" id="surname" v-model="currentPersonne.surname" /><br/>
    <label for="phone" class="phone">Téléphone</label>
    <input type="text" class="phone" id="phone" v-model="currentPersonne.phone" /><br/>
    <label for="city" class="city">Ville</label>
    <input type="text" class="city" id="city" v-model="currentPersonne.city" />

    <button type="submit" class="badge badge-success" @click="updatePersonne">Modifier</button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>j'ai pas de currentPersonne</p>
  </div>


  <!-- A INCLURE DANS LE FORM -->
  <button class="badge badge-danger mr-2"
  @click="deletePersonne"
  >
  Supprimer
</button>


</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "personne",
  data() {
    return {
      currentPersonne: null,
      message: ''
    };
  },
  methods: {
    getPersonne(id) {
      // A COMPLETER ou plus mnt
      PersonneDataService.get(id)
      .then(response => {
        this.currentPersonne = response.data;
          //console.log(response.data);
          //console.log("selection d'une personne pour modification OK --- jusqu'ici tout va bien")
        })
      .catch(e => {
        console.log(e);
      });
    },

    updatePersonne() {
      // A COMPLETER ou plus mnt
      PersonneDataService.update(this.currentPersonne)
      .then( response =>{
        //console.log(response.data);
        this.message = 'Personne modifiée avec succès!';
        console.log(response.data);
          //console.log("Pour mise à jour OK --- jusqu'ici tout va bien");
        })
      .catch(e => {
        console.log(e);
      });
    },

    deletePersonne() {
      // A COMPLETER ou plus mnt
      PersonneDataService.delete(this.currentPersonne.id)
      .then(
        this.$router.push({ name:"personnes" })
        //console.log(response.data);
          //console.log("Pour mise à jour OK --- jusqu'ici tout va bien")
        )
      .catch(e => {
        console.log(e);
      });
    }
  },
  mounted() {
    this.message = '';
    this.getPersonne(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
