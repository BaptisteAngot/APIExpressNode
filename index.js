const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// récupération des données au format JSON
app.use(express.json());

// récupération des données d'un formulaire
app.use(express.urlencoded({ extended: true }));

// route par défaut
app.get("/", (req, res) => {
    res.json({ message: "Welcome to this tutorial" });
});

require("./app/routes/tutorial.route")(app);

// définition du port d'écoute
const PORT = process.env.PORT || 7070;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
