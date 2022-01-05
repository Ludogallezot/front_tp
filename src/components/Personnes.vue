<template>

<div class="container">
  <div class="row"> 
    <div class="col-4">
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-black"
        :class="{ active: id == currentIndex }"
        v-for="(personne, id) in personnes"
        :key="id"
        @click="setActivePersonne(personne, id)"
        >
        {{ personne.surname }} {{ personne.name }}
      </li>
    </ul> 
  </div>



  <div class="col-5">
    <div class="card">
      <ul class="list-group list-group-flush">


          <div v-if="currentPersonne">

            <li class="list-group-item bg-secondary">{{ currentPersonne.name }}</li>
            <li class="list-group-item bg-secondary">{{ currentPersonne.surname }}</li>
            <li class="list-group-item bg-secondary">{{ currentPersonne.phone }}</li>
            <li class="list-group-item bg-secondary">{{ currentPersonne.city }}</li>

            <router-link :to="'/personnes/' + currentPersonne.id" class="badge badge-warning">Modifier</router-link>



          </div>
          <div v-else>
            <br />
            <p class="bg-secondary">Cliquez sur une des personnes pour afficher les détails.</p>
          </div>
          <!-- J'ai mis en bg-secondary pour qu'on voit le pavé à côté -->
        </ul> 
      </div>
    </div>




  </div>
</div>

</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "personnes",
  data() {
    return {
      personnes: [],
      currentPersonne: null,
      currentIndex: -1,
    };
  },
  methods: {
    getPersonnes() {
      PersonneDataService.getAll()
      .then(response => {
        this.personnes = response.data;

      })
      .catch(e => {
        console.log(e);
      });
    },

    setActivePersonne(personne, index) {
      this.currentPersonne = personne;
      this.currentIndex = personne ? index : -1;
    },
  },
  mounted() {
    this.getPersonnes();
  }
};
</script>
