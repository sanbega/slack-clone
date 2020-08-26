require("dotenv");

const express = require("express");

const { v4: uuidV4 } = require("uuid");

const port = process.env.PORT || 3000;

const server = express();

server.use(express.json({}));

// Express, node clase

// @TODO --> Crear un endpoint post que se llame sign-in,  reciba email y contraseña y me diga si el usaurio existe

class User {
  constructor({ name, username, password, email }) {
    this.email = email;
    this.name = name;
    this.username = username;
    this.password = password;
    this.id = uuidV4();
  }
}

server.get("/status", (req, res) => {
  res.json({
    message: "This is API Slack clone version 1.0",
  });
});

server.post("/sign-up", (req, res) => {
  const { email, password, username, name } = req.body;

  if (!name) {
    res.status(400).json({
      message: "Necesito que agregues un nombre!.",
    });
  }

  //@TOTDO valdiat que sea un email, el password minimo seis caracteres y que tenga usernama y name

  const user = new User({
    email,
    password,
    username,
    name,
  });

  res.status(201).json({
    data: user,
  });
});

server.listen(port, () => {
  console.log("Slack clone is running!!!.");
});
