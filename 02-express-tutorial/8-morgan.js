//TODO: npm i morgan
const express = require("express");
const app = express();
const morgan = require("morgan");
let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Home Page!");
});

app.post("/login", (req, res) => {
  // console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please Provide Credentials");
});

//parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      error: "You must provide a name",
    });
  }
  res.status(201).send({ success: true, person: name });
});

app.put("/api/people?:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(400).json({
      success: false,
      error: "You must provide a name",
    });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({
    success: true,
    data: newPeople,
  });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(400).json({
      success: false,
      error: "You must provide a details",
    });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  res.status(200).json({
    success: true,
    data: newPeople,
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
