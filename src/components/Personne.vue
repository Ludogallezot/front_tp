<template>
<div class="container">
   <div class="row">
    <div class="col-8">

  <div v-if="currentPersonne">
    
<div class="mb-3 row">
    <label for="id" class="col-sm-4 col-form-label">Identifiant</label>
    <div class="col-sm-8">
      <input type="text" class="id form-control" id="id" v-model="currentPersonne.id" readonly/>
    </div>
  </div>
<div class="mb-3 row">
    <label for="name" class="col-sm-4 col-form-label">Nom patronymique</label>
    <div class="col-sm-8">
      <input type="text" class="name form-control" id="name" v-model="currentPersonne.name"/>
    </div>
  </div>
<div class="mb-3 row">
    <label for="surname" class="col-sm-4 col-form-label">Prénom</label>
    <div class="col-sm-8">
      <input type="text" class="surname form-control" id="surname" v-model="currentPersonne.surname"/>
    </div>
  </div>
<div class="mb-3 row">
    <label for="phone" class="col-sm-4 col-form-label">Téléphone</label>
    <div class="col-sm-8">
      <input type="text" class="phone form-control" id="phone" v-model="currentPersonne.phone"/>
    </div>
  </div>
<div class="mb-3 row">
    <label for="city" class="col-sm-4 col-form-label">Ville</label>
    <div class="col-sm-8">
      <input type="text" class="city form-control" id="city" v-model="currentPersonne.city"/>
    </div>
  </div>

  </div>
  <div v-else>
    <br />
    <p>Il n'y a pas de Personne selectionnée</p>
  </div>
</div>
</div>
</div>

      <button type="submit" class="badge badge-success" @click="updatePersonne">Modifier</button>
    <p>{{ message }}</p>
  <button class="badge badge-danger mr-2" @click="deletePersonne">Supprimer</button>


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
