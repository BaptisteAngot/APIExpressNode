module.exports = app => {
    // Fichier qui va contenir les routes de l'application

    // Importation du controller
    const tutorials = require("../controllers/tutorial.controller");

    var router = require("express").Router();

    // Route pour créer un nouveau tutoriel en utilisant la méthode POST
    router.post("/", tutorials.create);

    // Route pour récupérer tous les tutoriels en utilisant la méthode GET
    router.get("/", tutorials.findAll);

    // Route pour récupérer tous les tutoriels publiés en utilisant la méthode GET
    router.get("/published", tutorials.findAllPublished);

    // Route pour récupérer un seul tutoriel en utilisant la méthode GET
    router.get("/:id", tutorials.findOne);

    // Route pour mettre à jour un tutoriel en utilisant la méthode PUT
    router.put("/:id", tutorials.update);

    // Route pour supprimer un tutoriel en utilisant la méthode DELETE
    router.delete("/:id", tutorials.delete);

    // Route pour supprimer tous les tutoriels en utilisant la méthode DELETE
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
};
