import express, { json } from "express";

const app = express();

app.use(express.json());

let currentUser = {
  name: "john doe",
  age: 54,
  hairColor: "brown",
  hobbies: ["basketball,golf"],
};

let products = [
  {
    name: "flat-screen TV",
    price: "$300",
    description: "its okay",
    rating: 4.5,
  },
  {
    name: "smartphone",
    price: "$400",
    description: "its good",
    rating: 3.5,
  },
  {
    name: "mug",
    price: "$30",
    description: "its fine",
    rating: 2.5,
  },
];

let users = [
  {
    name: "Person 1",
    age: 29,
    hairColor: "brown",
    hobbies: ["gym", "music"],
  },
  {
    name: "Person 35",
    age: 59,
    hairColor: "blonde",
    hobbies: ["sport", "biology"],
  },
  {
    name: "person 23",
    age: 66,
    hairColor: "bald",
    hobbies: ["running", "cars"],
  },
];

app.get("/current-user", (req, res) => {
  res.json(currentUser);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  res.json(users.find(user => user.id === id));
});

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: updatedUser } = req.body;

  users = users.map(user => (user.id === id ? updatedUser : user));

  res.json(users.find(user => user.id === id));
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  res.json(products.find(product => product.id === id));
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5173, () => {
  console.log("Server is listening on port 5173");
});
