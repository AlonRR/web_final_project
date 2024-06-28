const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {res.json({page:"login.html"});});

const user= ()=>{
  const data = fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8');
  return JSON.parse(data);
  console.log(data);
};

const login = (username, password) => {
  const users = login();
  const user = users.find(user => user.username === username && user.password === password);
  return user ? true : false;
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (login(username, password)) {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


