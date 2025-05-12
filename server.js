const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); 
const PORT = 3000;
app.use(express.json()); // Make Express parse JSON request bodies

// Basic Test Route
app.get('/', (req, res) => {
  res.send('Hello from Expresssss!');
});
app.get('/express', (req, res) => {
  res.send('Expresssss!');
});
app.post('/log', (req, res) => {
  console.log('前端点击了按钮');
  res.send('Logged!');
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
