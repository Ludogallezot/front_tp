import http from "../http-common";

// utilisation du getall
class PersonneDataService {
  getAll() {
    return http.get("/entree");
  }

// utilisation du get par id
  get(id) {
    return http.get(`/entree/${id}`);
  }

// data représente les données du formulaire (nom, prénom, téléphone, ville) la reponse 

  create(data) {
    return http.post("/entree", data);
  }

// création des deux dernières fonctions update et delete

// update
  update(data) {
    return http.put("/entree", data);
  }

//delete
  delete(id) {
    return http.delete(`/entree/${id}`);
  }

}

export default new PersonneDataService();
